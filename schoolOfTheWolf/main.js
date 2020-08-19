var closeOne= document.getElementById("close");
var menu= document.getElementById('menuActive');
var toggleMenu=document.getElementById('toggleMenu');

closeOne.addEventListener('click', function(){
    menu.classList.toggle("menuActive");
    menu.style.zIndex='0';
});

toggleMenu.addEventListener('click', function(){
    menu.classList.toggle("menuActive");
    menu.style.zIndex='10';
});