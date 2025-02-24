function Mail(subj, msg) {
    this.asunto = subj
    this.mensaje = msg
  }
  
  // Type your code below this line!
  
  const newMail = new Mail("Hello", "World");
  
  // Type your code above this line!
  
  console.log(newMail.asunto + ": " + newMail.mensaje)