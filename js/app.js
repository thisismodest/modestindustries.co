var menuOpen = false;
var menu_drop = document.getElementById('menu-drop');
var menu_x = document.getElementById('menu-close-x');

function toggleMenu(){ 
  if (!menuOpen) {
    menu_drop.style.display="block";
    menu_x.style.display="block";
    menuOpen = true;
    // console.log("Menu opened");
  } else {
    menu_drop.style.display="none";
    menu_x.style.display="none";
    // console.log("Menu closed");
    menuOpen = false;
  }
}