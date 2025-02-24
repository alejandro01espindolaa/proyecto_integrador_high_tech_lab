import promptSync from "prompt-sync"; 

const prompt = promptSync(); 

class Player {
    constructor(name) {
        this.name = name; 
    }
}

const players = [];

let join = true;

while (join) {
    let playerName = prompt("Ingresa tu nombre: ");
    if (playerName) {
        players.push(new Player(playerName)); // ✅ Usa la clase correctamente
    }

    let respuesta = prompt("¿Agregar más jugadores? (s/n): ").toLowerCase();
    join = respuesta === "s"; 
}

console.log("Jugadores:", players);