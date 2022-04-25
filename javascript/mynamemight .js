function go()  {
    alert('hi')
}

/* var myList  = [' hi', ' welcome', ' Thank you'];

myList.forEach(function(value, index)  {
   alert('You have'+value+' come to Anor\'s website);
});  */

go()

var myList  = [' hi', ' welcome', ];

for (var i=0; i < myList. length; i++)  {
    alert('Hello'+myList[i]+' you have  come to anor\'s website');
}  

var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne,addEventListener("input", add);
numTwo,addEventListener("input", add);

function add() {
  var one = parseFloat(numOne.value) || 0;
  var two = parseFloat(numTwo.value) || 0;
  var sum = one+two;
  addSum.innerHTML = "Your sum is:"+sum;
  /* or 
  addSum.innerHTML = "Your sum is:"+sum;
  */
}

/*
var Mary1 = document.getElementById("mother1");
var Mary2 = document.getElementById("mother2");
var Mary3 = document.getElementById("mother3");

mother1.addEventListener("click", picLink);
mother2.addEventListener("click", picLink);
mother3.addEventListener("click", picLink);

function picLink() {
  var allImages = document.querySelectorAll("img");

  for (var i = 0; i < allImages.length; i++) {
    allImages[i].className = "hide";
  }

  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  if (pic.className === "hide") {
    pic.className = "";
  } else {
    pic.className = "hide";
  }
}
*/

var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", editItem);
  inputs[i].addEventListener("blur", updateItem);
  inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem() {
  this.className = "edit";
  var input = this.querySelector("input");
  input.focus();
  input.setSelectionRange(0, input.value.length);
}

function updateItem() {
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
}

function itemKeypress(event) {
  if (event.which === 13) {
    updateItem.call(this);
  }
}

var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");
var ben = document.getElementById("ben");

simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);
ben.addEventListener("click", picLink);

function picLink() {
  var allImages = document.querySelectorAll("img");

  for (var i = 0; i < allImages.length; i++) {
    allImages[i].className = "hide";
  }

  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  if (pic.className === "hide") {
    pic.className = "";
  } else {
    pic.className = "hide";
  }
}