//*comienzo con un for con un indice que comienza en 1 para evitar imprimir el #0 y termina en <51 para imprimir hasta el #50.

for (let i = 1; i < 51; i++){

    if (i % 3 == 0 && i % 5 == 0) { 
        console.log ("FizzBuzz");
           //? aqui indico que se deben cumplir dos condiciones, ser multiplo de 3 y de 5. Coloco esta linea primero para evitar que sea saltada si se cumple otra condicionante primero.

    } else if (i % 3 == 0) {
        console.log ("Fizz");
            //? Si no se ejecuta la condicion anterior, saltamos a esta, "ser multiplo de 3".

    } else if (i % 5 == 0){
        console.log ("Buzz");
            //? Lo mismo que la anterior pero con multiplos de 5.

    } else {
        console.log (i);
            //? Si ninguna condicion se cumple entonces se imprime el indice y se vuelve a comenzar hasta que termine la iteracion.
    }
}
