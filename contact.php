<?php
$page_id = "contact";
$site_title = "Contact";

$meta_description = "Looking to chat with Modest Industries? This is the page you're looking for.";
$meta_keywords = "modest industries, modest, contact modest industries, contact form, digital agency, design, web development, development, banners, social campaigns, idea generation, get in touch";

$custom_css = "";
$custom_scripts = "";
$action = "";

if (isset($_REQUEST['action'])) {
  $action=$_REQUEST['action']; 
}

if ($action=="") { /* conditional to check if form has been submitted */

  $intro_title = "Contact Modest";
  $intro_description = "Let's talk. It's good for the soul.";

  $intro_img_url = "header-cups.png";
  $intro_img_alt = "Get in touch with Modest Industries";

  include 'header.php'; ?>

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
      <input type='text' name='url' placeholder='http://' />
    </div>

    <div>
      <label for='message'>Message</label>
      <textarea name='message' placeholder='Go ahead...' required ></textarea>
    </div>
    <div>
      <label for='rb'>BTW... Are you a robot?</label>
      <textarea name='rb' placeholder='Type Yes or No' required ></textarea>
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
    $robot=$_REQUEST['rb'];

    if (strtolower(trim($robot)) === "no") {

      if (($name=="")||($email=="")||($message=="")) { /* show form error page */
      $site_title = "Uh Oh!";
      $intro_title = "Uh oh!";
      $intro_description = "<em>'Name'</em>, <em>'Email'</em> and <em>'Message'</em> are required fields. Please <a style='border-bottom:2px solid black;' href='javascript:window.location.href=window.location.href'>click here</a> and fill out the form again.";

      $intro_img_url = "header-cups-failed.png";
      $intro_img_alt = "UH OH!";

      include 'header.php';
      include 'footer.php';

    } else { /* show thank you */
      $from="From: $name<$email>\r\nReturn-path: $email";
      $subject="Modest Contact Form";
      $message="$message\n\n$name\n<$email>\n$tel\n$url\n\nSent via the Modest Contact Form";
      mail("hello@modestindustries.co", $subject, $message, $from);

      $site_title = "Thank You!";

      $intro_title = "Thank You!";
      $intro_description = "Your message has been sent. We'll get back to you as soon as we possibly can. While you wait, why not check out some of the things we've made <a style='border-bottom:2px solid black;' href='products' title='Products by Modest'>here</a> or follow <a style='border-bottom:2px solid black;' target='_blank' href='https://instagram.com/thisismodest' title='Follow Modest Industries on Instagram'>us on Instagram here</a>";

      $intro_img_url = "header-cups-success.png";
      $intro_img_alt = "Thank you for your message"; 

      include 'header.php';
      include 'footer.php';
      }
    } else {
      $site_title = "Uh Oh!";
      $intro_title = "Uh oh!";
      $intro_description = "Are you really a robot? Please <a style='border-bottom:2px solid black;' href='javascript:window.location.href=window.location.href'>click here</a> and fill out the form again and type 'No' in the robot field.";

      $intro_img_url = "header-cups-failed.png";
      $intro_img_alt = "UH OH!";

      include 'header.php';
      include 'footer.php';
    }
  } ?>