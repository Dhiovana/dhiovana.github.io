window.onload = async () => {
    await fetch('https://rafaelescalfoni.github.io/desenv_web/restaurante/items.json')
        .then(async response => await response.json())
        .then(async responseJSON => {
            responseJSON.forEach((item) => {
                createItem(item)
            })
        })
}

const createItem = (item) => {
    const items = document.querySelector(".items")
    const name = typeof item.name !== 'undefined' ? item.name : item.title
    const prices = item.price.split('$')
    console.log(prices)
    const div = `<div class="col-3 mb-5">
                    <div class="card h-100" style="width: 18rem;">
                        <img src="${'https://raw.githubusercontent.com/rafaelescalfoni/rafaelescalfoni.github.io/main/desenv_web/restaurante/' + item.photo}" class="card-img-top" alt="${name}">
                        <div class="card-body d-flex align-items-start flex-column">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${item.details}</p>
                                <a href="#" class="btn btn-danger mt-auto">${item.price}</a>   
                        </div>
                    </div>
                </div>`
    items.innerHTML += div
}