const buttons = document.querySelectorAll('.button');
const operations = document.querySelector('.operations');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(button.textContent)) {
            if (operations.textContent === '0') {
                operations.textContent = button.textContent;
            }else{
                operations.textContent += button.textContent;          
            }
        }

        
    })
})