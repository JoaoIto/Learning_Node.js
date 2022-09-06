# Módulo 2️⃣

**O módulo 2 de aprendizagem, começa o momento de entendermos como funciona o *Node Package Manager* ou [NPM](https://www.bing.com/ck/a?!&&p=eab50de2eafe6cb4JmltdHM9MTY2MTk0OTYxMyZpZ3VpZD1mMzUwMmFhYy04Njk3LTRiMTAtYThlNS1lMWE2NTc0Y2M4OTYmaW5zaWQ9NTQyNg&ptn=3&hsh=3&fclid=0e9bba57-292a-11ed-aa3e-4ccf7b2ff38e&u=a1aHR0cHM6Ly9kb2NzLm5wbWpzLmNvbS8&ntb=1), um pacote base do node!**

**Esses pacotes instalados são armazenados dentro da pasta requerente, chamada de *node_modules*, e assim guiados pelo arquivo de `package-lock.json`.**

Estes servem para indicar módulos padrões do próprio node, que será importados para o seu pacote de projeto atual, e assim ficam guardados prontos para serem usados, e assim sendo importados.

Podemos entender que o pacote de `package-lock.json` guarda todas as informações base de configurações de projetos que precisamos, como: nome do autor, versão de módulo, endereço de import, suas dependências, etc...

**Este arquivo é de extrema importância, e nunca deve ser mexido ou mudado, e assim **

---

## Como baixar pacotes?

**No *node_modules* baixamos através do comando de:**
```jsx
npm install "nome da dependência" "-comando de resposta"
```

---

## Como desinstalar pacotes?

**Comando:**

```jsx
npm uninstall "nome da dependência" "-comando de resposta"
```

---