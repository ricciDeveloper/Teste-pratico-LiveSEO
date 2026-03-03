Uso de `interface`
------------------

Utilizei `interface` para:

-   Definir a estrutura dos objetos do array

-   Garantir tipagem forte

-   Melhorar a legibilidade e organização

-   Facilitar manutenções futuras

Isso garante que todo objeto do tipo `User` tenha **obrigatoriamente** `id`, `name` e `age`, com seus respectivos tipos (`number` e `string`).

* * * * *

Tipagem da função `getNamesOver23`
----------------------------------

Realizei a tipagem da função `getNamesOver23` da seguinte forma:

-   `users: User[]`\
    A função recebe um array do tipo `User`.

-   `: string[]`\
    A função retorna um array de `string` (apenas os nomes).