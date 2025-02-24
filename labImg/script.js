// <script src="script.js"></script 1. El Javascript esta enlazado al HTML

document.getElementById('change').innerText = 'GoodBye'; // 2. El primer "Hola Mundo desde JS" se cambia a "GoodBye"

document.querySelector('h1').style.color = 'orange'; // 3. El color de la letra del h1 se cambia a naranja

const colors = document.createElement('h1'); // 4. Se ha añadido un encabezado en la que se puede hacer clic y cuyo color de fuente se ha cambiado a marrón con JS
colors.style.color = 'white';
colors.innerText = 'Change color';
colors.onclick = function() { // Funcion para poder seguir cambiando el color
    
    if (colors.style.color === 'white') { 
        colors.style.color = 'brown';
    } else {
        colors.style.color = 'white';
    }
};
document.body.appendChild(colors);