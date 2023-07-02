function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// пока що розбираюсь як зробити це завдання((

const refs = {
  inputEl: document.querySelector('input'),
  btnCreateEl: document.querySelector('button[data-create]'),
  btnDestroyEl: document.querySelector('button[data-destroy]'),
  boxEl: document.querySelector('#boxes'),
};
console.log(refs);

refs.btnCreateEl.addEventListener('click', onClickCreateBtn);
function onClickCreateBtn() {}

refs.btnDestroyEl.addEventListener('click', onClickDestroyBtn);
function onClickDestroyBtn() {}
