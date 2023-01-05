<?php
    require_once('../model/conexao.php');
    $response["erro"] = false;
    $response["dados"] = null;
    $response["msgErro"] = '';
    $response["msgSucesso"] = '';

try {
    $sql = 'SELECT * FROM generos ORDER BY descricao';
    $stmt = $connection -> prepare($sql);
    $stmt -> execute();

    $response["dados"] = $stmt -> fetchAll(PDO::FETCH_ASSOC);
    $response["msgSucesso"] = 'Generos listado com sucesso!';
} catch (PDOException $e) {
    $response["erro"] = true;
    $response["msgErro"] = 'Erro ao listar generos. '.$e -> getMessage();
} finally {
    echo json_encode($response);
}