const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let position = 0

function handleKeyPress(event) {
    if (event.code === 'ArrowLeft') {
        position = position - 10;
    }
    if (event.code === 'ArrowRight') {
        position = position + 10;
    }
    if (position < 0) {
        position = 0;
    }   
    refresh();
}   

function refresh() {    
    ball.style.left = position + 'px';
}   