const numberOne = document.getElementById("numberOne");
const btn = document.getElementById("botao");
const btnn = document.getElementById("btn");
const btn1 = document.getElementById("botao1");
const numberTwo = document.getElementById("numberTwo")
const getSum = document.getElementById("getSum");
const btn2 = document.getElementById("botao2");
const numberThree = document.getElementById("numberThree")
const btn3 = document.getElementById("justBtn");
const getPrimo = document.getElementById("getPrimo");

const fatorial = (numberOne) => {
    let result = numberOne
    for (let i = 1; i < numberOne; i++) {
        result = result * i;
    }
    return result
}

const potencia = (numberTwo) => {
    let resultOfPow = numberTwo
    for (let i = 1; i <= 30; i++) {
        resultOfPow = Math.pow(numberTwo, i)
    }
    return resultOfPow;
}
const pares = (getsum) => {
    let soma = 0
    for (let i = 1; i <= 1000; i++) {
        if (i % 2 == 0) {
            soma += i;
        }
    }
    return soma;
}

const fibo = (numberThree) => {
    let sum = 0
    let beforeNumber = 0
    let afterNumber = 1
    for (let i = 0; i < numberThree; i++) {
        sum = beforeNumber + afterNumber;
        beforeNumber = afterNumber;
        afterNumber = sum;
    }
    return beforeNumber;
}
const justPrime = (getPrimo) => {
    for (let i = 2; i <= getPrimo; i++) {
        if (justPrime2(i));
    }
    return getPrimo;
}
const justPrime2 = (i) => {
    for (let div = 2; div < i; div++) {
        if (i % div === 0) {
            return false;
        }
    }
    return true;
}

btn.addEventListener("click", () => {
    const showFatorial = document.getElementById("fatorial");
    showFatorial.innerHTML = fatorial(numberOne.value);
})

btnn.addEventListener("click", () => {
    const showPares = document.getElementById("pares");
    showPares.innerHTML = pares(getSum.value);
})
btn1.addEventListener("click", () => {
    const showPow = document.getElementById("showPow");
    showPow.innerHTML = potencia(numberTwo.value)
})
btn2.addEventListener("click", () => {
    const showFibo = document.getElementById("showFibo");
    showFibo.innerHTML = fibo(numberThree.value)
})
btn3.addEventListener("click", () => {
    const showPrimo = document.getElementById("showPrimo");
    showPrimo.innerHTML = justPrime(getPrimo.value)
})