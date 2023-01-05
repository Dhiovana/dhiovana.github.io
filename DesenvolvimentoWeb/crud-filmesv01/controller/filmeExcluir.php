<?php
    require_once('../model/conexao.php');
    $filmeDelete = file_get_contents('php://input');
    $filmeMatriz = json_decode($filmeDelete, true);
    $id = (isset($filmeMatriz["id"]) && $filmeMatriz["id"] != null) ? $filmeMatriz["id"] : null;
    $response["erro"] = false;
    $response["dados"] = null;
    $response["msgErro"] = '';
    $response["msgSucesso"] = '';

    if($id != null) {
        try {
            $sql = "DELETE FROM filmes_assistidos WHERE id=?";
            $stmt = $connection -> prepare($sql);
            $stmt -> bindParam(1,$id);
            $stmt -> execute();
            $response["msgSucesso"] = "Filme de id $id excluído com sucesso";
        } catch (PDOException $e) {
            $response["erro"] = true;
            $response["msgErro"] = "Erro: ".$e -> getMessage();
        } finally {
            echo json_encode($response);
        }
    }