<?php
    require_once ('../model/conexao.php');
    $response["erro"] = false;
    $response["dados"] = null;
    $response["msgErro"] = '';
    $response["msgSucesso"] = '';

try {
    $sql = "SELECT f.*, g.descricao as genero_descricao FROM filmes_assistidos f JOIN generos g ON(f.genero_id = g.id) ORDER BY titulo";
    $stmt = $connection -> prepare($sql);
    $stmt -> execute();
    $response["dados"] = $stmt -> fetchAll(PDO::FETCH_ASSOC);
    $response["msgSucesso"] = "Filmes listados com sucesso!";
} catch (PDOException $e) {
    $response["erro"] = true;
    $response["msgErro"] = "Erro ao listar filmes. ".$e -> getMessage();
} finally {
    echo json_encode($response);
}