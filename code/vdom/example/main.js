import { h, patch } from '../index.js'

// 示例一:
// 可正常渲染元素
{
  const list = h('div', {
    style: {
      border: '1px solid #888',
      padding: '4px'
    },
  }, [
    h('div', null, [
      h('div', null, [
        'Author: ',
        h('a', { href: "https://github.com/shfshanyue" }, "shanyue")
      ])
    ]),
  ])
  
  const container = document.getElementById('app1')
  patch(container, list)
}


// 示例二:
// 带有 key 的列表
{
  const list = h('div', {
    style: {
      border: '1px solid #888',
      padding: '4px'
    },
  }, [
    h('div', { key: 1 }, 'Demo 1'),
    h('div', { key: 2 }, 'Demo 2'),
    h('div', { key: 3 }, 'Demo 3'),
    h('div', { key: 4 }, 'Demo 4')
  ])
  
  const container = document.getElementById('app2')
  patch(container, list)
}

// 示例三:
// 计数器
{
  let vnode
  const data = {
    count: 0
  }

  function Counter (data) {
    const handleClick = () => {
      data.count++;
      render()
    }
    return h('div', null, [
      h('div', null, data.count),
      h('button', { onClick: handleClick }, '+1')
    ])
  }

  function render () {
    patch(vnode, Counter(data))
  }
  const container = document.getElementById('app3')
  patch(container, list)
}
