SELECT id, name, email, created_at\
FROM users\
ORDER BY created_at DESC;

Explicação da consulta utilizada no teste
-----------------------------------------

-   **SELECT**\
    Realiza a busca das colunas `id`, `name`, `email` e `created_at`.\
    Evitei o uso de `SELECT *` por boas práticas, trazendo apenas os campos necessários.

-   **FROM users**\
    Indica que os dados serão buscados na tabela `users`.

-   **ORDER BY created_at DESC**\
    Faz a ordenação dos registros pela coluna `created_at`.

    -   `ORDER BY` → define o critério de ordenação

    -   `created_at` → coluna utilizada na ordenação

    -   `DESC` → ordem decrescente (do mais recente para o mais antigo)