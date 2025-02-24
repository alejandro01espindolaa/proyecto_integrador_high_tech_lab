import promptSync from "prompt-sync"; // Para poder usar prompt.
const prompt = promptSync(); 

export class player {
    constructor(name, level) {
      this.name = name; // Toma el nombre del jugador.
      this.level = level; // Toma el nivel del jugador.
    } 

    info() {
        console.log(`${this.name} ¡ha alcanzado el nivel ${this.level}!`);
    } // Mensaje a mostrar cuando se suba de nivel inicialmente.

    levelUp() {
        this.level += 1;
        console.log(`${this.name} ¡ha alcanzado el nivel ${this.level}!`);
    } // Metodo para subir mas niveles.
}

const players = []; // Array con mi lista de jugadores.
let join = true; // Booleano que usare para seguir agregando jugadores.

while (join) {
    let playerName = prompt("Ingresa tu nombre: "); // Solicita el nombre.
    let playerLevel = parseInt(prompt("Ingresa tu nivel: "), 10); // Solicita el nivel.
    if (playerName && !isNaN(playerLevel)) { // Revisa que el nombre y el nivel sean validos.
        const newPlayer = new player(playerName, playerLevel);
        players.push(newPlayer);
        newPlayer.info(); // Llamamos a info para que imprima el mensaje.
        
        let levelUpChoice = prompt("¿Subir de nivel? (s/n): ").toLowerCase(); // Pregunta si desea subir de nivel.
        if (levelUpChoice === "s") {
            newPlayer.levelUp();
        }
    }
    let add = prompt("¿Agregar más jugadores? (s/n): ").toLowerCase();
    join = add === "s"; // Continua o rompe el cilo para agregar jugadores.
}
console.log("Jugadores:", players); // Imprime la lista final.