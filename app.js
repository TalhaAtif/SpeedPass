const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
/** @type {HTMLSpanElement} */
const input = document.querySelector(".textEdit");
/** @type {HTMLDivElement} */
const textDiv = document.querySelector(".inputMain");
const placeholder = "Click here to start..."

input.style.minWidth = textDiv.offsetWidth - 4 * fontSize + 'px';

input.addEventListener('focus', () => {
    if (input.textContent === placeholder) {
        input.textContent = '';
    } 
})

input.addEventListener('blur', () => {
    if (input.textContent.trim() === '') {
        input.textContent = "Click here to start...";
    }
})