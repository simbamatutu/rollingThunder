
var btn = document.getElementById("btn");
var getItem = document.getElementById("inputText");
var res1 = document.querySelectorAll(".item");

btn.addEventListener('click', function (e) {

  e.preventDefault();
  var i = 0;
  while(i<res1.length){
    res1[i].innerText = getItem.value;
    i++;
  }

});