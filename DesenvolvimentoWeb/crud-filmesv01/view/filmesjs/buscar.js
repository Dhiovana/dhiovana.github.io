window.onload = function() {
    let qs = window.location.search.replace('?', '')
    let parametrosBuscar = qs.split("=")
    let id = parametrosBuscar[1]
    buscarFilme(id)
}

function buscarFilme(id) {
    fetch("../controller/filmeBuscar.php?id=" + id + "")
        .then(function(response) {
            if (response.ok !== true) document.querySelector('#msgErro').textContent = response.status + " - " + response.statusText
            else return response.json()
        })
        .then(function(responseJSON) {
            if (responseJSON.erro === false) cbSucessoBuscarFilme(responseJSON)
            else document.querySelector('#msgErro').textContent = responseJSON.msgErro
            return responseJSON.dados.genero_id
        })
        .then(function(idGeneroAtual) {
            buscarePosicionarGeneros(idGeneroAtual)
        })
        .catch(function(erro) {
            document.querySelector('#msgErro').textContent = erro
        })
}

function cbSucessoBuscarFilme(responseJSON) {
    let filme = responseJSON.dados
    document.querySelector('#id').value = filme.id
    document.querySelector('#titulo').value = filme.titulo
    document.querySelector('#avaliacao').value = filme.avaliacao
}

function buscarePosicionarGeneros(idGeneroAtual) {
    fetch("../controller/generoListar.php")
        .then(function(response) {
            if (response.ok !== true) document.querySelector('#msgErro').textContent = response.status + " - " + response.statusText
            else return response.json()
        })
        .then(function(responseJSON) {
            if (responseJSON.erro === false) {
                cbSucessoListarGeneroBuscar(responseJSON, idGeneroAtual)
                document.querySelector('#msgSucesso').textContent = responseJSON.msgSucesso
                setTimeout(function() {
                    document.querySelector('#msgSucesso').textContent = ""
                }, 2500)
            } else document.querySelector('#msgSucesso').textContent = responseJSON.msgErro
        })
        .catch(function(erro) {
            document.querySelector('#msgErro').textContent = erro
        })
}

function cbSucessoListarGeneroBuscar(responseJSON, idGeneroAtual) {
    console.log("id", idGeneroAtual)
    let generos = responseJSON.dados
    if (generos != null) montarSelectGeneros(generos, idGeneroAtual)
}

function montarSelectGeneros(generos, idGeneroAtual) {
    for (const i in generos) {
        let genero = generos[i]
        let $opt = document.createElement('option')
        $opt.value = genero.id
        if (genero.id === idGeneroAtual) $opt.setAttribute('selected', 'selected')
        $opt.textContent = genero.descricao
        document.querySelector('#cmbGeneros').appendChild($opt)
    }
}