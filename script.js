const eyes = document.querySelector('.eyes');
const head = document.querySelector('head');
const ears = document.querySelector('.ears');
const nose = document.querySelector('.nose');
const snout = document.querySelector('.snout');
const textXY = document.querySelector('.textXY');
const text2 = document.querySelector('.text2');

let cursorPos = { x: 0, y: 0 };
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

function defineSizeScreen() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
}

function mouseMove(e) {
  cursorPos = { x: e.clientX, y: e.clientY };
  follow();
}

function touchMove(e) {
  cursorPos = { x:e.targetTouche[0].elOffsetX, y:e.targetTouche[0].elOffsetY};
  follow();
}

const followCursor = (el, xrelation, yrelation) => {
  const elOffset = el.getBoundingClientRect();
  const centerX = elOffset.x + elOffset.width / 2;
  textXY.innerHTML = "valor X: " + Math.round(centerX);
  const centerY = elOffset.y + elOffset.height / 2;
  textXY.innerHTML += " valor Y: " + Math.round(centerY);
  const distanceLeft = Math.round(((cursorPos.x - centerX)*100)/window.innerWidth);
  text2.innerHTML = "valor X: " + distanceLeft;
  const distanceTop = Math.round(((cursorPos.y - centerY)*100)/window.innerHeight);
  text2.innerHTML += " valor Y: " + distanceTop;
  el.style.transform = `translate(${distanceLeft / xrelation}px, ${distanceTop /yrelation}px)`;
};

const follow = () => {
  if (ears) followCursor(ears, 0, 0);
  if (head) followCursor(head, 6, 6);
  if (eyes) followCursor(eyes, 1.8, 1.8);
  if (snout) followCursor(snout, 1.5, 1.5);
  if (nose) followCursor(nose, 1, 1);
}

window.addEventListener(`resize`, defineSizeScreen);
window.addEventListener(`mousemove`, mouseMove);
window.addEventListener(`touchmove`, touchMove);