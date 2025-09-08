const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
/** @type {HTMLSpanElement} */
const input = document.querySelector(".textEdit");
/** @type {HTMLDivElement} */
const textDiv = document.querySelector(".inputMain");

input.style.minWidth = textDiv.offsetWidth - 4 * fontSize + 'px';

input.addEventListener('input', () => {
    if (input.value.length > 0) {
        input.style.fontSize = '32px';
    } 
    else {
        input.style.fontSize = '1rem';
    }
})