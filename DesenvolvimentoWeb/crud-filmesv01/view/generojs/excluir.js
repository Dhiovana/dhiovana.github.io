function excluirGenero(id) {
    if (confirm("Confirma a exclusão do gênero de id " + id + "?")) {
        let genero = {
            "id": id
        };
        let configMetodo = {
            method: "DELETE",
            body: JSON.stringify(genero),
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        };

        fetch("../controller/generoExcluir.php", configMetodo)
            .then(function(response) {
                if (response.ok !== true) {
                    let msg = response.status + " - " + response.statusText;
                    document.querySelector('#msgErro').textContent = msg;
                } else return response.json();
            })
            .then(function(responseJSON) {
                if (responseJSON.erro === false)
                    cbSucessoExcluirGenero(responseJSON);
                else document.querySelector('#msgErro').textContent = responseJSON.msgErro;
            })
            .catch(function(erro) {
                document.querySelector('#msgErro').textContent = erro;
            })
    }
}

function cbSucessoExcluirGenero(responseJSON) {
    document.querySelector('#msgSucesso').textContent = responseJSON.msgSucesso;
    setTimeout(function() {
        window.location.href = "../view/generos.html";
    }, 3500);
}