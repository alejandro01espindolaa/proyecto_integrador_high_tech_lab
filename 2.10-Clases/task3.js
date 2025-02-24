import promptSync from "prompt-sync"; // Para poder usar prompt.
const prompt = promptSync(); 

export class player {
    constructor(name, level) {
      this.name = name; // Toma el nombre del jugador.
      this.level = level; // Toma el nivel del jugador.
    } 
    info() {
      console.log(`${this.name} ¡ha alcanzado el nivel ${this.level}!`);
    } // Mensaje a mostrar cuando se suba de nivel.
  }

  const players = []; // Array con mi lista de jugadores.
  let join = true; // Booleano que usare para seguir agregando jugadores.

  while (join) {
    let playerName = prompt("Ingresa tu nombre: "); // Solicita el nombre.
    let playerLevel = parseInt(prompt("Ingresa tu nivel: "), 10); // Solicita el nivel.
    if (playerName && !isNaN(playerLevel)) { // Revisa que el nombre y el nivel sean validos.
      const newPlayer = new player(playerName, playerLevel); // Pide los datos.
      players.push(newPlayer); // Almacena los datos.
      newPlayer.info(); // Llamamos a info para que imprima el mensaje.
    } else {
      console.log("Nombre o nivel invalidos"); // Error a mostrar.
    }
    let add = prompt("¿Agregar más jugadores? (s/n): ").toLowerCase();
    join = add === "s"; // Continua o rompe el cilo para agregar jugadores.
  }
  
  console.log("Jugadores:", players); // Imprime la lista final.