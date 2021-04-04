// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', () => {
    if (inputEl.value.length < 6) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    } else {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid');
    }
});