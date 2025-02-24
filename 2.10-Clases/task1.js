import promptSync from "prompt-sync"; // Para poder usar prompt.
const prompt = promptSync(); 

export class Player {
    constructor(name) {
        this.name = name; // Toma el nombre del jugador.
    }
}

const players = []; // Array con mi lista de jugadores.
let join = true; // Booleano que usare para seguir agregando jugadores.

while (join) {
    let playerName = prompt("Ingresa tu nombre: "); // Solicita el nombre.
    if (playerName) {
        players.push(new Player(playerName)); // Almacena el nombre.
    }

    let add = prompt("¿Agregar más jugadores? (s/n): ").toLowerCase();
    join = add === "s"; // Continua o rompe el cilo para agregar jugadores.
}

console.log("Jugadores:", players); // Imprime la lista final.