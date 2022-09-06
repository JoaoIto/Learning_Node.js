// App in node.js;

const questions = [
    "Opa, qual sue nome?",
    "Oque você aprendi hoje?",
    "Você gostou do que aprendeu?",
    "Acha que isso vai te ajudar a aprdender mais?",
    "Oque você quer aprender mais?",
];

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " \n > ");
};

ask();

/* --------------------------------------------------------- */

const answers = [];
process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if(answers.length < questions.length){
        ask(answers.length);
    }else{
        console.log(answers);
        process.exit();
    };
});

process.on("exit", () => {
    console.log(`
    Bacana, ${answers[0]}!

    Gostei que você aprendeu ${answers[1]}

    Agora só focar em ${answers[4]}!

    Boa aula, tomara que você alcance tudo oque quer aprender!
    `)
});