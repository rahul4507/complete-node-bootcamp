const fs = require("fs");

file = fs.readFileSync("./txt/input.txt", "utf8");

const textOut = `these ${file} \nCreated on ${Date.now()}`;

console.log(textOut);
fs.writeFileSync("./txt/output.txt", textOut);

console.log(fs.readFileSync("./txt/output.txt", "utf8"));
