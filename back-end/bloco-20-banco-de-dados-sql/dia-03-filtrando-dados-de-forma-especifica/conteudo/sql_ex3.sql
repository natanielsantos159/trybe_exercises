## O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição ( replacement_cost ), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film
USE sakila;
SELECT 
    title, description, release_year, replacement_cost
FROM
    film
WHERE
    rating = 'PG'
        AND replacement_cost >= '18'
	ORDER BY rental_rate DESC