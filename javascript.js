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
    if (!display.textContent.includes('.')) {
        display.textContent += '.'
    }
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
            clear();
        }else if (darkButton.textContent === '+/-') {
            display.textContent = String(-1 * Number(display.textContent));
            b ? b = display.textContent : a = display.textContent;
        }else {
            display.textContent = String(Number((display.textContent / 100).toFixed(2)));
            b ? b = display.textContent : a = display.textContent;
        }
    })
})

orangeButtons.forEach((orangeButton) => {
    orangeButton.addEventListener('click', () => {
        orangeButtons.forEach((orangeBorder) => {
            if (b) {
                if (orangeBorder.classList.contains('active')) {
                    orangeBorder.classList.remove('active');
                    a = Number(a);
                    b = Number(b);
                    if (orangeBorder.textContent === '+') {
                        (String(a + b).includes('.')) ?
                        display.textContent = Number((a + b).toFixed(5)) :
                        display.textContent = a + b;
                        a = String(display.textContent);
                        b = undefined;
                    }else if (orangeBorder.textContent === '-') {
                        (String(a - b).includes('.')) ?
                        display.textContent = Number((a - b).toFixed(5)) :
                        display.textContent = a - b;
                        a = String(display.textContent);
                        b = undefined;
                    }else if (orangeBorder.textContent === '\u00F7') {
                        if (b === 0) {
                            display.textContent = "troll";
                        }else {
                            if (a % b === 0){
                                display.textContent = a / b;
                            }else {
                                display.textContent = Number((a / b).toFixed(5));
                            }
                            a = String(display.textContent);
                            b = undefined;
                        }
                        
                    }else if (orangeBorder.textContent === '\u00D7') {
                        (String(a * b).includes('.')) ?
                        display.textContent = Number((a * b).toFixed(5)) :
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

document.body.addEventListener('keypress', (e) => {
    let key = String(e.key);
    if ('0123456789'.includes(key)) {
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
                        display.textContent = key;
                        b = display.textContent
                    }else {
                        display.textContent += key;
                        b = display.textContent;
                    }
                 }else {
                    if (display.textContent === '0') {
                        display.textContent = key;
                        a = display.textContent
                    }else {
                        display.textContent += key;
                        a = display.textContent;
                    }
                 }
            
    }else if (key === 'c') {
        clear()
    }else if (key === '%') {
        display.textContent = String(Number((display.textContent / 100).toFixed(2)));
        b ? b = display.textContent : a = display.textContent;
    }else if (key === '.') {
        if (!display.textContent.includes('.')) {
            display.textContent += '.';
        }
    }else if ('/*-+='.includes(key)) {
        orangeButtons.forEach((orangeBorder) => {
            if (b) {
                if (orangeBorder.classList.contains('active')) {
                    orangeBorder.classList.remove('active');
                    a = Number(a);
                    b = Number(b);
                    if (orangeBorder.textContent === '+') {
                        (String(a + b).includes('.')) ?
                        display.textContent = Number((a + b).toFixed(5)) :
                        display.textContent = a + b;
                        a = String(display.textContent);
                        b = undefined;
                    }else if (orangeBorder.textContent === '-') {
                        (String(a - b).includes('.')) ?
                        display.textContent = Number((a - b).toFixed(5)) :
                        display.textContent = a - b;
                        a = String(display.textContent);
                        b = undefined;
                    }else if (orangeBorder.textContent === '\u00F7') {
                        if (b === 0) {
                            display.textContent = "troll";
                        }else {
                            if (a % b === 0){
                                display.textContent = a / b;
                            }else {
                                display.textContent = Number((a / b).toFixed(5));
                            }
                            a = String(display.textContent);
                            b = undefined;
                        }
                        
                    }else if (orangeBorder.textContent === '\u00D7') {
                        (String(a * b).includes('.')) ?
                        display.textContent = Number((a * b).toFixed(5)) :
                        display.textContent = a * b;
                        a = String(display.textContent);
                        b = undefined;
                    }
                }
            }
            orangeBorder.style.border = '1px solid rgb(33, 36, 61)';
            if (key === '+') {
                if (orangeBorder.textContent !== '+') {
                    orangeBorder.style.border = '3px solid rgb(33, 36, 61)';
                    orangeBorder.classList.add('active');
                }
            }else if (key === '-') {
                if (orangeBorder.textContent !== '-') {
                    orangeBorder.style.border = '3px solid rgb(33, 36, 61)';
                    orangeBorder.classList.add('active');
                }
            }else if (key === '/') {
                if (orangeBorder.textContent !== '\u00F7') {
                    orangeBorder.style.border = '3px solid rgb(33, 36, 61)';
                    orangeBorder.classList.add('active');
                }
            }else if (key === '*') {
                if (orangeBorder.textContent !== '\u00D7') {
                    orangeBorder.style.border = '3px solid rgb(33, 36, 61)';
                    orangeBorder.classList.add('active');
                }
            }
        })
    }
})