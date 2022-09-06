# BestMe App 🤓

*Construiremos um app que irá interajir com o usuário, com suas respostas, fazendo perguntas simples. E através dos argumentos do node, *`process` que faremos a lógica de interação do ambiente com o usuário das respostas!**


## Base 📂

Bascicamente, temos que seria uma interação através de perguntas e respostas.
As perguntas que serão feitas através de um array, integras com a lógica, tempo, e quantidade de execução em uma lista de repetição e assim continua a rodar a lógica até que seja chamada o fim do process.exit().

```jsx
const ask = (index = 0) => {
    process.stdout.write(questions[index] + "\n");
};

ask();
```

Já as respostas integradas a partir de uma arrow function padrão de recebimento de dados 

```jsx
stdin.on("data", data => {})
```

---

## Lógica⚙️
**A lógica da nossa aplicação, se baseia em dois *arrays* trabalhando entre si para que consiga carregar as repostas e perguntas em tempo real,  e ainda depois conseguir a interação de carregar todas essas respostas as devidas perguntas em um objeto de *template string*.**

- **`process.stdout()`**: Saída de dados do projeto, na qual usamos na aplicação para carregar na tela do terminal o que temos de perguntas ao usuário. Ainda sim foi usada uma lista de repetição básica para se carregar um por vez, porém a todo o tamanho do array de perguntas.

- **`process.stdin()`**:  Entrada de dados, usada na versão on() para que sejam carregadas em uma função loop, que além de carregar ao tempo de respostas das perguntas, ele carregará toda a função de recebimento de dados, para receber do array, e carregar nele novamente quando recebidos as respostas, para isso usamos a função de *data* em uma lista condicional de recebimento, para cada vez que a lista de respostas for menor que a lista de perguntas, ser carregada novamente a função... E assim que terminar, se jogar o `exit()` para fim do processo!

---