const userInfo = {};
const orderForm = document.querySelector('#orderForm');

const phoneRegex = /^\+380\d{9}$/;
const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;

function validateForm(){
  let isValid = true;

  if(!userInfo.name.trim()) {
    document.querySelector("#nameError").innerHTML = "Name is required";
    isValid = false;
  } else {
    document.querySelector("#nameError").innerHTML = "";
  }

  if(userInfo.message.length < 5) {
    document.querySelector("#messageError").innerHTML = "Message must to have at least 5 characters";
    isValid = false;
  } else {
    document.querySelector("#messageError").innerHTML = "";
  }

  if(!userInfo.phone) {
    document.querySelector("#phoneError").innerHTML = "Mobile phone is required";
    isValid = false;
  } else if(!phoneRegex.test(userInfo.phone)) {
    document.querySelector("#phoneError").innerHTML = "Mobile phone is invalid (+380)";
    isValid = false;
  } else {
    document.querySelector("#phoneError").innerHTML = "";
  }

  if(!userInfo.email) {
    document.querySelector("#emailError").innerHTML = "Email is required";
    isValid = false;
  } else if(!emailRegex.test(userInfo.email)) {
    document.querySelector("#emailError").innerHTML = "Email is invalid (test@domain.com)";
    isValid = false;
  } else {
    document.querySelector("#emailError").innerHTML = "";
  }

  return isValid;
}

orderForm.addEventListener('submit', (e) => {
  e.preventDefault();

  userInfo.name = orderForm.querySelector('#name').value;
  userInfo.message = orderForm.querySelector('#message').value;
  userInfo.phone = orderForm.querySelector('#phone').value;
  userInfo.email = orderForm.querySelector('#email').value;

  if(validateForm()){
    console.log(userInfo);
    orderForm.querySelector('#name').value = '';
    orderForm.querySelector('#message').value = '';
    orderForm.querySelector('#phone').value = '';
    orderForm.querySelector('#email').value = '';
  } else {
    console.log('Error in form!');
  }
});