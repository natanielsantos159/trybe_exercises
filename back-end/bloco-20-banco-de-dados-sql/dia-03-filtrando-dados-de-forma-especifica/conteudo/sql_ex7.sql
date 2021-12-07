## Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176 , ordenados em ordem alfabética.
USE sakila;
SELECT 
    email
FROM
    customer
WHERE
    address_id IN (172 , 173, 174, 175, 176)
ORDER BY email ASC;