<?php
    require_once ("../model/conexao.php");
    $generoPost = file_get_contents('php://input');
    $generoMatriz = json_decode($generoPost, true);
    $descricao = (isset($generoMatriz["descricao"]) && $generoMatriz["descricao"] != null) ? strtoupper($generoMatriz["descricao"]) : "";

    $response["erro"] = false;
    $response["dados"] = null;
    $response["msgErro"] = '';
    $response["msgSucesso"] = '';

    if($descricao != "") {
        try {
            $sql = "INSERT INTO generos(descricao) VALUES(?)";
            $stmt = $connection -> prepare($sql);
            $stmt -> bindParam(1, $descricao);
            $stmt -> execute();
            $response["msgSucesso"] = "{$stmt -> rowCount()} genero inserido com sucesso! O id inserido foi {$connection -> lastInsertId()}";
        } catch (PDOException $e) {
            $response["erro"] = true;
            $response["msgErro"] = "Erro: Não foi possível efetuar a inserção no BD".$e -> getMessage();
        } finally {
            echo json_encode($response);
        }
    }
