function colorChange(id) {
    document.getElementById(id).style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let id = 0;

function criaQuadrado() {
    let divGrande = document.getElementById("meuDiv")
    let quadrado = document.createElement("div");
    quadrado.classList.add("quadrado");
    quadrado.id = id;
    let br = document.createElement("br");
    divGrande.appendChild(quadrado);
    divGrande.appendChild(br);
    quadrado.addEventListener("mouseover", function() {
        colorChange(quadrado.id)
    })
    id++;
}