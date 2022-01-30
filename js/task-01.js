const categoriesNumberRef = document.querySelectorAll('#categories .item > h2');
console.log('Number of categories:', categoriesNumberRef.length);

categoriesNumberRef.forEach(category => {
  console.log('Category:', category.textContent);

  const elementsNumberRef = category.nextElementSibling.children.length;

  console.log('Elements:', elementsNumberRef);
  console.log('');
});
