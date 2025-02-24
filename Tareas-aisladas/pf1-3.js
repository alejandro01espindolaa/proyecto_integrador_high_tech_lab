/*
*Este es un comentario multilinea
!Atajos de teclado
*CTRL + S = Guardar cambios : para Windows 
*Para Mac Command + S = Guardar
*ALT + Z = Visualizar las lineas muy largas del documento en 1 o mas lineas =  acomoda el texto
*ALT + SHIFT +F = Formatear todo el documento
*Ctrl + Alt + f sirve para dar formato
?Extension =  Better Comments
*/
//*Comentario de una sola linea
/*
*Numero
*Almacena números enteros y decimales.
*Uso: Es el único tipo de dato para números en JavaScript.
 */
let edad = 30; // Entero
let temperatura = 36.5; // Decimal

/*
*String
*Almacena texto o cadenas de caracteres.
*Uso: Para representar datos textuales.
*/
let nombre = "Mar";// Todas las instrucciones cierran con ;

/*
*Boolean
*Almacena valores lógicos: true o false.
*Uso: Para lógica y condiciones.
*/
let esActivo = false;

/*
* Undefined
*Representa una variable que ha sido declarada pero no tiene un valor asignado.
*Uso: Indica ausencia de inicialización.
*/
let valor;
console.log(valor); // undefined

/*
*Null
*Representa intencionalmente la ausencia de valor o un valor vacío.
*Uso: Para señalar que algo no tiene valor.
*/
let vacio = null;

/*
*Arrays (Arreglos)
Descripción: Un array es una colección ordenada de elementos que pueden ser de cualquier tipo (números, cadenas, objetos, etc.).
Características:
*Los elementos están indexados numéricamente, comenzando en 0.
*Puede contener datos mixtos en el mismo array.
*Métodos útiles como .push(), .pop(), .slice(), .map(), etc.
Uso común: Almacenar listas de datos como elementos de una tabla o respuestas de usuarios.
*/
let numeros = [1, 2, 3, 4];
let mezcla = ["texto", 42, true];

console.log(numeros[0]); // 1 index
numeros.push(5); // Agrega 5 al final
console.log(numeros); // [1, 2, 3, 4,
console.log(mezcla); // ["texto", 42, true]

/*
*Objects (Objetos)
Descripción: Un objeto es una colección de pares clave-valor, donde cada clave es única y apunta a un valor.
Características:
*Las claves pueden ser cadenas o símbolos.
*Los valores pueden ser de cualquier tipo, incluidos arrays y otros objetos.
*Muy útil para representar entidades o estructuras complejas.
Uso común: Representar datos estructurados como un usuario, producto o configuración.
*/
let persona = {
    nombre: "Ana",
    edad: 30,
    esEstudiante: true
};

console.log(persona.nombre); // "Ana"
persona.edad = 31; // Actualiza el valor de la clave "edad"
console.log(persona); // { "nombre": "Ana", "edad": 31 }

/*
*Diferencia clave con la analogía:
?Un array es como una estantería: todo está ordenado por posición, y para encontrar algo, necesitas saber dónde está (índice).
?Un objeto es como un catálogo: no importa el orden, porque puedes buscar directamente por el nombre de la categoría (clave).
*/