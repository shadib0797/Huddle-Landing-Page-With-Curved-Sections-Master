//jshint esversion:6

const form = document.querySelector("form");
const button = document.querySelector("form button");
const input = document.querySelector("input");

function ValidateEmail(inputText) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.value.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

button.addEventListener("click", function(){
  if(document.Form.EmailAddress.value === ''){
    form.classList.add("active");
  }else if (!ValidateEmail(document.Form.EmailAddress)) {
    form.classList.add("active");
  }
});

input.addEventListener('click', function(){
  form.classList.remove("active");
});
