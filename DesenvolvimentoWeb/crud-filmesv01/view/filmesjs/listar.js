fetch('../controller/filmeListar.php')
    .then(function(response) {
        if (response.ok !== true) {
            let msg = response.status + " - " + response.statusText;
            document.querySelector('#msgErro').textContent = msg;
        } else return response.json()
    })
    .then(function(responseJSON) {
        if (responseJSON.erro === false) cbSucessoListarFilme(responseJSON)
        else document.querySelector('#msgErro').textContent = responseJSON.msgErro;
    })
    .catch(function(erro) {
        document.querySelector('#msgErro').textContent = erro
    });

function montarTabela(dados) {
    for (const i in dados) {
        let filme = dados[i];
        const $tr = document.createElement('tr');
        criarTDePendurar($tr, filme.id, false)
        criarTDePendurar($tr, filme.titulo, false)
        criarTDePendurar($tr, filme.avaliacao, false)
        criarTDePendurar($tr, filme.genero_descricao, false)
        let links = "<a href=filmeFormBuscar.html?id=" + filme.id + ">[Editar]</a>"
        links += "<a href=#>[Excluir]<a/>"
        criarTDePendurar($tr, links, true)
        document.querySelector('tbody').appendChild($tr)
    }
}

const $corpoTabela = document.querySelector('tbody')
$corpoTabela.addEventListener('click', function(event) {
    let link = event.target
    let filmeAExcluir = obterValorDaColunaId(link)
    if (filmeAExcluir > 0) {
        console.log(filmeAExcluir)
        excluirFilme(filmeAExcluir)
    } else document.querySelector('#msgErro').textContent = "Valor inválido para exclusão"
})

function obterValorDaColunaId(link) {
    if (link.textContent === "[Excluir]") {
        let coluna = link.parentNode
        let linha = coluna.parentNode
        let idText = linha.firstChild
        return parseInt(idText.textContent)
    }
    return null
}

function criarTDePendurar(noPai, informacao, ehHTML) {
    let td = document.createElement('td')
    if (ehHTML) td.innerHTML = informacao
    else td.textContent = informacao
    noPai.appendChild(td)
}

function cbSucessoListarFilme(responseJSON) {
    montarTabela(responseJSON.dados)
}