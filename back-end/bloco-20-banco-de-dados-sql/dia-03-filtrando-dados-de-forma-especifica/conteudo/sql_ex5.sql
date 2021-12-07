## Mostre todos os detalhes dos clientes que não estão ativos na loja 1 . As informações podem ser encontradas na tabela customer
USE sakila;
SELECT 
    *
FROM
    customer
WHERE
    active IS FALSE AND store_id = 1;