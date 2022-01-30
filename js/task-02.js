const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listMarkup = [];

const listRef = document.querySelector('#ingredients');

const makeIngredientsListMarkup = function (ingredients) {
  return ingredients.forEach(ingredient => {
    const listEl = document.createElement('li');

    listEl.textContent = `${ingredient}`;
    listEl.classList.add('item');

    listMarkup.push(listEl);
  });
};

makeIngredientsListMarkup(ingredients);

listRef.append(...listMarkup);
