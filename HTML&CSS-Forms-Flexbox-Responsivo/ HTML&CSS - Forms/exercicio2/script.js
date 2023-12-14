// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");


hrefLink.addEventListener('click', (event) => {
    event.preventDefault();
  });

inputCheckbox.addEventListener('click', (e) => {
    e.preventDefault(); 
});

inputText.addEventListener('keypress', (e) => {
    if (e.key !== 'a') {
        e.preventDefault();
    }
});