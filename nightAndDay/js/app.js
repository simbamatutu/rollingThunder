var time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  plan = document.getElementById('theplan');

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

setTime();