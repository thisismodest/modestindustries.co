// ANIMATED MOBILE TOGGLE MENU
var menuOpen = false,
    animating = false;
var menu_drop = document.getElementById('menu-drop');
var menu_x = document.getElementById('menu-close-x');
var header_menu_list = document.getElementById('header-menu-list');

var open_menu_height = (header_menu_list.getElementsByTagName('li').length * 26) + 30; //top:10px + bottom:20px + li:26px



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

//Back to Top scroll function minified
(function(e,t){"use strict";var n=0,r=175,i=15,s=document.getElementsByTagName("a"),o;for(var u=0;u<s.length;u++){o=s[u].attributes.href===t?null:s[u].attributes.href.nodeValue.toString();if(o!==null&&o.length>1&&o.indexOf("#")!=-1){s[u].onclick=function(){var n,s=this.attributes.href.nodeValue.toString(),o=s.substr(0,s.indexOf("#")),u=s.substr(s.indexOf("#")+1);if(n=document.getElementById(u)){var l=(r-r%i)/i,c=f(),h=(a(n)-c)/l;if(e.history&&typeof e.history.pushState=="function")e.history.pushState({},t,o+"#"+u);for(var p=1;p<=l;p++){(function(){var t=h*p;setTimeout(function(){e.scrollTo(0,t+c)},i*p)})()}return false}}}}var a=function(e){var r=n*-1;while(e.offsetParent!=t&&e.offsetParent!=null){r+=e.offsetTop+(e.clientTop!=null?e.clientTop:0);e=e.offsetParent}return r};var f=function(){return e.pageYOffset!==t?e.pageYOffset:document.documentElement.scrollTop!==t?document.documentElement.scrollTop:document.body.scrollTop}})(window);


// window.onload = function(){
//   var body = document.getElementsByTagName('body'); 
//     TweenLite.to(body,1,{opacity:1});
// }