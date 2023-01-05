<?php
require_once ('../model/conexao.php');
$generoPut = file_get_contents('php://input');
$generoMatriz = json_decode($generoPut, true);

$id = (isset($generoMatriz["id"]) && $generoMatriz["id"] > 0) ? $generoMatriz["id"] : "";
$descricao = (isset($generoMatriz["descricao"]) && $generoMatriz["descricao"] != null) ? strtoupper($generoMatriz["descricao"]) : "";

$response["erro"] = false;
$response["dados"] = null;
$response["msgErro"] = '';
$response["msgSucesso"] = '';

if($descricao != '' && $id != '') {
    try {
        $sql = "UPDATE generos SET descricao=? WHERE id=?";
        $stmt = $connection -> prepare($sql);
        $stmt -> bindParam(1, $descricao);
        $stmt -> bindParam(2, $id);
        $stmt -> execute();
        $response["msgSucesso"] = "{$stmt -> rowCount()} genero alterado com sucesso! O id do genero alterado foi {$id}";
    } catch (PDOException $e) {
        $response["erro"] = true;
        $response["msgErro"] = "Erro: Não foi possível efetuar a alteração no BD".$e -> getMessage();
    } finally {
        echo json_encode($response);
    }
}