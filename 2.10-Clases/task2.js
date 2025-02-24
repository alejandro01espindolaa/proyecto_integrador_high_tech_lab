import promptSync from "prompt-sync"; // Para poder usar prompt.
const prompt = promptSync(); 

export class player {
    constructor(name, level) {
      this.name = name; // Toma el nombre del jugador.
      this.level = level; // Toma el nivel del jugador.
    } 
  }

  const players = [];  // Array con mi lista de jugadores.
  let join = true; // Booleano que usare para seguir agregando jugadores.

  while (join) {
    let playerName = prompt("Ingresa tu nombre: "); // Solicita el nombre.
    let playerLevel = parseInt(prompt("Ingresa tu nivel: "), 10); // Solicita el nivel.
    if (playerName && !isNaN(playerLevel)) { // Revisa que el nombre y el nivel sean validos.
      players.push(new player(playerName, playerLevel)); // Almacena la informacion.
    } else {
      console.log("Nombre o nivel invalidos"); // Error a mostrar.
    }
    let add = prompt("¿Agregar más jugadores? (s/n): ").toLowerCase();
    join = add === "s"; // Continua o rompe el cilo para agregar jugadores.
  }
  
  console.log("Jugadores:", players); // Imprime la lista final.