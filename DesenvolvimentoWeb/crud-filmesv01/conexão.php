<?php
$dsn = "mysql : host=localhost; dbname=cinedesweb";
$user = "root";
$pass = "";//Nas máquinas do wamp a senha costuma ser wamp
try{
    //Argumentos: data source name (driver, hosrt e base de dados), usuário e senha
    $conexao = new PDO($dsn, $user, $pass);
    //Coloca o PDO para trabalhar no modo de trtamento de exceções
    $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
    //Se não for possivel conectar, montar uma resposta para ser devolvida com JSON
    $resposta["erro"]=true;
    $resposta["msgErro"]="Erro ao conectar com o BD. ".$e->getMessage();
    //Transformando a matriz associativa num objeto JSON em foma de texto
    //e desenvolvendo para o cliente(javascript) 
    echo json_encode($resposta);
    exit();
}
?>