function estados() {
    let opcoes = ["GO", "MG", "SP", "RJ", "AM", "PA"]
    opcoes.sort()
    var opcao1 = document.getElementById("1");
    var opcao2 = document.getElementById("2");
    var opcao3 = document.getElementById("3");
    var opcao4 = document.getElementById("4");
    var opcao5 = document.getElementById("5");
    var opcao6 = document.getElementById("6");
    opcao1.innerHTML = opcoes[0]
    opcao2.innerHTML = opcoes[1]
    opcao3.innerHTML = opcoes[2]
    opcao4.innerHTML = opcoes[3]
    opcao5.innerHTML = opcoes[4]
    opcao6.innerHTML = opcoes[5]
}