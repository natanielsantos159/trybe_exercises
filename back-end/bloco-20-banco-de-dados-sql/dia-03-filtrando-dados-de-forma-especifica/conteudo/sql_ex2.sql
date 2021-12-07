## Precisamos de um relatório dos nomes dos clientes, em ordem alfabética , que não estão mais ativos no nosso sistema e pertencem à loja com o id = 2 , e não inclua o cliente KENNETH no resultado. As informações podem ser encontradas na tabela customer
SELECT 
    *
FROM
    sakila.customer
WHERE
    active IS FALSE AND store_id = 2
        AND first_name <> 'KENNETH';