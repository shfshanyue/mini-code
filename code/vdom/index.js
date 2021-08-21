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

  const ele = document.createElement(tag)

  if (Array.isArray(children)) {
    for (const childVNode of children) {
      ele.appendChild(
        createElementByVNode(childVNode)
      )
    }
  } else if (text) {
    ele.appendChild(text)
  }
  vnode.ele = ele
  return ele
}

// 
// 删除掉 element.children 中的第 [startIndex, endIndex) 个子元素
//
function removeVnodes (element, children, startIndex, endIndex) {
  for (; startIndex < endIndex; startIndex++) {
    element.removeChild(children[startIndex])
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
function updateProps (oldVnode, newVnode) {
  const element = oldVnode.element

  // 
  // 更新 DOM 中的 class
  //
  function updateClass () {
    if (oldVnode.props.class !== newVnode.props.class) {

      // 对于 class 暴力解决进行更新，如果精细控制可通过 ClassList API
      if (newVnode.props.class) {
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
    const oldStyle = oldVnode.style
    const newStyle = newVnode.style
    for ()
  }

  function updateAttributes () {

  }

  updateClass()
  updateStyle()
  updateAttributes()
}

function updateChildren (oldVnode, newVnode) {
  const element = oldVnode.element
  if (oldVnode && newVnode) {
    for (let i = 0; i < oldVnode.children?.length || 0; i++) {
      const oldChildrenElement = oldVnode.children[i]
      const newChildrenElement = newVnode?.children?.[i]
      if (sameVnode(oldChildrenElement, newChildrenElement)) {
        patchVnode(oldChildrenElement, newChildrenElement)                 
      } else {
         
      }
    }
  } else if (oldVnode) {

    // 
    // 如果仅仅在旧的虚拟节点存在 children，则需要在 DOM 中删除旧节点的所有子节点
    //
    removeVnodes(element, oldVnode.children, 0, oldVnode.children.length)
  }
}

function updateText (oldVnode, newVnode) {
  const element = oldVnode.element
  element.textContent = newVnode.text
}

// 
// 每一次 Diff 算法:
// 1. 更新 Props
// 2. 更新 Children
// 3. 更新 Text
//
function patchVnode (oldVnode, newVnode) {
  newVnode.element = oldVnode.element
  updateProps(oldVnode, newVnode)    
  updateChildren(oldVnode, newVnode)
  updateText(oldVnode, newVnode)
}

function patch (oldVnode, newVnode) {
  if (sameVnode(oldVnode, newVnode)) {
    patchVnode (oldVnode, newVnode)
  }
  else if (oldVnode.ele) {
    createElement (newVnode)
  }
}

module.exports = {
  h,
  patch
}

