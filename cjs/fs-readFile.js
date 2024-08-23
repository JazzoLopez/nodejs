const fs = require("node:fs");

console.log("Leyendo el primer archivo...");

fs.readFile("./cjs/text.txt", "utf-8", (err, data) => {
  //* Asíncrono y uso de callback
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log("---> LOGICA MIENTRAS LEE EL ARCHIVO.. <---");

console.log("---> Leyendo el segundo archivo... <---");

fs.readFile("./cjs/text2.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
