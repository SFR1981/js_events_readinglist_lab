document.addEventListener('DOMContentLoaded', () => {


const form = document.querySelector('#new-item-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const bookslist = document.querySelector('ul');
  const newBook = document.createElement('li');
    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;

    newBook.textContent = `${title} ${author} ${category}`

  bookslist.appendChild(newBook);
  form.reset();


})

const button = document.querySelector('#button');
console.dir(button);
button.addEventListener('click', ()=> {
  bookslist.innerHTML = '';

})



})
