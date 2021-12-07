## Quantos clientes estão ativos e na loja 1 ? As informações podem ser encontradas na tabela customer
USE sakila;
SELECT 
    COUNT(customer_id)
FROM
    customer
WHERE
    active = 1 AND store_id = 1;