// import file style
import 'assets/style/style.css';

const CANVAS_WIDTH = 512;
const CANVAS_HEIGHT = 512;

const canvas = document.querySelector('#canvas');

canvas.width = CANVAS_WIDTH * devicePixelRatio;
canvas.height = CANVAS_HEIGHT * devicePixelRatio;
canvas.setAttribute('style', `width:${CANVAS_WIDTH}px; height:${CANVAS_HEIGHT}px`);

const ctx = canvas.getContext('2d');

ctx.moveTo(100, 100);
ctx.lineTo(200, 200);
ctx.stroke();

console.log(devicePixelRatio, canvas);