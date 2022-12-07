// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
    return parent.querySelector(selector)
}

  // retrieve data from localstorage
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}
  // save data to local storage
export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}
  // set a listener for both touchend and click
export function setClick(selector, callback) {
    qs(selector).addEventListener('touchend', event => {
      event.preventDefault()
      callback()
    })
    qs(selector).addEventListener('click', callback)
}
  
export function getParams(param) {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    return urlParams.get(param)
}
  
export function renderListWithTemplate(
    templateElement,
    parentElement,
    list,
    category = '',
    callback
    ) {
    parentElement.innerHTML = ''
    list.map(animal => {
      const node = templateElement.content.cloneNode(true)
      const childNode = callback(node, product, category)
      parentElement.appendChild(childNode)
    })
}
  
export async function loadTemplate(path) {
    const html = await fetch(path).then(data => data.text())
    const template = document.createElement('template')
    template.innerHTML = html
    return template
}


  