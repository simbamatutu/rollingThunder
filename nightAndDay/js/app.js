var time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  plan = document.getElementById('theplan');

console.log(new Date());

function setTime() {
  let today = new Date(),
    hours = today.getHours(),
    mins = today.getMinutes(),
    sec = today.getSeconds();

  time.innerHTML = `${zeropad(hours)}<span>:</span>${zeropad(mins)}<span>:</span>${zeropad(sec)}`;

  setTimeout(setTime, 1000);
}

function zeropad(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function greetings() {
  let today = new Date(),
    hours = today.getHours();


  if (hours < 12) {
    greeting.textContent = 'Good Morning';
    document.body.style.backgroundImage = "url('./img/morning.jpg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.color = "whitesmoke";
  } else if (hours < 18) {
    greeting.textContent = 'Good Afternoon';
  } else {
    greeting.textContent = 'Good Evening';
  }

}


setTime();
greetings();