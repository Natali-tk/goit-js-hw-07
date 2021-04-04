// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');


inputEl.addEventListener('input', showInputMessage);
function showInputMessage(message) {
  spanEl.textContent =
    message.currentTarget.value === ''
      ? 'незнакомец'
      : message.currentTarget.value;
}