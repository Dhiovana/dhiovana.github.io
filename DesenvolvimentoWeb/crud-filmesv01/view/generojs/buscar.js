window.onload = function() {
    let qs = window.location.search.replace('?', '');
    let parametrosBuscar = qs.split('=');
    let id = parametrosBuscar[1];
    buscarGenero(id);
}

function buscarGenero(id) {
    fetch("../controller/generoBuscar.php?id=" + id + "")
        .then(function(response) {
            if (response.ok !== true) {
                let msg = response.status + " - " + response.statusText;
                document.querySelector('#msgErro').textContent = msg;
            } else return response.json();
        })
        .then(function(responseJSON) {
            if (responseJSON.erro === false) {
                cbSucessoBuscarGenero(responseJSON);
                document.querySelector('#msgSucesso').textContent = responseJSON.msgSucesso;
                setTimeout(function() {
                    document.querySelector('#msgSucesso').textContent = "";
                }, 2500);
            } else document.querySelector('#msgSucesso').textContent = responseJSON.msgErro;
        })
        .catch(function(erro) {
            document.querySelector('#msgSucesso').textContent = erro;
        });
}

function cbSucessoBuscarGenero(responseJSON) {
    let genero = responseJSON.dados;
    document.querySelector('#id').value = genero.id;
    document.querySelector('#descricao').value = genero.descricao;
}
Footer