const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    plan = document.getElementById('theplan');
var username;

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
        //  hours = today.getHours();
        hours = 4;
    if ((hours >= 5) && (hours <= 7)) {
        greeting.textContent = 'Sleep well';
    } else if ((hours >= 8) && (hours <= 9)) {
        greeting.textContent = 'Ready to seize the day';
    } else if (hours == 10) {
        greeting.textContent = 'Good morning';
    } else if (hours == 11) {
        greeting.textContent = 'How is it going';
    } else if (hours == 12) {
        greeting.textContent = 'Good day';
    } else if ((hours >= 13) && (hours <= 17)) {
        greeting.textContent = 'Seize the day';
    } else if ((hours >= 18) && (hours <= 20)) {
        greeting.textContent = 'Good evening';
    } else if (hours >= 21 && hours <= 4) {
        greeting.textContent = 'Late night session';
    }
    else {
        greeting.textContent = 'Set The Day On Fire';
    }
    setTimeout(greetings, 1000);
}

function setBg() {
    let today = new Date(),

        hours = today.getHours();

    if (hours < 5) {
        document.body.style.backgroundImage = "url('./img/night2.jpg')";
        document.body.style.color = "white";

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
        username = name;
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