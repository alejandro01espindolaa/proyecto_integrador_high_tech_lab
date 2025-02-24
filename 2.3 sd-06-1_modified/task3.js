// Type your code below this line!

const ps = require("prompt-sync");
const prompt = ps();

function Mail(subj, msg) {
    this.asunto = subj;
    this.mensaje = msg;

    this.printMail = function(){
      console.log(`<subj>: ${this.asunto}: <msg>: ${this.mensaje}`);
    };
  }
  
  const asunto = prompt("Ingrese el asunto del correo:");
  const mensaje = prompt("ingrese el mensaje del correo:");

  const newMail = new Mail(asunto, mensaje)
  
  // Type your code above this line!
  
  newMail.printMail();

