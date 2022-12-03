// import file style
import 'assets/style/style.css';

const CANVAS_WIDTH = 512;
const CANVAS_HEIGHT = 512;

const canvas = document.querySelector('#canvas');

canvas.width = CANVAS_WIDTH * devicePixelRatio;
canvas.height = CANVAS_HEIGHT * devicePixelRatio;
canvas.setAttribute('style', `width:${CANVAS_WIDTH}px; height:${CANVAS_HEIGHT}px`);

const ctx = canvas.getContext('2d');
const mouse = {
    x: 0,
    y: 0
};
canvas.addEventListener('mousemove', (e) => {

    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    mouse.x = mouseX;
    mouse.y = mouseY;
    console.log(mouse);
});

let arrowX = canvas.width / 2;
let arrowY = canvas.width / 2;

/*
// line
ctx.moveTo(100, 100);
ctx.lineTo(200, 200);
ctx.stroke();
ctx.closePath();

// rect
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.rect(100, 100, 50, 50);

const gradient = ctx.createLinearGradient(100, 100, 150, 150);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'blue');

ctx.strokeStyle = "red";
ctx.fillStyle = gradient;
ctx.lineWidth = 10;

ctx.fill();
ctx.stroke();

// circle

const circleX = 100;
const circleY = 200;
const radius = 50;
const startAngle = 0;
const endAngle = Math.PI * 2;
ctx.fillStyle = "orange";

ctx.beginPath();
ctx.arc(circleX, circleY, radius, startAngle, endAngle, true);
ctx.fill();
ctx.closePath();
*/

const draw = (ts) => {
    ts /= 1000;

    /** Circle around circle
     const centerX = canvas.width / 2;
     const centerY = canvas.height / 2;
     const radius = 80 + Math.cos(ts) * 80;

     const moveX = centerX + Math.cos(ts) * radius;
     const moveY = centerY + Math.sin(ts) * radius;

     // stroke circle
     ctx.beginPath();
     ctx.fillStyle = "red";
     ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
     ctx.stroke();
     ctx.closePath();

     // first ball
     ctx.beginPath();
     ctx.arc(moveX, moveY, 20 + Math.cos(ts) * 15, 0, Math.PI * 2, true);
     ctx.fill();

     // second ball
     ctx.fillStyle = 'blue';
     ctx.beginPath();
     ctx.arc(centerX + Math.cos(ts + Math.PI) * radius, centerY + Math.sin(ts + Math.PI) * radius, 20 + Math.cos(ts) * 15, 0, Math.PI * 2, true);
     ctx.fill();
     */
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const arrowWidth = 100;
    const dx = mouse.x - centerX;
    const dy = mouse.y - centerY;
    const angle = Math.atan2(dy, dx);
    const vX = Math.cos(angle) * 2;
    const vY = Math.sin(angle) * 2;
    arrowX += vX;
    arrowY += vY;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(arrowX, arrowY);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -10);
    ctx.lineTo(arrowWidth / 2, -10);
    ctx.lineTo(arrowWidth / 2, -20);
    ctx.lineTo(arrowWidth, 0);
    ctx.lineTo(arrowWidth / 2, 20);
    ctx.lineTo(arrowWidth / 2, 10);
    ctx.lineTo(0, 10);
    ctx.closePath();
    ctx.fill();

    ctx.stroke();

    ctx.restore();

    requestAnimationFrame(draw);
};
requestAnimationFrame(draw);