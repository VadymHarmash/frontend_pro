const span = document.createElement('span');
let totalSeconds = 65;

const intervalId = setInterval(() => {
  totalSeconds--;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  span.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  if (totalSeconds <= 0) {
    clearInterval(intervalId);
  }
}, 1000);

document.body.appendChild(span);
