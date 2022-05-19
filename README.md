<h1 align="center">⛰️ Everest Challenge ⛰️</h1>

## Missão :beginner:	

Criar um sistema de cadastro de clientes, com a finalidade de por em prática os conhecimentos adquiridos em:
  - HTML;
  - CSS;
  - JavaScript;
  - requisições HTTP;
  - Vuejs (versão 2);

O sistema não fará uso de banco de dados real, e, para esse desafio, a aplicação conta com uma ferramenta (já configurada) chamada <a href="https://miragejs.com/docs/getting-started/introduction/">MirageJs</a> 
e ela quem será responsável por lidar com as requisições HTTP que serão implementadas.

Tendo isso em mente, o seu objetivo é:
  - desenvolver as telas da aplicação conforme o layout;
  - tornar a aplicação funcional;

## Requisitos do projeto 🛠

Para que o projeto base rode normalmente, certifique-se de ter:
  - acesso à internet;
  - o Node.js instalado em sua máquina, senão tiver, acesse esse <a href="https://nodejs.org/en/download/">link</a> e baixe a versão de acordo com seu sistema operacional;
  - o Git, para poder clonar esse repositório em sua máquina, se não tiver, clique <a href="https://nodejs.org/en/download/">aqui</a> e faça o download;

## Subindo o projeto :rocket:
  - antes dos próximos passos, você precisa dar um fork nesse repositório; caso ainda não saiba como realizar essa ação basta conferir essa documentação: https://docs.github.com/pt/get-started/quickstart/fork-a-repo;
  <br><br>PS: só avance para a próxima etapa após "forkar" esse repo;

  - em seu computador, abra um terminal dentro do seu workspace Warren, e clone o repositório que foi criado automaticamente quando você realizou o fork; ex:
    ```
      git clone https://github.com/seu-usuario-github/seu-repositorio.git
    ```
  - navegue até a pasta que foi criada (everest-challenge):
    ```
      cd everest-challenge
    ```
  - instale as dependências do sistema usando o gerenciador de pacotes do Node `npm` , com o comando:
    ```
      npm install
    ```
    ou, caso tenha instalado em sua máquina, com o comando:
    ```
      yarn
    ```
  - após a instalação das dependências do sistema, se não tiver ocorrido algum erro, é hora de subir o servidor da aplicação, atravé do comando:
    ```
      yarn serve
    ```
  - abra o seu navegador preferido e digite o seguinte endereço:
    ```
      http://localhost:8080/
    ```
  Pronto!! Se você chegou até aqui, é porque deu tudo certo! :raised_hands:	<br>
  Caso não tenha conseguido subir o projeto, ou se deu erro em alguma das etapas, me manda um 'opa!' lá no Slack que eu te ajudo :wink:
    
## Como fazer uma requisição ao backend

O projeto conta com uma API fake, que é "startada" juntamente com o frontend, após o comando `yarn serve`. Para auxiliar nas requisições, o projeto conta com o `axios` que é responsável por fazer as requisições e capturar tudo o que a contece durante esse processo (sucesso ou erro). A rota base do backend é: `/api/users`.

### Exemplos
  - `axios.post('/api/users', data)`: cria um novo registro de usuário no banco de dados da api;
  - `axios.get('/api/users')`: irá buscar por todos os usuários cadastrados no banco de dados da api;
  - `axios.get('/api/users/:id')`: busca por um único usuário no banco de dados da api; muito usado para ver detalhes de um usuário, por exemplo;

