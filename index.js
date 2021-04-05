/**
 * 1. Incluimos las siguientes librerias de Node.js:
•    La librería core path nos ayudará a resolver todas las rutas del sistema y establecer una ruta
     para el archivo donde vamos a guardar la información */

const path = require('path');
const inquirer = require("inquirer");


// 1: Importamos la librería command-line-args para leer datos de consola.
// const commandLineArgs = require("command-line-args");

const datastore = require('./datastore');
const utils = require('./utils');

/**
 * 2. Creamos las siguientes variables:
•    filename: Que contiene el nombre del archivo.
•    filepath: Contiene la ruta ABSOLUTA donde se guardará el archivo, la función path.resolve
     recibe como argumento el directorio de la ruta que desea resolver, en este caso, es . que significa
     el directorio actual del proyecto. */

const filename = "data.json";
const filepath = `${path.resolve(".")}/${filename}`;

/**
 *   1:   Leemos el contenido del archivo y lo almacenamos en la variable content.
     2:   Utilizamos la función JSON.parse para convertir ese contenido del archivo en un objeto literal
          de JavaScript y almacenarlo en la variable items.
     3:   Si la operación readFileSync falla, ya que el archivo no existe, 
          la aplicación entra en el bloque de catch, por lo cual procedemos a asignarle a la variable content un Array vacio. */

/**
 * 2. Creamos las siguientes variables:
     • items: Para guardar cada uno de los items agregados.
     • params: Donde se declaran los datos que se recibirán por línea de comandos.
     • options: Queda almacenado el objeto ya estructurado con todas los parámetros.
 */

// Para guardar cada uno de los items agregados
const items = datastore.load(filepath);

// Donde se declaran los datos que se recibirán por línea de comandos
const options = [{
        type: "input",
        name: "item",
        message: "What do you want to add?"
    },
    {
        type: "confirm",
        name: "completed",
        message: "Is completed?"
    },
    {
        type: "input",
        name: "date",
        message: "Due Date MM/DD/YYYY"
    }
];

// Queda almacenado el objeto ya estructurado con todas los parámetros.
// const options = commandLineArgs(params);

inquirer.prompt(options).then(answers => {
    // // This code will be executed just after the user answer all questions
    const { item = "", completed = false, date = "" } = answers;

    if (item) {
        items.push({
            item,
            completed,
            date
        });

        datastore.save(filepath, items);
    }

    utils.printList(items);
});

// 3: Creamos las variables item, completed y date 
// con sus respectivos valores por defecto a partir del objeto options.
// const { item = "", completed = false, date = new Date() } = options;

// if (item) {
// Agregamos el nuevo elemento leido por la consola:
// items.push({ item, completed, date });

/**
 * 3. Guardamos los cambios en el archivo:
      Para guardar el nuevo contenido en el archivo, utilizamos la función writeFileSync que toma como
      primer argumento la ruta y nombre del archivo, y, segundo, el contenido que se va a escribir.
      Nótense lo siguiente: ¿Por qué la función termina en Sync? ¿Qué significa esto? Esta versión de la
      función es sincrónica; es decir, que la aplicación no continua hasta que no termine la operación.
      También existe la versión asincrónica, la cual veremos con más detalle en un capítulo más adelante,
      pero esto no quiere decir que sea buena o mala, solo que es sincrónica.
      Utilizamos la función JSON.stringify para hacer el proceso inverso, esta vez convertir el contenido
      de la variable items en una cadena, el segundo argumento es una función para transformar el JSON
      si lo necesitamos; como esta no es la ocasión, le pasamos null a la función y el tercer argumento es
      la cantidad de espacios para la identificación del archivo JSON en este caso el número 2.
 */
// datastore.save(filepath, items);
// }

/**
     * Imprimir contenido de archivos JSON
     Para terminar la aplicación sería interesante imprimir todo el listado de contenido del archivo con
     formato, para lo cual añadimos el siguiente código al final de nuestro archivo index.js: */

/**
Ahora, en vez de escribir solamente el contenido de la variable items en la consola, recorremos el
Array y, por cada elemento creamos las variables correspondiente y lo imprimimos en la consola,
pero esta vez podemos elegir cómo imprimirlo, ya que en cada iteración del ciclo tenemos disponible
la variable el que contiene los datos de ese elemento (items[index]). */

// utils.printList(items);

/**
 *   Ya que la variable items es un Array, podemos utilizar la función push para añadir un objeto literal
     a final de este, que obtuvimos de los parámetros enviados por línea de comandos en la ejecución
     de nuestra aplicación. Se indican los pares de llave y valor para cada uno de los campos capturados
     desde la línea de comandos en la variable options. */

// 5. Imprimimos por consola el contenido de la variable items.
console.log(items);