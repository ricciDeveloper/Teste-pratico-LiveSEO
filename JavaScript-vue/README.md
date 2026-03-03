Componentes criados
-------------------

### 1 - App (Componente raiz)

-   Mantém o estado global das *tasks*

-   Implementa as funções:

    -   `addTask`

    -   `toggleTask`

    -   `removeTask`

-   Calcula as tarefas pendentes e concluídas via `computed`

-   Distribui os dados e eventos para os componentes filhos

### 2 - TaskInput

-   Captura a nova *task*

-   Emite o evento `add-task`

### 3 - TaskList

-   Recebe a lista de tarefas via `props`

-   Renderiza os itens com `v-for`

-   Repassa os eventos para o componente pai (`App`)

### 4 - TaskItem

-   Exibe cada *task* individualmente

-   Permite marcar como concluída

-   Permite remover as *tasks*

-   Emite os eventos `toggle-task` e `remove-task` para o componente pai

* * * * *

Organização do meu código
-------------------------

Utilizei o **Vue 3 via CDN** para a construção do projeto, separando as responsabilidades em componentes distintos para manter o código organizado e escalável.

O estado de todas as *tasks* foi centralizado no componente raiz (`App`), evitando inconsistências e facilitando a manutenção futura.

### Recursos utilizados:

-   `ref()` → para estado reativo

-   `computed()` → para cálculos derivados (tasks pendentes e concluídas)

-   `props` → para passagem de dados entre componentes

-   `emit` → para comunicação entre componentes