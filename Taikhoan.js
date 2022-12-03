function tab() {
  var tab1 = document.getElementById("form-user");
  var tab2 = document.getElementById("form-change-pass");
  var img = document.getElementById("img-profile");
  tab1.classList.toggle("is-display-none");
  tab2.classList.toggle("is-display-none");
  img.classList.toggle("is-display-none");
}
function menu() {
  var list = document.getElementById("list-menu-mb-login");
  list.classList.toggle("is-left-default");
}
