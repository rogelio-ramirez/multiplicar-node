// Requires
const fs = require('fs'); // Require propio de Node
// const fs = require('express'); // Expansiones de Node
// const fs = require('./local.js'); // Archivos que nosotros creamos

let base = 2;
let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
}

let nombreArchivo = `tablas/table-${base}.txt`;
let existeArchivo = false;

fs.exists(nombreArchivo, existe => {
    if (existe === true) {
        console.log(`El archivo ${nombreArchivo} ya existe`);
    } else {
        console.log('Archivo inexistente');
    }
    existeArchivo = existe;
});
console.log(typeof existeArchivo);
if (!existeArchivo) {
    fs.writeFile(`tablas/table-${base}.txt`, data, (error) => {
        if (error) throw error;
    });
    console.log(`Se escribió archivo ${nombreArchivo}`);
} else {
    console.log(`No se escribió archivo ${nombreArchivo}`);
}