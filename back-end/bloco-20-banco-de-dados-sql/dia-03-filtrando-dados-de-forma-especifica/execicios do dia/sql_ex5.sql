## Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.
USE PecasFornecedores;
SELECT 
    COUNT(code)
FROM
    Fornecedores
WHERE
    code LIKE '%F%';