const spanText = document.querySelector('.text');
const cursor = document.querySelector('.cursor');
const text = ['Wake up, Neo.', 'The Matrix has you...', 'Follow the white rabbit...', 'Knock knock, Neo.'];

const imageDiv = document.querySelector('.image-wrapper');
const image = document.querySelector('.image');

let activeText = 0;
let activeLetter = -50;
const time = 100;
let showTime = -750;

const addLetter = () => {
    if (activeLetter >= 0) {
        spanText.textContent += text[activeText][activeLetter];
    }
    activeLetter++;
    if (activeLetter === text[activeText].length) {
        activeText++;
        if (activeText === text.length) return;
        return setTimeout(() => {
            activeLetter = 0;
            spanText.textContent = '';
            addLetter()
        }, 3000)

    }
    setTimeout(addLetter, 100)

}
const cursorAnimation = () => {
    cursor.classList.toggle('active')
}

const showImage = () => {
    if (showTime >= 0) {
        image.classList.toggle('active');
    }
    showTime++;
    if (showTime === 1000) return;
}

addLetter()
setInterval(cursorAnimation, 500);
setInterval(showImage, 30);
