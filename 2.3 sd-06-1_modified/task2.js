function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  
  const ps = require("prompt-sync");
  const prompt = ps();
  
  const subject = prompt("Ingrese el asunto del correo:");
  const message = prompt("Ingrese el mensaje del correo:");
  const newMail = new Mail(subject, message)
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)