var closeOne= document.getElementById("close");
var menu= document.getElementById('menuActive');
var toggleMenu=document.getElementById('toggleMenu');
var locationList=document.getElementById('locationList');
var gearList=document.getElementById('gearList');
var alumniList=document.getElementById('alumniList');
var contractsList=document.getElementById('contractsList');




closeOne.addEventListener('click', function(){
    menu.classList.toggle("menuActive");
    menu.style.zIndex='0';
});

toggleMenu.addEventListener('click', function(){
    menu.classList.toggle("menuActive");
    menu.style.zIndex='20';
});

locationList.addEventListener('click' , function(){
    menu.classList.toggle("menuActive");
    menu.style.zIndex='0';
});

gearList.addEventListener('click' , function(){
    menu.classList.toggle("menuActive");
    menu.style.zIndex='0';
});


alumniList.addEventListener('click' , function(){
    menu.classList.toggle("menuActive");
    menu.style.zIndex='0';
});

contractsList.addEventListener('click' , function(){
    menu.classList.toggle("menuActive");
    menu.style.zIndex='0';
});