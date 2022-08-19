# Module

**No Node.js, *módulos* são os blocos de código encapsulado que se comunicam com um aplicativo externo com base em sua funcionalidade relacionada. Os módulos podem ser um único arquivo ou uma coleção de vários arquivos / pastas.**

**Esses módulos podem ser carregados dentro do node, a partir da função de `require( )`;**

## O que faz a função `require( )`?

**A função require, é uma das principais dentro do ambiente do node, já que basicamente temos a principal forma de carregamento de páginas, ou em si, módulos… A função require retornará um tipo de JavaScript dependendo do que o módulo específico retorna.**

Quando você está em um ambiente de front-end de JS, usamos a própria linguagem chamando seus módulos padrão, como por exemplo o *document*. No node é a mesma coisa, e assim serve a função require!

### Exemplo: 
Este exemplo basicamente mostra que o programa de require, faz o carregamento de qualquer módulo e de qualquer tipo que seja somente em uma função, normalmente somente especificada seu tipo, depois sendo desenvolvida a partir de seu próprio argumento.
```jsx 
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Welcome to this page!');
  res.end();
}).listen(3000);
```
---