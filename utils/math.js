const pi = 3.141593;


const sum = (x, y) => {
    try {
        return x + y;
    } catch (err) {
        console.log(err);
    }
};

const substraction = (x, y) => {
    try {
        return x - y;
    } catch (err) {
        console.log(err);
    }
};

const circleArea = (r) => {
    try {
        return pi * Math.pow(r, 2);
    } catch (err) {
        console.log(err);
    }
};


// module.exports permite “publicar” esa función para que pueda ser utilizada fuera del módulo.
module.exports = {
    suma: sum, // exportan funciones 
    sub: substraction,
    pi: pi // Exportamos variable
};