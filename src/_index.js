// import file style
import 'assets/style/style.css';

const CANVAS_WIDTH = 512;
const CANVAS_HEIGHT = 512;

const canvas = document.querySelector('#canvas');

canvas.width = CANVAS_WIDTH * devicePixelRatio;
canvas.height = CANVAS_HEIGHT * devicePixelRatio;
canvas.setAttribute('style', `width:${CANVAS_WIDTH}px; height:${CANVAS_HEIGHT}px`);

const ctx = canvas.getContext('2d');

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