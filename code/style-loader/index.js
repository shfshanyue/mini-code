module.exports = function(source) {
  return `
function injectCss(css) {
  const style = document.createElement('style')
  style.appendChild(document.createTextNode(css))
  document.head.appendChild(style)
}

injectCss(\`${source}\`)
  `
}