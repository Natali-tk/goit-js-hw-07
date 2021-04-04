
// Напиши скрипт который, при наборе текста в инпуте input #name - input(событие input),
// подставляет его значение в span #name - input.Еслиинпут пустой, в спане должна отображатся строка "незнакомец"
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

//     Имеет случайный rgb цвет фона
//     Размеры самого первого div - 30px на 30px
//     Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

// Создай функцию destroyBoxes(), которая очищает div#boxes.



const refs = {
    controlsEl: document.querySelector('#controls'),
    inputEl: document.querySelector('input'),
    renderBtn: document.querySelector('button[data-action="render'),
    destroyBtn: document.querySelector('button[data-action="destroy'),
    boxesEl: document.querySelector('#boxes'),
}

refs.renderBtn.addEventListener('click', getAmount)

function getAmount() {
    let amount =  refs.inputEl.value;
    createBoxes(amount);
}

refs.destroyBtn.addEventListener('click', cleanInput);
function cleanInput() {
    refs.inputEl.value = "";
};


function createBoxes(amount) {
    let size = 30;  
    for (let i = 0; i < amount; i++) {
        size += i * 10;
        const box = document.createElement("div");
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor=`rgb(${ getRandom(0, 255) }, ${ getRandom(0, 255) }, ${ getRandom(0, 255) })`;
        function getRandom(min, max) {
            return Math.ceil(Math.random() * (max - min) + min); 
        }
        refs.boxesEl.appendChild(box);
    }  
}

refs.destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes() {
    refs.boxesEl.innerHTML = "";
}

