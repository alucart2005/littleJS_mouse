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
  const elOffset = el.getBoundingClientRect();
  const centerX = elOffset.x + elOffset.width / 2;
  const centerY = elOffset.y + elOffset.height / 2;
  const distanceLeft = Math.round(((cursorPos.x - centerX)*100)/window.innerWidth);
  const distanceTop = Math.round(((cursorPos.y - centerY)*100)/window.innerHeight);
  e.style.transform = `translate(${xrelation * distanceLeft}px, ${yrelation * distanceTop}px)`;
};

const follow = () => {
  if (ears) 
}