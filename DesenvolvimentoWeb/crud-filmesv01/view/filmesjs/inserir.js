window.onload = function() {
    fetch("../controller/generoListar.php")
        .then(function(response) {
            if (response.ok !== true) {
                let msg = response.status + " - " + response.statusText
                document.querySelector('#msgErro').textContent = msg
            } else return response.json()
        })
        .then(function(responseJSON) {
            if (responseJSON.erro === false) cbSucessoListarGeneroInserir(responseJSON)
            else document.querySelector('#msgErro').textContent = responseJSON.msgErro
        })
        .catch(function(erro) {
            document.querySelector('#msgErro').textContent = erro
        })
}

function cbSucessoListarGeneroInserir(responseJSON) {
    montarSelect(responseJSON.dados)
}

function montarSelect(dados) {
    for (const i in dados) {
        let genero = dados[i]
        let $opt = document.createElement('option')
        $opt.value = genero.id
        $opt.textContent = genero.descricao
        document.querySelector('#cmbGeneros').appendChild($opt)
    }
}

const $btnEnviar = document.querySelector('#enviar')
$btnEnviar.addEventListener('click', function(event) {
    event.preventDefault()
    let filme = {
        "titulo": document.querySelector('#titulo').value,
        "avaliacao": parseFloat(document.querySelector('#avaliacao').value),
        "genero_id": parseInt(document.querySelector('#cmbGeneros').value)
    }
    let configMetodo = {
        method: "POST",
        body: JSON.stringify(filme),
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        }
    }

    fetch("../controller/filmeInserir.php", configMetodo)
        .then(function(response) {
            if (response.ok !== true) {
                let msg = response.status + " - " + response.statusText
                document.querySelector('#msgErro').textContent = msg
            } else return response.json()
        })
        .then(function(responseJSON) {
            if (responseJSON.erro === false) cbSucessoInserirFilme(responseJSON)
            else document.querySelector('#msgErro').textContent = responseJSON.msgErro
        })
})

function cbSucessoInserirFilme(responseJSON) {
    document.querySelector('#msgSucesso').textContent = responseJSON.msgSucesso
    setTimeout(function() {
        window.location.href = "../view/filmes.html"
    }, 3500)
}