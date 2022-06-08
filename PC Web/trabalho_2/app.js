const btn=document.getElementById("botao");
const btnz=document.getElementById("botaoz");
const btnzz=document.getElementById("botaozz");
const firstNote=document.getElementById("nota1");
const secondNote=document.getElementById("nota2");
const thirdNote=document.getElementById("nota3");
const fahr=document.getElementById("fahr");
const first=document.getElementById("firstInput");
const second=document.getElementById("secondInput");

const verifyNumber = num =>{
    num = parseFloat(num)
    return (!num || isNaN(num))? 0: num
}

const somar = (first=0, second=0)=>{
    first = verifyNumber(first)
    second = verifyNumber(second)
    return first + second;
}
const whoMax = (first=0, second=0)=>{
    first = verifyNumber(first)
    second = verifyNumber(second)
    if (first > second)
    {
        return first;
    }
    if (second > first)
    {
        return second;
    }
    if (first == second)
    {
        return first || second;
    }
}
function isPrimeOrNot(first, second){
    if(first < 1) return false;
    if(second < 1) return false;
    if (first <= 3) return true;
    if (second <= 3) return true;
    if (first % 2 == 0 || first % 3 == 0) return false; 
    if (second % 2 == 0 || second % 3 == 0) return false; 

    for(let i = 5; i * i <= first; i += 6){
        if (first % i == 0 || first % (i + 2) == 0) return false;
    }
    for(let k = 5; k * k <= second; k += 6){
        if (second % k == 0 || second % (k + 2) == 0) return false;
    }
    return true;
}
const pitagoras = (first=0, second=0)=>{
    let hip = Math.sqrt(first * first+second*second);
    return hip;
}
const converse = (fahr=0) =>{
    let cel = (fahr - 32) / 9;
    return cel;
}
const finalMedia = (firstNote=0, secondNote=0, thirdNote=0 )=>{
     let media = (firstNote * 2 + secondNote * 3 + thirdNote * 5) / 10;
    return media;
}
btn.addEventListener("click", ()=>{
    const getValue=document.getElementById("getValue");
    const maxNumber=document.getElementById("maxNumber");
    const numPrimo=document.getElementById("numPrimo");
    const calcHip=document.getElementById("calcHip");

    getValue.innerHTML = somar(first.value, second.value);
    maxNumber.innerHTML = whoMax(first.value, second.value);
    numPrimo.innerHTML = isPrimeOrNot(first.value, second.value);
    calcHip.innerHTML = pitagoras(first.value, second.value);
})

btnz.addEventListener("click", ()=>{
    const converseCelsius=document.getElementById("converseFahrenheitToCelsius");
    converseCelsius.innerHTML = converse(fahr.value);   
})
btnzz.addEventListener("click", ()=>{
    const mediaFinal=document.getElementById("mediaFinal");
    mediaFinal.innerHTML = finalMedia(firstNote.value, secondNote.value, thirdNote.value);
})