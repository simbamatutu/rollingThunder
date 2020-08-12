
var btn = document.getElementById("btn");
var res1 = document.querySelectorAll(".item");
var itemList=document.getElementById("list-container");
 

btn.addEventListener('click', function (e) {
 
  e.preventDefault();
  var newItem = document.getElementById("inputText").value;
  console.log(newItem);
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'item';
  var liText=document.createTextNode(newItem);
  li.appendChild(liText);
  itemList.appendChild(li);
});