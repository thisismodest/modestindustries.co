    </div>
      <div class="footer">
        <div class="to-top">
          <a href="#header" title="Back to top">
            <img src="img/core/up-arrow.png">
          </a>
        </div>
        <div class="footer-logo">
          <img src="img/core/modest-industries-banner-logo.png">
        </div>
        <p class="footer-copyright">&copy; 2014-<?php echo date('Y');?> MODEST INDUSTRIES LTD • Company No. 09229917 • Registered in England &amp; Wales at Unit 11, Hove Business Centre, Hove, East Sussex, BN3 6HA</p>
      </div>

    </div>
    <script src="js/CSSPlugin.min.js"></script>
    <script src="js/EasePack.min.js"></script>
    <script src="js/TweenLite.min.js"></script>

    <script type="text/javascript">
      (function(e,t){"use strict";var n=0,r=175,i=15,s=document.getElementsByTagName("a"),o;for(var u=0;u<s.length;u++){o=s[u].attributes.href===t?null:s[u].attributes.href.nodeValue.toString();if(o!==null&&o.length>1&&o.indexOf("#")!=-1){s[u].onclick=function(){var n,s=this.attributes.href.nodeValue.toString(),o=s.substr(0,s.indexOf("#")),u=s.substr(s.indexOf("#")+1);if(n=document.getElementById(u)){var l=(r-r%i)/i,c=f(),h=(a(n)-c)/l;if(e.history&&typeof e.history.pushState=="function")e.history.pushState({},t,o+"#"+u);for(var p=1;p<=l;p++){(function(){var t=h*p;setTimeout(function(){e.scrollTo(0,t+c)},i*p)})()}return false}}}}var a=function(e){var r=n*-1;while(e.offsetParent!=t&&e.offsetParent!=null){r+=e.offsetTop+(e.clientTop!=null?e.clientTop:0);e=e.offsetParent}return r};var f=function(){return e.pageYOffset!==t?e.pageYOffset:document.documentElement.scrollTop!==t?document.documentElement.scrollTop:document.body.scrollTop}})(window);
    </script>

    <?php echo $custom_scripts; ?>
    <script src="js/main.js"></script>
  </body>
</html>

    
