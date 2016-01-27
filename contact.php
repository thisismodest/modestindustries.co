<?php
$page_id = "contact";
$site_title = "Contact";

$meta_description = "Looking to chat with Modest? This is the page you're looking for.";
$meta_keywords = "modest industries, modest, digital agency, social design, design, web development, html5 banners, development, banners, social campaigns, GreenSock, idea generation, contact form";

$custom_css = "";
$custom_scripts = "";

$action=$_REQUEST['action']; 

if ($action=="") { /* conditional to check if form has been submitted */

  $intro_title = "Contact Modest";
  $intro_description = "Let's talk. It's good for the soul";

  $intro_img_url = "header-cups.png";
  $intro_img_alt = "Get in touch with Modest Industries";

  include 'header.php'; ?>

<!-- <div class="section text">
  <h2 class="col1">Modest</h2>
  <p class="col2">We're a friendly bunch so there's really no reason not to talk to us. Maybe you need a little more convincing? Okay, keep reading. Maybe we can convince you. I mean, if you don't get in touch, we'll never know what could have been. Think about it; that little idea that popped up from that little email...</p>
  <p class="col2">That little chat, that little spark and POW we have a big idea! Let's grow this into something amazing. What's that? Our idea has grown up and is having babies?! Now we're talking about idea babies running around and when they grow up, dare I say it – world domination, and it all starts with a "Hey guys, what's up?".</p>
</div> -->


<div id="contact-us"class="section contact"> 

  <h2 class="col1">Use the beautiful form below to contact us</h2>
  <p class="col1" style="text-align:center;">Your name, email and message are the only requirements.</p>

  <form id="form" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="POST" enctype="multipart/form-data">
    <input type="hidden" name="action" value="submit">

    <div>
      <label for='name'>Name</label>
      <input type='text' name='name' placeholder="What do we call you?" required />
    </div>

    <div>
      <label for='tel'>Phone</label>
      <input type='tel' name='tel' placeholder='Enter your digits' />
    </div>

    <div>
      <label for='email'>Email</label>
      <input type='email' name='email' placeholder="What's your email address?" required />
    </div>

    <div>
      <label for='url'>Website</label>
      <input type='text' name='website' placeholder='http://' />
    </div>

    <div>
      <label for='message'>Message</label>
      <textarea name='message' placeholder='Go ahead...' required ></textarea>
    </div>

    <div>
      <button type='submit'>Submit</button>
    </div>

  </form>
</div>

<?php 
  include 'footer.php';

  } else { /* check required fields are filled */
  $name=$_REQUEST['name'];
  $tel=$_REQUEST['tel'];
  $email=$_REQUEST['email'];
  $url=$_REQUEST['url'];
  $message=$_REQUEST['message'];
  if (($name=="")||($email=="")||($message=="")) { /* show form error page */

    $site_title = "Uh Oh!";
    $intro_title = "Uh oh!";
    $intro_description = "<em>'Name'</em>, <em>'Email'</em> and <em>'Message'</em> are required fields. Please <a style='border-bottom:2px solid black;' href='javascript:window.location.href=window.location.href'>click here</a> and fill out the form again.";

    /* NEEDS 'BACK TO CONTACT FORM' HREF LINK  ^^^^^^^^^^^^^^^^^^^^^^^^^^^ */

    $intro_img_url = "postbox.jpg"; /* NEEDS ERROR IMAGE */
    $intro_img_alt = "UH OH!";

    include 'header.php';

  } else { /* show thank you */
    $from="From: $name<$email>\r\nReturn-path: $email";
    $subject="Modest Contact Form";
    $message="$message\n\n$name\n<$email>\n$tel\n\nSent via the Modest Contact Form";
    mail("hello@modestindustries.co", $subject, $message, $from);

    $site_title = "Thank You!";

    $intro_title = "Thank You!";
    $intro_description = "Your message has been sent. We'll get back to you as soon as we possibly can.";

    $intro_img_url = "postbox.jpg"; /* NEEDS MESSAGE SENT IMAGE */
    $intro_img_alt = "IT'S A POSTBOX!"; 

    include 'header.php';
    include 'footer.php';
    }
  } ?>