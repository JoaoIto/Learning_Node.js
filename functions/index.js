// Definição de variável de tempo padrão (em milisegundos);
const time = 3000;

const checkingMessage = () => console.log("checking message!");

let interval = setInterval(checking, time);
setTimeout(() => clearInterval(interval), 4000);
clearTimeout(() => setTimeout(interval), 5000);