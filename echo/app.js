var username = document.getElementById('Inputuser');
var email = document.getElementById('InputEmail');
var password = document.getElementById('InputPassword');
var btn = document.querySelector('.btn');



btn.addEventListener('click', function (e) {

  e.preventDefault();
  console.log(username.value);
  console.log(email.value);
  console.log(password.value);

});