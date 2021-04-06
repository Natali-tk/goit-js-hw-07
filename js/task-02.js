 // Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');
const createLiItems = ingredients.map(ingredient => {
    const liItem = document.createElement('li');
    liItem.textContent = ingredient;
    return liItem
});

    ingredientsEl.append(...createLiItems);
