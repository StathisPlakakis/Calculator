const buttons = document.querySelectorAll('.button');
const darkButtons = document.querySelectorAll('.dark');
const orangeButtons = document.querySelectorAll('.orange');
const display = document.querySelector('.display');

buttons.forEach((button) => {
    button.addEventListener('mousedown', () => {
        button.style.backgroundColor = 'rgba(207, 202, 202, 0.9)';
    })
})
darkButtons.forEach((darkButton) => {
    darkButton.addEventListener('mousedown', () => {
        darkButton.style.backgroundColor = 'rgba(112, 114, 132, 0.9)';
    })
})
orangeButtons.forEach((orangeButton) => {
    orangeButton.addEventListener('mousedown', () => {
        orangeButton.style.backgroundColor = 'rgba(239, 153, 23, 0.9)';
    })
})
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(button.textContent)) {
            if (display.textContent === '0') {
                button.style.backgroundColor = 'rgb(207, 202, 202)';
                display.textContent = button.textContent;
            }else{
                button.style.backgroundColor = 'rgb(207, 202, 202)';
                display.textContent += button.textContent;          
            }
        }
    })
})

darkButtons.forEach((darkButton) => {
    darkButton.addEventListener('click', () => {
        if (darkButton.textContent === 'C') {
            darkButton.style.backgroundColor = 'rgba(112, 114, 132, 1)';
            clear();
        }
    })
})

orangeButtons.forEach((orangeButton) => {
    orangeButton.addEventListener('click', () => {
        orangeButtons.forEach((orangeBorder) => {
            orangeBorder.style.border = '1px solid rgb(33, 36, 61)';
        })
        orangeButton.style.backgroundColor = 'rgba(239, 153, 23, 1)';
        (orangeButton.textContent !== '=') ? orangeButton.style.border = '3px solid rgb(33, 36, 61)' : orangeButton.style.border = '1px solid rgb(33, 36, 61)';
        }
)}
)

function clear() {
    display.textContent = '0';
}