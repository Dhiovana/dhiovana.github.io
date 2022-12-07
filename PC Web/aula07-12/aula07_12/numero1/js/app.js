const inputRaio = document.getElementById("raio")
const inputAltura = document.getElementById("altura")
const bnt = document.getElementById ("bnt")

const calculaLitro =  (r,h) =>{
    const pi = Math.PI
    const litro = pi * Math.pow(r, 2) * h 
    return litro/1000
}
bnt.addEventListener("click", () =>{
    const demo = document.getElementById ("demo") 
    demo.innerHTML = `A capacidade em litros é: ${calculaLitro(inputRaio.value, inputAltura.value).toFixed(2)}.`
    console.log(inputRaio.value)
    console.log(inputAltura.value)
})

