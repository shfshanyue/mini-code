import { h, patch } from '../index.js'

// 示例一:
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

