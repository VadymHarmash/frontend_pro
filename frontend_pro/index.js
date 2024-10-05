const image = document.createElement("img");
const button = document.createElement("button");
button.innerHTML = "Randomizer";

const min = 1;
const max = 9;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

image.src = `./images/${randomNumber}.jpg`;
image.alt = `${randomNumber} picture`;
image.style.width = '512px';
image.style.height = '378px';

button.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    image.src = `./images/${randomNumber}.jpg`;
    image.alt = `${randomNumber} picture`;
})

document.body.appendChild(image);
document.body.appendChild(button);
