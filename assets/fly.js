const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 600
canvas.height = 400

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 2;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.fillRect(10, 10, 50, 50);
    handleObstacles();
    bird.update();
    bird.draw();
    handleParticles();
    requestAnimationFrame(animate);
    angle+=0.06;
    hue++;
    frame++;
}
animate();

window.addEventListener('keydown', function(e) {
    if (e.code === 'Space') spacePressed = true;
});
window.addEventListener('keyup', function(e) {
    if (e.code === 'Space') spacePressed = false;
});