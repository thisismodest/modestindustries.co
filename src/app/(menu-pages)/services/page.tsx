import { Metadata } from "next";
import Header from "@/app/ui/header/header";

export const metadata: Metadata = {
  title: "Services | Modest Industries",
  description: "Modest Industries provides individual solutions for our clients. Get in touch to find out exactly what we can do for you.",
  keywords: "modest industries, modest, digital agency, social media, design, web development, html5 banners, services, startup package, content creation, development, banners, idea generation, concepts",
  openGraph: {
    images: ['/img/header-long-ruler.png']
  }
};

export default function Page() {
  return (
    <>
      <Header
        title="Services"
        description="Making things to make you smile."
        imageUrl="/img/header-long-ruler.png"
        imageAlt="Services from Modest Industries"
      />

      <section className="section text">
        <h2 className="col1">Some things to get you going</h2>
        <p className="col2">Below are a selection of our most popular services to help you deliver the right message to your customers.</p>
        <p className="col2">We provide individual solutions for our clients. Get in touch to find out exactly what we can do for you.</p>
      </section>

      <section className="section service">

        <h2 className="col1">The Startup Package</h2>
        <div className="alt-box">
          <img src="/img/gif/lightbulb.gif" alt="Lightbulb" />
          <p>This package is the whole shebang. You have the name and idea, now let's bring it to life. We'll work with you to develop your identity, voice and online presence putting you centre stage to your audience. For those offline interactions we'll kit you out with business cards, stationery and any other materials you need.</p>
        </div>
        <a className="cta-btn" href="/contact/">Let's Start</a>

        <h2 className="col1">Web Development</h2>
        <div className="alt-box">
          <img src="/img/png/wireframe-notebook.png" className="col2 col-image" alt="Notebook" />
          <p>Whether you're looking to grow your audience by giving them something bespoke to interactive with, or give your existing customers a better experience when they visit you online – we'd love to work with you to create something engaging. It's a big world wide web out there. Use the button below and get in touch.</p>
        </div>
        <a className="cta-btn" href="/contact/">Let's Build Something</a>

        <h2 className="col1">Social Management</h2>
        <div className="alt-box">
          <img src="/img/png/megaphone.png" alt="Megaphone" />
          <p>Every company needs a voice and using social media is a great way to talk with your customers. We help plan your strategy and produce the visuals with well written copy to accompany your content calender. We'll figure out the best channels you need to be on and what you need to be saying on each one.</p>
        </div>
        <a className="cta-btn" href="/contact/">Let's Socialise</a>

        <h2 className="col1">Content Creation</h2>
        <div className="alt-box">
          <img src="/img/png/camera.png" alt="Camera" />
          <p>The key to good content is making something that people want to spend their time on. Working with video, photography, design and code we'll produce content for you. These can range from introductory videos for your website, photo documentation of a new product launch, all the way to social media posts and animated GIFs.</p>
        </div>
        <a className="cta-btn" href="/contact/">Let's Make Content</a>

        <h2 className="col1">Branding &amp; Design</h2>
        <div className="alt-box">
          <img src="/img/png/branding.png" alt="Branded items" />
          <p>Working with your existing brand guidelines or starting form scratch, we can help with design for your project. If you're in need of an extra pair of hands or if you're looking for something bigger such as a company identity or brand refresh. We love playing with pixels and would be thrilled to work with you.</p>
        </div>
        <a className="cta-btn" href="/contact/">Let's Design Stuff</a>

        <h2 className="col1">Retainers</h2>
        <div className="alt-box">
          <img src="/img/png/calendar.png" alt="Calendar" />
          <p>We're happy to introduce (in a very limited supply) customisable retainers. We offer design, web development, and content production resource. You pick how much of each resource you'll need and we'll supply a monthly retainer to keep your business going without the worry of overflow slowing you down.</p>
        </div>
        <a className="cta-btn" href="/contact/">Let's Grow Together</a>

      </section>
    </>
  )
}