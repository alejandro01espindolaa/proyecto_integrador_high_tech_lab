/*
*Bucle For
Ideal para recorrer listas, arreglos o rangos predefinidos*/

for (let i = 0; i< 11; i++){ // se inicia let en 0, se indica que debe ser menor a 11 y se va sumando de 1 en 1
    console.log(i);
}
/*
*Bucle while 
Se ejecuta mientras una condicion sea verdadera
*/
let contador = 0;
while (contador < 10) {
    console.log(`Contador:${contador} `);
    contador++;
}
/* 
*Diferencia clave entre for y while
?for se usa cuando sabes cuantas iteraciones quieres hacer y while cuando no estas seguro del numero de repeticiones
*/
/*
*  Sentencias if
La sentencia if ejecuta un bloque de código si se cumple una condición.
*Comparaciones comunes:
?Igualdad (===), diferente (!==), mayor que (>), menor que (<), etc.
*/
if (condicion) {
    // código a ejecutar si la condición es verdadera
} else {
    // código a ejecutar si la condición es falsa
}

// Verificaremos si un número es positivo, negativo o cero
let numero = 10; // Cambia este valor para probar diferentes casos

if (numero > 2) {
    // Si el número es mayor que 2
    console.log("El número es mayor que 2");
} else if (numero < 0) {
    // Si el número es menor que 0
    console.log("El número es negativo");
} else {
    // Si no es mayor que 2 ni menor que 0
    console.log("El número es cero o no es mayor que 2");
}

/*
 * FIZZ BUZZ
 */

// Bucle del 1 al 100
for (let i = 1; i <= 100; i++) {
    // Condición para FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    // Condición para Fizz
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // Condición para Buzz
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // Si no cumple ninguna condición
    else {
        console.log(i);
    }
}

// Fin del bucle for

//* = : Asignación. Se utiliza para asignar un valor a una variable.
// Ejemplo: let x = 5; (Asigna 5 a la variable x)

//* == : Comparación de valores. Compara dos valores, pero NO verifica el tipo de dato.
// Ejemplo: "5" == 5 // true (porque ambos tienen el mismo valor, aunque son de distinto tipo)

//* === : Comparación estricta. Compara dos valores Y sus tipos de datos.
// Ejemplo: "5" === 5 // false (porque el valor es igual, pero los tipos son diferentes)

/*
*INDICACIONES
*1. Realizar quiz
*2.Poner palimita al terminar
*3.Descanso de 3:15 a 3:30pm
*/