const slider = document.getElementById('slider');
const scene = document.getElementById('scene');

let isPressed = false;
let startPoint;
let sceneOffset = 0;

slider.addEventListener('mousedown', (e) => {
  isPressed = true;
  startPoint = e.offsetX - sceneOffset;
  console.log(sceneOffset)
});

window.addEventListener('mouseup', () => {
  isPressed = false;
});

const checkBoundary = () => {
  if (sceneOffset > 0) {
    sceneOffset = 0;
    scene.style.transform = `translateX(${sceneOffset}px)`;

  }

  if (sceneOffset < -1000) {
    // setSceneOffset(-(frameWidth * children.length))
    sceneOffset = -1000;
    scene.style.transform = `translateX(${sceneOffset}px)`;

  }
}

slider.addEventListener('mousemove', (e) => {
  if (!isPressed) return;
  e.preventDefault();
  let x = e.offsetX;
  sceneOffset = x - startPoint;
  scene.style.transform = `translateX(${sceneOffset}px)`;
  checkBoundary();
});