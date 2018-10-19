// Uso normal
//const multiplicar = require('./multiplicar/multiplicar');

// Uso con destructuración
const { crearArchivo } = require('./multiplicar/multiplicar');

let baseF = '7b';

// console.log(multiplicar);

//Uso Normal
//multiplicar.crearArchivo(base)
// Uso con destructuración

// Con process.argv podemos ver los argumentos pasados desde terminal
// console.log(process.argv);

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(error => {
        console.log(`Error: ${error}`);
    });