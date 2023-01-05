function excluirFilme(id) {
    if (confirm('Confirma a exclusão do filme de id ' + id + '?')) {
        let filme = {
            "id": id
        }
        let configMetodo = {
            method: "DELETE",
            body: JSON.stringify(filme),
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        }
        fetch("../controller/filmeExcluir.php", configMetodo)
            .then(function(response) {
                if (response.ok !== true) {
                    let msg = response.status + " - " + response.statusText
                    document.querySelector('#msgErro').textContent = msg
                } else return response.json()
            })
            .then(function(responseJSON) {
                if (responseJSON.erro === false) cbSucessoExcluirFilme(responseJSON)
                else document.querySelector('#msgErro').textContent = responseJSON.msgErro
            })
            .catch(function(erro) {
                document.querySelector('#msgErro').textContent = erro
            })
    }
}

function cbSucessoExcluirFilme(responseJSON) {
    document.querySelector('#msgSucesso').textContent = responseJSON.msgSucesso
    setTimeout(function() {
        window.location.href = "../view/filmes.html"
    }, 3500)
}