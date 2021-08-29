const isPrimitive = x => typeof x === 'string' || typeof x === 'number'

const sameVnode = (oldVnode, newVnode) => oldVnode.key === newVnode.key && oldVnode.tag === newVnode.tag

function vnode (tag, props, children, text) {
  return {
    tag,
    props,
    children,
    text
  }
}

function h (tag, props, children) {
  let text = null
  if (isPrimitive(children)) {
    text = children 
    children = null
  } else if (Array.isArray(children)) {
    children = children.map(x => isPrimitive(x) ? vnode(null, null, null, x) : x)
  }
  return vnode(tag, props, children, text)
}

function createElementByVNode (vnode) {
  const { tag, props, children, text } = vnode

  const element = document.createElement(tag)

  if (Array.isArray(children)) {
    for (const childVNode of children) {
      element.appendChild(
        createElementByVNode(childVNode)
      )
    }
  } else if (text) {
    element.textContent = text
  }
  updateProps(element, {}, vnode)
  vnode.element = element
  return element
}

// 
// 删除掉 element.children 中的第 [startIndex, endIndex) 个子元素
//
function removeVnodes (element, children, startIndex, endIndex) {
  for (const vNode of children.slice(startIndex, endIndex)) {
    element.removeChild(vNode)
  }
}

// 
// 新增 element.children 中的第 [startIndex, endIndex) 个子元素
//
function addVnodes (element, children, startIndex, endIndex) {
  for (const vNode of children.slice(startIndex, endIndex)) {
    element.appendChild(createElementByVNode(vNode))
  }
}

//
// 更新 className、style、attributes 及更多的属性
//
// 在 snabbdom 中，对于特殊的属性更新使用了 `module` 这个概念，做了更精细的增删改查，如
//
// 1. attribute
// 2. class
// 3. style
// 4. dataset
// 5. eventlistenter
//
// const patch = init([
//   classModule, 
//   propsModule,
//   styleModule,
//   eventListenersModule,
// ]);
//

// 
// 对于更新而言，ele.props = newVnode.props 可暴力解决，但有时可能效率过低。分一下三种情况进行讨论
//
// 1. 增: 旧节点无，新节点有。 ele.props = newVnode.props
// 2. 删: 新节点无，旧节点有。 ele.props = null
// 3. 改: 旧节点有，新节点有。 ele.props = newVnode.props (暴力解决)
//    + 对于需精细控制的 DOM 操作而言，应该仅仅更新补集 (仅更新存在于新节点而在旧节点中不存在的属性)
//    + 需要更新的 props 伪代码表示: Add (newVnode and not oldVnode) + Remove (oldVnode and not newVnode)
function updateProps (element, oldVnode, newVnode) {
  // 
  // 更新 DOM 中的 class
  //
  function updateClass () {
    if (oldVnode.props?.class !== newVnode.props?.class) {

      // 对于 class 暴力解决进行更新，如果精细控制可通过 ClassList API
      if (newVnode.props?.class) {
        element.className = newVnode.props.class
      } else {
        element.className = ''
      }
    }
  }

  // 示例一:
  // { color: 'red', fontSize: '18px' } => { backgroundColor: 'red', fontSize: '18px' }
  //
  // 示例二:
  // { color: 'red', fontSize: '20px' } => { backgroundColor: 'red', fontSize: '18px' }
  function updateStyle () {
    const oldStyle = oldVnode.props?.style
    const newStyle = newVnode.props?.style || {}

    element.style = Object.entries(newStyle).reduce((acc, [key, value]) => {
      return `${acc}${key.replace(/[A-Z]/g, x => '-' + x.toLowerCase())}: ${value};`
    }, '')
  }

  function updateAttributes () {
    const newProps = newVnode.props || {}

    Object.entries(newProps).map(([key, value]) => {
      if (key !== 'class' && key !== 'style') {
        element.setAttribute(key, value)
      }
    })
  }

  updateClass()
  updateStyle()
  updateAttributes()
}

function updateChildren (element, oldChildren, newChildren) {

  if (oldChildren) {
    // 如果仅仅在旧的虚拟节点存在 children，则需要在 DOM 中删除旧节点的所有子节点
    removeVnodes(element, oldChildren, 0, oldChildren.length)
    return
  } else if (newChildren) {
    // 如果仅仅在新的虚拟节点存在 children，则需要新的虚拟节点构建 DOM 并插入到 element 下
    addVnodes(element, newChildren, 0, newChildren.length)
    return
  }

  let oldVnodeIndex = 0, newVnodeIndex = 0
  let oldVnodeEndIndex = oldChildren.length, newVnodeEndIndx = newChildren.length
  while (oldVnodeIndex < oldVnodeEndIndex && newVnodeIndex < newVnodeEndIndx) {
    const oldVnode = oldChildren[oldVnodeIndex]
    const newVnode = newChildren[newVnodeEndIndx]
    if (oldVnode.props.key) {
      // 以下是旧新节点对比:
      // oldKey: 1 2 3 4 5 
      // newKey: 4 3 5 1 2
      // 生成 newChild 关于 key 与 index 的对应关系
      // { 4: 0, 3: 1, 5: 2, 1: 3, 2: 4 }
      const newChildrendKeyMapId = newChildren.reduce((acc, x, idx) => {
        acc[x.key] = idx
        return acc
      }, {})
      // 找到与当前旧节点 key 对应的新节点的 id
      const id = newChildrendKeyMapId[oldVnode.props.key]
      if (id) {
        // 如果有相同 key 的新旧节点
        patch(oldVnode, newChildren[id]);
        [newChildren[id], newChildren[newVnodeIndex]] = [newChildren[newVnodeIndex], newChildren[id]]
        oldVnodeIndex++
        newVnodeIndex++
      } else {
        // 如果在新节点中找不到与旧节点对应的 key，则删掉该旧节点
        // oldKey: 2 1 3 4
        // newKey: 3 1
        // 操作: Delete 2
        removeVnodes(element, oldChildren, oldVnodeIndex, oldVnodeIndex + 1)
        oldVnodeIndex++
      }
    } else {
      patch(oldVnode, newVnode)
    }
  }
  addVnodes(element, newChildren, newVnodeIndex, newVnodeEndIndx)
  removeVnodes(element, oldChildren, oldVnodeIndex, oldVnodeEndIndx)
}

function updateText (oldVnode, newVnode) {
  const element = oldVnode.element
  element.textContent = newVnode.text
}

// 
// 当两个 vNode 标签及 key 相同时，执行 patchVnode 进行更新
//
// 1. 更新 Props
// 2. 更新 Children (重点)
// 3. 更新 Text
//
function patchVnode (oldVnode, newVnode) {
  const element = newVnode.element = oldVnode.element
  updateProps(element, oldVnode, newVnode)    
  updateChildren(oldVnode.element, oldVnode.children, newVnode.children)
  updateText(oldVnode, newVnode)
}

function patch (oldVnode, newVnode) {
  if (sameVnode(oldVnode, newVnode)) {
    patchVnode (oldVnode, newVnode)
  } else if (oldVnode instanceof HTMLElement) {
    const element = createElementByVNode(newVnode)
    oldVnode.appendChild(element)
  } else {
    createElementByVNode(newVnode)
  }
  return newVnode
}

export { patch, h }
