const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
/** @type {HTMLSpanElement} */
const input = document.querySelector(".textEdit");
/** @type {HTMLDivElement} */
const textDiv = document.querySelector(".inputMain");

const placeholder = "Click here to start..."
const password = "testing";

input.style.minWidth = textDiv.offsetWidth - 4 * fontSize + 'px';

let currentTyped = "";


input.addEventListener('focus', () => {

    if (input.textContent === placeholder) {
        input.textContent = '';
        input.style.fontSize = 2 + 'rem';
    }
})

input.addEventListener('blur', () => {
    if (input.textContent.trim() === '') {
        input.style.fontSize = 1 + 'rem';
        input.textContent = "Click here to start...";
        input.style.color = 'white';
    }
})

input.addEventListener('input', () => {
    /*Changes stuff in the span to dots */
    const inputDisplay = input.textContent;

    /* Save real input */
    if (currentTyped.length < inputDisplay.length) {
        currentTyped += inputDisplay[inputDisplay.length - 1];
    }
    else if (currentTyped.length > inputDisplay.length) {
        currentTyped = currentTyped.slice(0,-1);
    }
    console.log("Current typed: " + currentTyped);


    input.textContent = "•".repeat(input.textContent.length);
    input.style.color = 'rgb(65, 144, 73)';
    if (currentTyped.slice(0, currentTyped.length) !== password.slice(0,currentTyped.length)) {
        input.style.color = 'rgb(255,0,0)';
    }

    /* Cursor Positioning Section */
    const range = document.createRange();
    const selected = window.getSelection();

    range.selectNodeContents(input);
    range.collapse(false);

    selected.removeAllRanges();
    selected.addRange(range);
})