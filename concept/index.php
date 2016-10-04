<!DOCTYPE html>
<html>
<head>
  <link rel="icon" type="image/x-icon" href="../favicon.ico">
  <link rel="shortcut icon" type="image/x-icon" href="../favicon.ico">
  <link rel="icon" type="image/png" href="../favicon.png">
  <link rel="stylesheet" type="text/css" href="../stylesheet.css">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta charset="UTF-8">
  <meta name="keywords" content="<?php echo $meta_keywords; ?>" />
  <meta name="description" content="<?php echo $meta_description; ?>" /> 
  <meta property="og:image" content="img/<?php echo $intro_img_url; ?>"/>

  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-73153538-1', 'auto');
    ga('send', 'pageview');
  </script>

  <title>Concepts x Modest Industries</title>

</head>
<body>

  <div id="container">
    <div id="header">
      <div class="logo banner">
        <a href="/">
        <img src="../img/core/modest-industries-banner-logo.png" alt="Modest Industries Logo"></a>
      </div>
      <div class="menu-btn" onclick="toggleMenu()">MENU<img id="menu-close-x" src="../img/core/x.png" alt="Close Menu"/></div>   
      <div id="menu">
        <ul id="header-menu-list">
          <li>
            <a href="/" style="color:#ef1616;">GET OUTTA HERE</a>
          </li>
          <li>
            <a href="/contact">CONTACT MODEST</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="hide-drop-menu">
      <div id="menu-drop">
        <ul id="header-menu-list">
          <li>
            <a href="/" style="color:#ef1616;">GET OUTTA HERE</a>
          </li>
          <li>
            <a href="/contact">CONTACT MODEST</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="main">
      <h1 class="intro-title">You've found it!</h1>
      <p class="intro-subtitle">You've found our secret area, you sneaky devil, you.</p>        
      <img src="../img/header-bulbs.png" alt="Super duper secret concept area" class="intro-image"/>

      <div class="section text">
        <h2 class="col1">You shouldn't really be here</h2>
        <p class="col2">I mean, it's still great, but there was probably another page we wanted to impress you with.</p>
        <p class="col2">Maybe you're just here because you're curious and looking for more concepts. Well, let's talk.</p>
        <div class="clearfix"></div>
        <a href="/contact" alt="Chit Chat with Modest Industries" class="cta-btn">Click this button. Go on. Do it.</a>
      </div>


      <div class="footer">
        <div class="social-box">
          <a href="http://instagram.com/thisismodest" alt="Follow Modest Industries on Instagram" target="_blank"><img class="social-icon" src="../img/instagram.png"></a>
           <a href="http://twitter.com/thisismodest" alt="Follow Modest Industries on Twitter" target="_blank"><img class="social-icon" src="../img/twitter.png"></a>
          <a href="http://facebook.com/thisismodest" alt="Like Modest Industries on Facebook" target="_blank"><img class="social-icon" src="../img/facebook.png"></a>
        </div>

        <div class="to-top">
          <a class="scroll" data-speed="400" data-easing="easeOutQuad" data-url="false" href="#header"><img src="../img/core/up-arrow.png"></a>  
        </div>

        <div class="footer-logo">
          <a href="/">
            <img src="../img/core/modest-industries-banner-logo.png">
          </a>
        </div>

        <p class="footer-copyright">&copy; 2014-<?php echo date('Y');?> MODEST INDUSTRIES LTD • Company No. 09229917 • Registered in England &amp; Wales at Unit 11, Hove Business Centre, Hove, East Sussex, BN3 6HA</p>
      </div>

    </div>

  </div>

  <script src="../js/CSSPlugin.min.js"></script>
  <script src="../js/TweenLite.min.js"></script>
  <script src="../js/main.js"></script>

</body>
</html>

 