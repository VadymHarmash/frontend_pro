document.querySelector('.container').addEventListener('click', (e) => {
  if(e.target !== e.currentTarget) alert(`You tapped on ${e.target.textContent}`);
})
