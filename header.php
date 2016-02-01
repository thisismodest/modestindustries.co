<!DOCTYPE html>
<html>
  <head>
    <?php if ($page_id=="index"): ?>

      <title><?php echo $site_title; ?></title>
    
    <?php else: ?>

      <title><?php echo $site_title; ?> | Modest Industries</title>

    <?php endif ?>

    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
    <link rel="icon" type="image/png" href="favicon.png">
    <link rel="stylesheet" type="text/css" href="stylesheet.css">

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

    <?php $page_menu='
      <ul id="header-menu-list">
        <li>
          <a href="index">HOME</a>
        </li><li>
          <a href="contact">CONTACT</a>
        </li><li>
          <a href="services">SERVICES</a>
        </li><li>
          <a href="people">OUR PEOPLE</a>
        </li><li>
          <a href="products">PRODUCTS</a>
        </li><li>
          <a href="studio">STUDIO</a>
        </li><li>
          <a href="hire-me" style="color:#ef1616;">VACANCIES</a>
        </li>
      </ul>';

    echo $custom_css; ?>
   <noscript>
    <style>
      .fadeIn{opacity:1;}
      #menu-drop{display:block;}
    </style>
    </noscript>
  </head>

  <body onload="fadeIn.style.opacity='1'">
    <div id="container">
      <div id="header">
        <div class="logo banner">
          <a href="/">
          <img src="img/core/modest-industries-banner-logo.png" alt="Modest Industries Logo"></a>
        </div>
        <div class="menu-btn" onclick="toggleMenu()">MENU<img id="menu-close-x" src="img/core/x.png" alt="Close Menu"/></div>
        
        <div id="menu"><?php echo $page_menu; ?></div>

      </div>

      <!-- Dropdown menu -->
      <div class="hide-drop-menu">
        <div id="menu-drop"><?php echo $page_menu; ?></div>
      </div>

    <!-- Main Content -->
      <div class="fadeIn">
        <div class="main">
          <h1 class="intro-title"><?php echo $intro_title; ?></h1>
          <p class="intro-subtitle"><?php echo $intro_description; ?></p>        
          <img src="img/<?php echo $intro_img_url; ?>" alt="<?php echo $intro_img_alt; ?>" class="intro-image"/>







