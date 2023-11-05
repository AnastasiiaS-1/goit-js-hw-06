

const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`)

categories.forEach(item => {
  const title = item.querySelector('h2').textContent;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});





