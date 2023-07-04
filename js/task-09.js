function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

colorBtn.addEventListener('click', onClickBtn);
function onClickBtn() {
  const colorNew = getRandomHexColor();
  document.body.style.backgroundColor = colorNew;
  colorSpan.textContent = colorNew;
}
