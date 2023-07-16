const eyes = document.querySelectorAll('.eyes');
const head = document.querySelector('head');
const ears = document.querySelectorAll('.ears');
const nose = document.querySelector('.nose');
const snout = document.querySelector('.snout');

let cursorPos = { x: 0, y: 0 };
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

function defineSizeScreen() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
}

function mouseMove(e) {
  cursorPos = { x: e.clientX, y: e.clientY };
}

const followCursor = (el, xrelation, yrelation) => {
  
};

const follow = () => {
  if (ears)
}