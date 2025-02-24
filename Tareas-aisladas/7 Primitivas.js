//* Declaracion variables
let nombre = "Mar"; //* Variable que puede cambiar
const edad = 25; //* Variable que no puede cambiar

//* Calculadora basica en JavaScript
//* Funcion que realiza la operacion seleccionada

function calcular (operacion,num1,num2) {
    switch (operacion){
        case 'sumar':
            return num1 + num2;
        case 'restar':
            return num1 - num2;
        case 'multiplicar':
            return num1 * num2;
        case 'dividir':
            //Evitamos division por cero
            return num2 !== 0 ? num2 / num1: "Error: No se puede dividir entre cero.";
        default:
            return "Operacion no valida"    
    }
}

//* Pedimos al usuario los numeros y la operacion
let operacion = prompt("Ingrese operacion (sumar, restar, multiplicar, dividir)").toLowerCase();
let num1 = parseFloat(prompt("Ingrese el primer numero: "));
let num2 = parseFloat(prompt("Ingrese el segundo numero:"));
//* Mostramos el resultado en la consola
console.log(`Resultado: ${calcular(operacion, num1, num2)}`);
/*
*Explicación del código con comentarios:

*Se define una función calcular que recibe la operación y los dos números.
*Se usa un switch para decidir qué operación realizar.
*Si la operación es división, se evita la división por cero con una validación.
*Se usa prompt() para solicitar datos al usuario y parseFloat() para convertirlos a números.
*Se muestra el resultado en la consola con console.log().
*/
/////////////////////////////////////////////////////////////
//* Alcance de variables y funciones con una biblioteca

function leerLibro(){
    console.log(libroGlobal); //puede usarse dentro de la funcion
}

leerLibro(); //Enciclopedia
console.log(libroGlobal);

function bibliotecaSecreta(){
    let libroSecreto = "Manoscrito Antiguo"; //Solo existe dentro de la funcion o de su sala
    console.log(libroSecreto)// Se puede usar dentro de la funcion o de la sala de libros antiguos
}
bibliotecaSecreta(); //Manoscrito Antiguo
console.log(libroSecreto); //Error: libroSecreto no esta definido fuera de la funcion
if(true){
    let darkHold = "Hechizos Malignos"; // solo existe en este bloque o en la dimension que crearon par ocultarlo
    console.log(darkHold);
}
console.log(darkHold); // libro no esta definido