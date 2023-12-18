const buttons = document.querySelectorAll('.button');
const darkButtons = document.querySelectorAll('.dark');
const orangeButtons = document.querySelectorAll('.orange');
const display = document.querySelector('.display');
const dot = document.querySelector('.dot');

let a = display.textContent;
let b;

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

dot.addEventListener('mousedown', () => {
    dot.style.backgroundColor = 'rgba(207, 202, 202, 0.9)';
})

dot.addEventListener('click', () => {
    dot.style.backgroundColor = 'rgba(207, 202, 202, 1)';
})

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.style.backgroundColor = 'rgba(207, 202, 202, 1)';
         const arr = Array.from(orangeButtons);
         if (display.textContent === 'troll') {
            clear();
         }
         if (arr.some((orangeButton) => {
            return orangeButton.classList.contains('active');
         })) {
            if(!b) {
                display.textContent = '0';
            }
            if (display.textContent === '0') {
                display.textContent = button.textContent;
                b = display.textContent
            }else {
                display.textContent += button.textContent;
                b = display.textContent;
            }
         }else {
            if (display.textContent === '0') {
                display.textContent = button.textContent;
                a = display.textContent
            }else {
                display.textContent += button.textContent;
                a = display.textContent;
            }
         }
    }
)})


darkButtons.forEach((darkButton) => {
    darkButton.addEventListener('click', () => {
        darkButton.style.backgroundColor = 'rgba(112, 114, 132, 1)';
        if (darkButton.textContent === 'C') {
            darkButton.style.backgroundColor = 'rgba(112, 114, 132, 1)';
            clear();
        }
    })
})

orangeButtons.forEach((orangeButton) => {
    orangeButton.addEventListener('click', () => {
        orangeButtons.forEach((orangeBorder) => {
            if (b) {
                if (orangeBorder.classList.contains('active')) {
                    orangeBorder.classList.remove('active');
                    if (orangeBorder.textContent === '+') {
                        a = Number(a);
                        b = Number(b);
                        display.textContent = a + b;
                        a = String(display.textContent);
                        b = undefined;
                    }else if (orangeBorder.textContent === '-') {
                        a = Number(a);
                        b = Number(b);
                        display.textContent = a - b;
                        a = String(display.textContent);
                        b = undefined;
                    }else if (orangeBorder.textContent === '\u00F7') {
                        a = Number(a);
                        b = Number(b);
                        if (b === 0) {
                            display.textContent = "troll";
                        }else {
                            if (a % b === 0){
                                display.textContent = a / b;
                            }else {
                                display.textContent = Number((a / b).toFixed(2));
                            }
                            a = String(display.textContent);
                            b = undefined;
                        }
                        
                    }else if (orangeBorder.textContent === '\u00D7') {
                        a = Number(a);
                        b = Number(b);
                        display.textContent = a * b;
                        a = String(display.textContent);
                        b = undefined;
                    }
                }
            }
            orangeBorder.style.border = '1px solid rgb(33, 36, 61)';
        })
        orangeButton.style.backgroundColor = 'rgba(239, 153, 23, 1)';
        if (orangeButton.textContent !== '=') {
            orangeButton.style.border = '3px solid rgb(33, 36, 61)';
            orangeButton.classList.add('active');
        }
        })
        }
)

function clear() {
    display.textContent = '0';
    orangeButtons.forEach((orangeButton) => {
        orangeButton.style.border = '1px solid rgb(33, 36, 61)';
        if (orangeButton.classList.contains('active')) {
            orangeButton.classList.remove('active');
        }
        a = display.textContent;
        b = undefined;
    })
}