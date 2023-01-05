window.onload = async () => {
    await fetch('https://rafaelescalfoni.github.io/desenv_web/restaurante/items.json')
        .then(async response => await response.json())
        .then(async responseJSON => {
            responseJSON.forEach((item) => {
                criaItem(item)
            })
        })
}
const criaItem = (item) => {
    const items = document.querySelector(".items")
    const name = typeof item.name !== 'undefined' ? item.name : item.title
    const prices = item.price.split('$')
    const div = `<div class="col-4 mb-4">
                 <div class="card h-30" style="width: 17rem;">
                     <img src="${'https://raw.githubusercontent.com/rafaelescalfoni/rafaelescalfoni.github.io/main/desenv_web/restaurante/' + item.photo}" class="card-img-top" alt="${name}">
                     <div class="card-body d-flex align-items-start flex-column">
                         <h2 class="card-title">${name}</h2>
                         <h4 class="card-text">${item.details}</h4>
                              <a href="#" class="btn btn-danger mt-auto">${item.price}</a>   
                     </div>
                </div>
            </div>`
    items.innerHTML += div
}