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

  $intro_img_url = "placeholder-crab.jpg";
  $intro_img_alt = "Get in touch with Modest Industries";

  include 'header.php'; ?>

<div class="section text">
  <h2 class="col1">Modest</h2>
  <p class="col2"> Bacon ipsum dolor amet spare ribs sirloin pancetta short ribs. Capicola boudin pork porky chop meatball filet mignon landjaeger meatloaf turkey beef ribs ball tip kielbasa cow ground round doner. Shankle tenderloin pork belly salami hamburger boudin.</p>
  <p class="col2"> Bacon ipsum dolor amet spare ribs sirloin pancetta short ribs. Capicola boudin pork chop meatball filet mignon landjaeger meatloaf turkey beef ribs ball tip kielbasa cow ground round doner. Shankle tenderloin pork belly salami hamburger boudin.</p>
</div>


<div id="contact-us"class="section contact"> 

  <h2 class="col1">Use the beautiful form below to contact us</h2>

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
      <input type='url' name='website' placeholder='http://' />
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

<?php } else { /* check required fields are filled */
  $name=$_REQUEST['name'];
  $tel=$_REQUEST['tel'];
  $email=$_REQUEST['email'];
  $url=$_REQUEST['url'];
  $message=$_REQUEST['message'];
  if (($name=="")||($email=="")||($message=="")) { /* show form error page */
    echo "<div class='section'><br><h2>The 'Name', 'Email' and 'Message' fields are required</h2><p style='text-align:center;'>Please <a style='border-bottom:2px solid black;' href=\"\">click here</a> and fill out the form again.</p><br></div>";
  } else { /* show thank you */
    $from="From: $name<$email>\r\nReturn-path: $email";
    $subject="Modest Contact Form";
    $message="$message\n\n$name\n<$email>\n$tel\n\nSent via the Modest Contact Form";
    mail("hello@modestindustries.co", $subject, $message, $from);

    $site_title = "Thank You!";

    $intro_title = "Thank You!";
    $intro_description = "Your message has been sent. We'll get back to you as soon as we possibly can.";

    $intro_img_url = "postbox.jpg";
    $intro_img_alt = "IT'S A POSTBOX!";

    include 'header.php';
    }
  }  

include 'footer.php'; ?>