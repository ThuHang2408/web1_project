function display() {
  var icon = document.getElementById("icon-x");
  var box = document.getElementById("infor-box");
  var filter = document.getElementById("icon-filter");

  box.classList.toggle("is-display-none");
  filter.classList.toggle("is-display-none");
  icon.classList.toggle("is-display-none");
}

function display1() {
  var icon1 = document.getElementById("icon-down-1");
  var box1 = document.getElementById("category");
  var icon2 = document.getElementById("icon-up-1");
  icon1.classList.toggle("is-display-none");
  box1.classList.toggle("is-display-none");
  icon2.classList.toggle("is-display-none");
}
function display2() {
  var icon3 = document.getElementById("icon-down-2");
  var box2 = document.getElementById("price");
  var icon4 = document.getElementById("icon-up-2");
  icon3.classList.toggle("is-display-none");
  box2.classList.toggle("is-display-none");
  icon4.classList.toggle("is-display-none");
}
function display3() {
  var icon5 = document.getElementById("icon-down-3");
  var box3 = document.getElementById("rate");
  var icon6 = document.getElementById("icon-up-3");
  icon5.classList.toggle("is-display-none");
  box3.classList.toggle("is-display-none");
  icon6.classList.toggle("is-display-none");
}

function display4() {
  var icon7 = document.getElementById("icon-down-4");
  var box3 = document.getElementById("level");
  var icon8 = document.getElementById("icon-up-4");
  icon7.classList.toggle("is-display-none");
  box3.classList.toggle("is-display-none");
  icon8.classList.toggle("is-display-none");
}
function menu() {
  var list = document.getElementById("list-menu");
  list.classList.toggle("is-left-default");
}