function getRandomColor() {
    const colors = ['green', 'blue', 'red'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function changeColorsOnClick() {
    const h5Elements = document.querySelectorAll('h5');

    h5Elements.forEach(function(h5) {
        h5.addEventListener('click', function() {
            h5.style.color = getRandomColor();
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    changeColorsOnClick();
});