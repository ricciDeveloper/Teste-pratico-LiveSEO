## Organização do Backend
----------------------

Realizei toda a implementação no arquivo `server.js`, pois se trata de uma API simples, com apenas uma rota.

### Estrutura do arquivo

-   Inicialização do **Express**

-   Definição dos dados mockados

-   Criação da rota `GET /users`

-   Inicialização do servidor

Optei por utilizar um único arquivo para simplificar, já que é um projeto de pequeno porte.

Em um cenário real e escalável, organizaria em camadas como:

-   `routes`

-   `controllers`

-   `services`

Essa abordagem melhora a organização, manutenção e escalabilidade da aplicação