fetch("../controller/generoListar.php")
    .then(function(response) {
        if (response.ok !== true) {
            let msg = response.status + " - " + response.statusText;
            document.querySelector('$msgErro').textContent = msg;
        } else return response.json();
    })
    .then(function(responseJSON) {
        if (responseJSON.erro === false) cbSucessoListarGenero(responseJSON);
        else document.querySelector('#msgErro').textContent = responseJSON.msgErro;
    })
    .catch(function(erro) {
        document.querySelector('#msgErro').textContent = erro;
    })

function cbSucessoListarGenero(responseJSON) {
    montarTabela(responseJSON.dados);
}

function montarTabela(dados) {
    for (const i in dados) {
        let genero = dados[i];
        const $tr = document.createElement('tr');
        criarTDePendurar($tr, genero.id, false);
        criarTDePendurar($tr, genero.descricao, false);
        let links = "<a href=generoFormBuscar.html?id=" + genero.id + ">[Editar]</a>";
        links += "<a href=#>[Excluir]<a/>"
        criarTDePendurar($tr, links, true);
        document.querySelector('tbody').appendChild($tr);
    }
}

const $corpoTabela = document.querySelector('tbody');
$corpoTabela.addEventListener('click', function(event) {
    let link = event.target;
    let generoAExcluir = obterValorDaColunaId(link);
    if (generoAExcluir > 0) {
        excluirGenero(generoAExcluir);
    } else document.querySelector('#msgErro').textContent = "Valor inválido para exclusão";
})

function obterValorDaColunaId(link) {
    if (link.textContent === "[Excluir]") {
        let coluna = link.parentNode;
        let linha = coluna.parentNode;
        let idText = linha.firstChild;
        return parseInt(idText.textContent);
    }
    return null;
}

function criarTDePendurar(noPai, informacao, ehHTML) {
    let td = document.createElement('td');
    if (ehHTML)
        td.innerHTML = informacao;
    else td.textContent = informacao;
    noPai.appendChild(td);
}