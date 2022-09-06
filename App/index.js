// App in JS nde.js;

/* --------------------------------------------------------- */

const questions = [
    "Oque eu aprendi hoje?",
    "Você gostou do que aprendeu?",
    "Acha que isso vai te ajudar a aprdender mais?",
    "Oque você quer aprender mais?",
    "Boa aula, tomara que você alcance tudo oque quer aprender!"
];

const ask = (index = 0) => {
    process.stdout.write(questions[index] + "\n");
};

ask();

/* --------------------------------------------------------- */

process.stdin.on("data", data => {
    process.stdout.write(data.toString().trin() + "\n");
});