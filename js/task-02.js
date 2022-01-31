const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListRef = document.querySelector('#ingredients');

const createItemMarkup = function (ingredients) {
  return ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.classList.add('item');
    item.textContent = ingredient;

    return item;
  });
};

ingredientsListRef.append(...createItemMarkup(ingredients));
