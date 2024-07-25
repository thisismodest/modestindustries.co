import { Metadata } from "next";
import Header from "@/app/ui/header/header";

export const metadata: Metadata = {
  title: "People | Modest Industries",
  description: "The people here at Modest are the essence of what we do. Each are equipped with their own specialty and healthy curiosity to learn.",
  keywords: "modest industries, modest, meet the team, employees, staff, creative team, creative developers, creative technologists, modest people, social campaigns, idea generation, concepts",
  openGraph: {
    images: ['/img/header-bulb.png']
  }
};

export default function Page() {
  return (
    <>
      <Header
        title="Meet the Team"
        description="Friendly faces with bright ideas."
        imageUrl="/img/header-bulb.png"
        imageAlt="People by Modest Industries"
      />

      <section className="section text">
        <h2 className="col1">The Power of People</h2>
        <p className="col2">There are a number of factors we take into consideration before working with someone. Talent, personality and initiative are a few key traits we like to look for.</p>
        <p className="col2">Introducing the people turning the cogs here at Modest. They're the essence of what we do, each equipped with their own specialty and healthy curiosity to learn.</p>
      </section>

      <section className="section product people">
        <div className="product-box col2">
          <img src="/img/png/marcus.png" className="product-image" alt="Marcus" />
          <h2>Marcus</h2>
          <p>Too many people, too many processes and too many unnecessary meetings. It's a common story of creative talent and passion being diluted by big advertising agencies. The traditional model fails people for profit. Marcus founded Modest Industries to get back to basics and grow a digital agency focused around people.</p>
          <br /><br />
          <a href="https://twitter.com/marcusmichaels" title="Follow Marcus on Twitter" className="multi-button btn2">Twitter</a>
          <a href="https://marcusmichaels.com" title="Marcus' Website" className="multi-button btn2">Website</a>

        </div>

        <div className="product-box col2">
          <img src="/img/png/steve.png" className="product-image" alt="Steve" />
          <h2>Steve</h2>
          <p>Steve is the guy who knows what needs to be known about back-end technologies and databases. Does that sound boring? Most likely, however, having a solid back-end and a well designed database means quality data and fast speeds. If all the websites that used databases didn't exist... well, that <em>would</em> be boring.</p>
          <br /><br />
          <a href="https://twitter.com/BscSteveWolfe" title="Follow Steve on Twitter" className="multi-button btn2">Twitter</a>
          <a href="https://cv.interweb360.co.uk/" title="Steve's vast experience" className="multi-button btn2">Website</a>
        </div>

        <div className="product-box col2">
          <img src="/img/png/solly.png" className="product-image" alt="Solly" />
          <h2>Solly</h2>
          <p>Behind the magical charm, chiselled muscles and ravishing good looks (like really, really, ridiculously good looking) he's just like the rest of us. Except I forgot to mention that he's also really smart and knows his way around a computer. From build to code – this guy's front-end skill is incredible... but he won't tell you that. That's why we like him.</p>
          <br /><br />
          <a href="https://twitter.com/thesoltrain" title="Follow Sol on Twitter" className="multi-button btn2">Twitter</a>
          <a href="https://www.soltrain.co.uk/" title="View Sol's Website" className="multi-button btn2">Website</a>
        </div>

        <div className="product-box col2">
          <img src="/img/png/charlotte.png" className="product-image" alt="Charlotte" />
          <h2>Charlotte</h2>
          <p>Charlotte's background using real materials to make beautiful objects and the ability to translate it on screen gives her the extra depth and versatility we love to see. Behind her beaming smile is a meticulous hands-on designer comfortable designing for screens and in real life, with skill ranging from hand-drawn typography to engaging email design.</p>
          <br /><br />
          <a href="https://twitter.com/beingcharlottex" title="Follow Charlotte on Twitter" className="multi-button btn2">Twitter</a>
          <a href="https://www.beingcharlotte.com/" title="Read Charlotte's Blog" className="multi-button btn2">Blog</a>
        </div>
      </section>
    </>
  )
}