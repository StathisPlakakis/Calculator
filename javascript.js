const buttons = document.querySelectorAll('.button');
const operations = document.querySelector('.operations');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        operations.textContent = button.textContent;
    })
})