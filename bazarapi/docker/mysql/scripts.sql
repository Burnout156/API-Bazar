CREATE DATABASE IF NOT EXISTS bazardb; 
use bazardb;

CREATE TABLE IF NOT EXISTS produtos(
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR (150) NOT NULL,
                descricao VARCHAR (250) NOT NULL,
                preco DOUBLE NOT NULL,
                dataCriacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                ultimaAtualizacao DATETIME NULL DEFAULT CURRENT_TIMESTAMP
                );

INSERT INTO produtos VALUE(0, "NOME", "DESCRICAO", 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
