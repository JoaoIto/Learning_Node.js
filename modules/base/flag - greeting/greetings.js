const getFlags = require("./flags");
console.log(`Olá, ${getFlags("--name")}! ${getFlags("--greeting")}`);