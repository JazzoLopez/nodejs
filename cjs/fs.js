// FileSystem
const fs = require("node:fs"); //* A PARTIR DE Node 16 SE RECOMIENDA USAR node:

const stat = fs.statSync("./cjs/text.txt");

console.log(
  stat.isFile(), //* Si es un archivo
  stat.isDirectory(), //* Si es un directorio
  stat.isSymbolicLink(), //* Si es un enlace simbólico
  stat.size //* Tamaño en MB
);
