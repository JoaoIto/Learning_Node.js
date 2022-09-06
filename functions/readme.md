# Functions 🦾

Apresentaremos as funções principais do ambiente virtual do node, para a aplicação! Em si estas funções já tem sua própria tarefa já pré-definida, e assim fará com que conseguiremos criar eventos para a aplicação que quisermos...


## `setTimeout()` e `clearTimeout()`:

Essas funções disponibilizam um **intervalo de tempo para começar a excução de vez da função pré-definida.** E sua função contrária de *clear* seria basicamente limpar esse timeout de excução

## `setInterval()` e `clearInterval()`:

Sua diferença para as funções de timeout seria que basicamente funciona para um intervalo entre uma lista de repetição, entendendo que: será definido um **intervalo de tempo para cada vez de cada vez da execução da função.**

---
## Event

```jsx
const time = 3000;

const checkingMessage = () => console.log("checking message!");

let interval = setInterval(checking, time);
setTimeout(() => clearInterval(interval), 4000);
clearTimeout(() => setTimeout(interval), 5000);
```

1. **A função que construímos funciona de forma base, a que primeiramente colocamos uma variável de base de tempo, (que é definido em milisegundos). Logo depois assim, definimos uma função de *arrow function*, na qual imprimirá ``"checking"`` no console em lista de repetição infinita...**

2. **Logo depois, para que não entremos em repetição infinita e desgovernada no console, e assim geremos um erro de execução, criamos uma função de `setInterval()` para que assim, para cada mensagem do console, seja deferido um intervalo de 4 segundos!**

3. **Para definirmos uma outra função, também usamos a função de `setTimeout()` para que seja chamada em callback para a função de `clearInterval()` assim que passar 4 segundos de execução...**

4. **Além disso ainda colocamos que assim 5 segundos de execução, devemos liberar essa função de timeout, com uma função de `clearTimeout()`. E assim conseguimos criar um evento de timer, com 4 tipos de tempos diferentemente, atuando tanto em conjunto quanto separadamente.**
---