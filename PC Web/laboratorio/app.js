function countText() {
    let text = document.form_main.text.value;
    document.getElementById('characters').innerText = text.length;
    document.getElementById('words').innerText = text.length == 0 ? 0 : text.split(/\s+/).length;
}
const text = document.getElementById("text")
const carregar = document.getElementById("carregar")

const splitText = (text) => {
    let showSplit = text.value.split(" ")
    console.log(showSplit)
}

carregar.addEventListener("click", () => {
    splitText(text);
    console.log("show de bola")
})

