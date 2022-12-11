let a1 = [];
let j = 1;

function formula() {
    let n = document.getElementById("n").value
    let r = document.getElementById("r");
    if (n >= 1) {
        a1.push(1);
        a1.push(1);
        n = n - 3
        for (let i = 0; i <= n; i++) {
            let m = a1[i] + a1[j]
            a1.push(m)
            j++
        }
    }
    console.log(a1)
    r.innerHTML = a1
}