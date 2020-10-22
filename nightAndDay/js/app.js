const time = document.getElementById('time'),
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

function greetings() {
    let today = new Date(),
        hours = today.getHours();

    if (hours < 12) {
        greeting.textContent = 'Good Morning';
    } else if (hours < 18) {
        greeting.textContent = 'Good Afternoon';
    } else {
        greeting.textContent = 'Good Evening';
    }
    setTimeout(greetings, 1000);
}

function setBg() {
    let today = new Date(),

        hours = today.getHours();

    if (hours < 5) {
        document.body.style.backgroundImage = "url('./img/night2.jpg')";
        document.body.style.color = "white";

<<<<<<< HEAD
=======
        document.body.style
>>>>>>> 51d40ddbeb777d2a8fba3e2b10f5b800601be037
    } else if (hours >= 6 && hours <= 11) {
        document.body.style.backgroundImage = "url('./img/sunrise.jpg')";
        document.body.style.color = "white";
    } else if ((hours >= 12 && hours <= 17)) {
        document.body.style.backgroundImage = "url('./img/day.jpg')";
        document.body.style.color = "#fff";
    } else if (hours == 18) {
        document.body.style.backgroundImage = "url('./img/sunset.jpg')";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundImage = "url('./img/night1.jpg')";
        document.body.style.color = "white";
    }

    setTimeout(setBg, 1000);
}
function getName() {

    if (localStorage.getItem('name') === null) {
        name.textContent = '{Enter name...}';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerHTML);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerHTML);
    }
}
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);


function getPlan() {
    if (localStorage.getItem('plan') === null) {
        plan.textContent = '{Enter your focus...}';
    } else {
        plan.textContent = localStorage.getItem('plan');

    }
}

function setPlan(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('plan', e.target.innerHTML);
            plan.blur();
        }
    } else {
        localStorage.setItem('plan', e.target.innerHTML);
    }
}
plan.addEventListener('keypress', setPlan);
plan.addEventListener('blur', setPlan);
greetings();
getName();
getPlan();
setTime();
setBg();