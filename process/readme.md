# Objeto de *process*

**Dentro do ambiente de node, geralmente trabalhamos com objetos, ou seja, quando precisamos carregar algo, mesmo que seja de um valor de uma simples string, ela será carregada dentro do ambiente node como um objeto, com vários valores (id, boolean, true, etc). Este objeto *process* é como qualquer outro, que carrega vários valores e parâmetros, e estudaremos cada um deles!**

## `Argv`

*`**Agrv`* é um parâmetro do objeto de process, que atua basicamente como um array, dando uma posição para cada parâmetro, basicamente o separando dependendo de seu tamanho…**

### Exemplo:

```jsx
// Definindo variáveis para o objeto de process...
const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Seu nome é: ${firstName} ${lastName}`);
/* O resultado é dado quando cada parâmetro é recebido separadamente pelo objeto, e assim separado dentro de um array como parãmetro, 2 e 3...*/ 
```

```jsx
/* Resultado: */

Seu nome é: Joao ito
```

---

### Flags:

**Ainda sim, conseguimos definir um parâmetro a essa argumento do process, como se fosse uma pequena “flag”, uma indicação… Basicamente para dizer qual o tipo de valor que o valor de cada argumento desse parâmetro deve receber. Isso é definido diretamente pelo console.**

```jsx
/* Código: */
/* Deve ser usado de forma padrão de exibição do console para que consigamos 
mostrar todos os ID's do objeto de process.argv, e assim suas flags... */
console.log(process.argv);
```

```jsx

/* Como definir no console:*/

node process --name "JoaoIto" --greeting "How are you"

/* Resultado: */
'C:\\Users\\muril\\Documents\\GitHub\\JavaScript\\Node\\Projeto 1\\process\\process',
  '--greeting',
  'how are you',
  '--name',
  'JoaoIto'
```

---
