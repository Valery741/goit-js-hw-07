const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    const boxes = Array.from({ length: amount }, (_, index) => createBox(index + 1));
    boxesContainer.innerHTML = '';
    boxes.forEach(box => boxesContainer.appendChild(box));
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
}

function createBox(size) {
  const box = document.createElement('div');
  box.style.width = `${30 + (size - 1) * 10}px`;
  box.style.height = `${30 + (size - 1) * 10}px`;
  box.style.backgroundColor = getRandomHexColor();
  return box;
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
