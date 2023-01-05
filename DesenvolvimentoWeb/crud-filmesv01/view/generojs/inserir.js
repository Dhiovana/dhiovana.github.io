const $btnEnviar = document.querySelector('#enviar');
$btnEnviar.addEventListener('click', function(event) {
    event.preventDefault();
    let genero = {
        "descricao": document.querySelector("#descricao").value
    }
    let configMetodo = {
        method: "POST",
        body: JSON.stringify(genero),
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        }
    };
    fetch("../controller/generoInserir.php", configMetodo)
        .then(function(response) {
            if (response.ok !== true) {
                let msg = response.status + " - " + response.statusText;
                document.querySelector('#msgErro').textContent = msg;
            } else return response.json();
        })
        .then(function(responseJSON) {
            if (responseJSON.erro === false)
                cbSucessoInserirGenero(responseJSON);
            else document.querySelector('#msgErro').textContent = responseJSON.msgErro;
        })
        .catch(function(erro) {
            document.querySelector('#msgSucesso').textContent = erro;
        })
})

function cbSucessoInserirGenero(responseJSON) {
    document.querySelector('#msgSucesso').textContent = responseJSON.msgSucesso;
    setTimeout(function() {
        window.location.href = "../view/generos.html";
    }, 3500);
}