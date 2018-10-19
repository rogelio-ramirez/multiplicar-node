const fs = require('fs');

// Igualmente funcionaría creándola como parte del module.exports
// module.exports.crearArchivo = (base) => {...};
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/table-${base}-al-${limite}.txt`, data, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve(`table-${base}-al-${limite}.txt`);
            }
        });
    });
};

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
};

module.exports = {
    crearArchivo,
    listarTabla
};