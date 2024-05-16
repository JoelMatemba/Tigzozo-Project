// var icon = document.getElementById("icon");
// var icon1 = document.getElementById("a");
// var icon2 = document.getElementById("b");
// var icon3 = document.getElementById("c");
// var nav = document.getElementById('nav');
// var blue = document.getElementById("blue");

// icon.addEventListener('click', function() {
//   icon1.classList.toggle('a');
//   icon2.classList.toggle('c');
//   icon3.classList.toggle('b');
//   nav.classList.toggle('show');
//   blue.classList.toggle('slide');
// });


var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById('nav');
var blue = document.getElementById("blue");

icon.addEventListener('click', function() {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  nav.classList.toggle('show');
  blue.classList.toggle('slide');
});

// Function to close the menu when a link is clicked
function closeNav() {
  icon1.classList.remove('a');
  icon2.classList.remove('c');
  icon3.classList.remove('b');
  nav.classList.remove('show');
  blue.classList.remove('slide');
}

// Add event listeners to all links inside the navigation menu
var links = document.querySelectorAll('#nav a');
links.forEach(function(link) {
  link.addEventListener('click', closeNav);
});