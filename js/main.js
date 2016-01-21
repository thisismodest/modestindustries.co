// ANIMATED MOBILE TOGGLE MENU
var menuOpen = false,
    animating = false;
var menu_drop = document.getElementById('menu-drop');
var menu_x = document.getElementById('menu-close-x');
var header_menu_list = document.getElementById('header-menu-list');

var open_menu_height = (header_menu_list.getElementsByTagName('li').length * 25) + 30; //top:10px + bottom:20px + li:25px


function toggleMenu(){ 
  if (!menuOpen && !animating) {
    animating = true;
    menu_drop.style.display="block";
    menu_x.style.display="block";
    TweenLite.fromTo(menu_drop,0.4,{height:0,marginBottom:0},{height:open_menu_height, onComplete:function(){
      animating = false;
      menuOpen = true;
    }});
  } else if (menuOpen && !animating) {
    animating = true;
    TweenLite.to(menu_drop,0.4,{height:0,marginBottom:0, onComplete:function(){
      menu_drop.style.display="none";
      menu_x.style.display="none";
      menuOpen = false;
      animating = false;
    }});
  }
}
