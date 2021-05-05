// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === +inputEl.dataset.length) {
        changeClassList('valid', 'invalid');
    } else {
        changeClassList('invalid', 'valid' );
    }
    if (!inputEl.value) {
        inputEl.classList.remove('invalid');
    }
});


const changeClassList =  (add, rem)=>{
    inputEl.classList.add(add);
    inputEl.classList.remove(rem);
}