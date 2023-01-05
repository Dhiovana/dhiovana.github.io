<?php
    require_once ('../model/conexao.php');
    $generoDelete = file_get_contents('php://input');
    $generoMatriz = json_decode($generoDelete, true);
    $id = (isset($generoMatriz["id"]) && $generoMatriz["id"] != null) ? $generoMatriz["id"] : null;

    $response["erro"] = false;
    $response["dados"] = null;
    $response["msgErro"] = '';
    $response["msgSucesso"] = '';

    if($id != null) {
        try {
            $sql = "DELETE FROM generos WHERE id=?";
            $stmt = $connection -> prepare($sql);
            $stmt -> bindParam(1, $id);

            $stmt -> execute();
            $response["msgSucesso"] = "Genero de id $id excluído com sucesso!";
        } catch (PDOException $e) {
            $response["erro"] = true;
            $response["msgErro"] = "Erro ao excluir um gênero. ".$e -> getMessage();
        } finally {
            echo json_encode($response);
            exit();
        }
    }