const textBlock = document.createElement('div');
const button = document.createElement('button');
textBlock.innerHTML = `Text`;
textBlock.style.fontSize = '20px';
button.innerHTML = 'Click';

let isBlack = true;

function toggleColor(){
    isBlack = !isBlack;
}

button.addEventListener('click', () => {
    toggleColor();
    isBlack ? textBlock.style.color = 'black' : textBlock.style.color = 'red';
})

document.body.appendChild(textBlock);
document.body.appendChild(button);
