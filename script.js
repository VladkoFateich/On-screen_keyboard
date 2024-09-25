const wrapper = document.querySelector('#wrapper');
const input = document.querySelector('input');
const keyboard = document.querySelector('#keyboard');
const btns = document.querySelectorAll('#keyboard .btn');
const caps = document.querySelector('#keyboard .caps');

for (let btn of btns) {
  btn.addEventListener('click', function () {
    input.value += btn.textContent;
  });
}
let isLower = true;
caps.addEventListener('click', function () {
  for (let btn of btns) {
    if (isLower) {
      btn.textContent = btn.textContent.toUpperCase();
    } else {
      btn.textContent = btn.textContent.toLowerCase();
    }
  }
  isLower = !isLower;
});
