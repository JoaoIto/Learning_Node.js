# BestMe App 🤓

*Construiremos um app que irá interajir com o usuário, com suas respostas, fazendo perguntas simples. E através dos argumentos do node, *`process` que faremos a lógica de interação do ambiente com o usuário das respostas!**


## Base 📂

Bascicamente, temos que seria uma interação através de perguntas e respostas.
As perguntas que serão feitas através de um array, integras com a lógica, tempo, e quantidade de execução em uma lista de repetição.

jsx
const ask = (index = 0) => {
    process.stdout.write(questions[index] + "\n");
};

ask();


Já as respostas integradas a partir de uma arrow function padrão de recebimento de dados 
jsx
stdin.on("data", data => {})


---