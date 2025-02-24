// Refer to Task 3 in your Instructions to complete this task

for (let i = 1; i < 106; i++) { //* Bucle for de 106 para que se imprima 105 veces
  let esMultiplo = ""; //* Una variable que sera llamada y reutilizada cada que se cumpla una condicion
  
  if (i % 3 == 0) esMultiplo += "Fizz"; //* If que hace llamada a mi variable cada que un numero es multiplo de 3
  if (i % 5 == 0) esMultiplo += "Buzz"; //* "" Con multiplos de 5
  //? Con este metodo se imprimen ambas palabras si ambas condiciones se cumplen y van en cascada para que salgan en orden
  console.log(esMultiplo || i) //* Utilizo el operador OR para imprimir tanto mi variable como mi indice dependiendo si se cumple la condicion
}