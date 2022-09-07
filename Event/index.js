const { inherits } = require("util");
const { EventEmiter } = require("events");

function Character(name){
    this.name = name;
}

inherits(Character, EventEmiter);

const ironMan = new Character("Iron man!");
ironMan.on("help", () => console.log(`Eu, o ${ironMan.name}!`));
console.log("Eu sou o homem de ferro!")

/*

const { EventEmiter } = require("events");

const ev = new EventEmiter();
console.log(ev);

ev.on("SaySomething", (message) => {
    console.log("Eu consigo te ouvir!", message);
});
ev.emit("SaySomething", "Message");

*/