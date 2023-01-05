const $btnAlterar = document.querySelector('#alterar');
$btnAlterar.addEventListener('click', function(event) {
    event.preventDefault();
    let genero = {
        "id": document.querySelector('#id').value,
        "descricao": document.querySelector('#descricao').value
    };
    let configMetodo = {
        method: "PUT",
        body: JSON.stringify(genero),
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        }
    };

    fetch("../controller/generoAlterar.php", configMetodo)
        .then(function(response) {
            if (response.ok !== true) {
                let msg = response.status + " - " + response.statusText;
                document.querySelector('#msgErro').textContent = msg;
            } else return response.json();
        })
        .then(function(responseJSON) {
            if (responseJSON.erro === false)
                cbSucessoAlterarGenero(responseJSON);
            else document.querySelector('#msgErro').textContent = responseJSON.msgErro;
        })
        .catch(function(erro) {
            document.querySelector('#msgSucesso').textContent = erro;
        })
})

const $btnCancelar = document.querySelector('#cancelar');
$btnCancelar.addEventListener('click', function() {
    if (confirm('Deseja mesmo cancelar a alteração?'))
        window.location.href = '../view/generos.html';
})

function cbSucessoAlterarGenero(responseJSON) {
    document.querySelector('#msgSucesso').textContent = responseJSON.msgSucesso;
    setTimeout(function() {
        window.location.href = '../view/generos.html';
    }, 3500);
}