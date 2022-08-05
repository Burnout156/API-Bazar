Comandos para executar no Docker:

cat docker/mysql/scripts.sql | docker exec -i bazarapi_mysql_1  mysql -u root -h localhost -prootpwd //para criar o banco de dados e a tabela, caso não existam

docker run -d -v %cd%/docker/mysql/volume --rm --name composer-mysql mysql  //para criar o volume de restauração do container

docker exec -it bazarapi_mysql_1 mysql -u root -h localhost -prootpwd //para acessar o  servidor do banco de dados