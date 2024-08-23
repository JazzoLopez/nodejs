const fs = require("node:fs/promises"); //* PERMITE EL USO DE PROMESAS

console.log("Leyendo el primer archivo...");

fs.readFile("./cjs/text.txt", "utf-8")
  .then((text) => {
    console.log(text);
  })
  .catch((err) => {
    console.error(err);
  });

console.log("---> LOGICA MIENTRAS LEE EL ARCHIVO.. <---");

console.log("---> Leyendo el segundo archivo... <---");

fs.readFile("./cjs/text2.txt", "utf-8")
  .then((text) => {
    console.log(text);
  })
  .catch((err) => {
    console.error(err);
  });
