const button = document.querySelector('#letter-button');
const exitButton = document.querySelector('#exit-button');
const letter = document.querySelector('#letter-content');

button.addEventListener('click', () => {
    letter.removeAttribute('style');
    letter.setAttribute("style", "display: block;");
});

exitButton.addEventListener('click', () => {
    letter.removeAttribute('style');
    letter.setAttribute("style", "display: none;");
});