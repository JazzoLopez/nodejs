const os = require("node:os");

console.log("Nombre del host", os.hostname());
console.log("Información del S.O", os.platform());
console.log("Versión del S.O", os.release());
console.log("Arquitectura del S.O", os.arch());
console.log("CPUs", os.cpus()); //* <-- Escalar procesos en Node
console.log("Memoria libre", os.freemem() / 1024 / 1024);
console.log("Memoria total", os.totalmem() / 1024 / 1024);
console.log("uptime, tiempo del computador encendido ", os.uptime() / 60 / 60); // Horas
