const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(button.textContent)) {
            if (display.textContent === '0') {
                display.textContent = button.textContent;
            }else{
                display.textContent += button.textContent;          
            }
        }

        
    })
})