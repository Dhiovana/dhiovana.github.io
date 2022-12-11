let qtd = 0;
let a1 = [];
let i = 0;

function numero() {
    qtd = document.getElementById("qtd").value
    document.getElementById("P1").style.display = "none"
    document.getElementById("P2").style.display = "block"
}

function calcula() {
    let n = document.getElementById("add").value;
    let r1 = document.getElementById("R1");
    let r2 = document.getElementById("R2");

    a1.push(n);
    i++
    if (i == qtd) {
        let a2 = [];
        for (let j = a1.length - 1; j >= 0; j--) {
            a2.push(a1[j])
        }
        r1.innerHTML = a1
        r2.innerHTML = a2
    }
}