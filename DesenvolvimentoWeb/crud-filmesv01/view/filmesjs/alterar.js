const $btnAlterar = document.querySelector('#alterar')
$btnAlterar.addEventListener('click', function(event) {
    event.preventDefault()
    let filme = {
        "id": document.querySelector("#id").value,
        "titulo": document.querySelector('#titulo').value,
        "avaliacao": parseFloat(document.querySelector('#avaliacao').value),
        "genero_id": parseInt(document.querySelector('#cmbGeneros').value)
    }
    let configMetodo = {
        method: "PUT",
        body: JSON.stringify(filme),
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        }
    }

    fetch("../controller/filmeAlterar.php", configMetodo)
        .then(function(response) {
            if (response.ok !== true) {
                let msg = response.status + " - " + response.statusText
                document.querySelector('#msgErro').textContent = msg
            } else return response.json()
        })
        .then(function(responseJSON) {
            if (responseJSON.erro === false) cbSucessoAlterarFilme(responseJSON)
            else document.querySelector('#msgErro').textContent = responseJSON.msgErro
        })
        .catch(function(erro) {
            document.querySelector('#msgErro').textContent = erro
        })
})

const $btnCancelar = document.querySelector('#cancelar')
$btnCancelar.addEventListener('click', function() {
    if (confirm("Deseja mesmo cancelar a alteração?"))
        window.location.href = "../view/filmes.html"
})

function cbSucessoAlterarFilme(responseJSON) {
    document.querySelector('#msgSucesso').textContent = responseJSON.msgSucesso
    setTimeout(function() {
        window.location.href = "../view/filmes.html"
    }, 3500)
}