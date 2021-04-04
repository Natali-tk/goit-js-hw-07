// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

//     Категория: Животные
//     Количество элементов: 4



const categoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${categoriesEl.length} категории.`);

categoriesEl.forEach(element => {
    const tiltleEl = element.querySelector('h2');
    const liItem = element.querySelectorAll('ul>li');
    console.log(`Категория: ${tiltleEl.textContent}`);
    console.log(`Количество элементов: ${liItem.length}`);
});
