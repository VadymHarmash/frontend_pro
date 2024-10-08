let url = '';

document.querySelector('#prompt').addEventListener('click', () => {
  url = prompt('Write your link');
})

document.querySelector('#relocate').addEventListener('click', () => {
  location.href = url;
})
