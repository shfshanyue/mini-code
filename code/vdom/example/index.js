import { h, patch } from '..'

// 示例一:
// 事件监听器
{
  let vnode
  const data = {
    count: 0
  }

  const view = data => h(
    'button',
    {
      onClick() {
        data.count++;
        render()
      }
    },
    data.count
  )

  function render() {
    vnode = patch(vnode, view(data))
  }

  window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('app1')
    vnode = patch(container, view(data))
  })
}

// 示例二:
// 带有 key 的 list
{
  const view1 = h('div', {
    style: {
      opacity: data.opacity,
      backgroundColor: 'red'
    },
  }, [
    h('div', { key: 1 }, 'hello, 1'),
    h('div', { key: 2 }, 'hello, 2'),
    h('div', { key: 3 }, 'hello, 3'),
    h('div', { key: 4 }, 'hello, 4'),
    h('div', { key: 5 }, 'hello, 5'),
  ])
  
  const view2 = h('div', {
    style: {
      opacity: data.opacity,
      backgroundColor: 'red'
    },
  }, [
    h('div', { key: 3 }, 'hello, 3'),
    h('div', { key: 4 }, 'hello, 4'),
    h('div', { key: 5 }, 'hello, 5'),
    h('div', { key: 1 }, 'hello, 1'),
    h('div', { key: 2 }, 'hello, 2'),
  ])
  
  const container = document.getElementById('app2')
  vnode = patch(container, view1)
  patch(vnode, view2)
}