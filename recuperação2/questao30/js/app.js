function Palavra() {
    let input = document.getElementById("input").value;
    let texto = "Acima de tudo sê fiel a ti mesmo,  Disso se segue, como a noite ao dia, Que não podes ser falso com ninguém.";
    texto = texto.replaceAll(',', '').replaceAll('.', '');
    console.log(texto)
    let T = texto.split(" ");
    let p = document.getElementById("p");
    p.innerHTML = "";
    for (let i = 0; i < T.length; i++) {
        if (T[i] == input) {
            p.innerHTML = p.innerHTML + "<mark style='background-color:yellow; color:black'>" + T[i] + "</mark>" + " "
        } else {
            p.innerHTML = p.innerHTML + T[i] + " "
        }
    }
}