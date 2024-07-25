import { Metadata } from "next";
import Header from "@/app/ui/header/header";

export const metadata: Metadata = {
  title: "Work with Modest | Modest Industries",
  description: "Modest Industries is looking for talented people like you to join our team. Come and see how you can help make the world a better place.",
  keywords: "modest industries, modest, digital agency, vacancies, hiring, modest staff, web development, html5, css3, javascript, designer, developer, staff, employee, worker, idea generation, concepts",
  openGraph: {
    images: ['/img/header-coffee.png']
  }
};

export default function Page() {
  return (
    <>
      <Header
        title="Vacancies"
        description="Don't be busy, be productive."
        imageUrl="/img/header-coffee.png"
        imageAlt="Work with Modest"
      />

      <section className="section text">
        <h2 className="col1">We're hiring!</h2>
        <p className="col2">Modest Industries is young, but we're growing quickly, which is why we're looking for talented thinkers, designers and developers.</p>
        <p className="col2">Interested? We'd love to see your work and learn more about you. Take a look at the vacancies below and get in touch and tell us about yourself.</p>
      </section>

      <section className="section product hire">
        <div className="product-box col2">
          <img src="/img/png/cutting-board.png" className="product-image" alt="Cutting board" />
          <h2>Designer</h2>
          <p>Know your kerning from your leading? Are you in love with layouts? Do you like ubiquitous user experience? I hope you're enjoying these alliterations because there's more where that came from.</p>
          <a href="contact" className="main-button">Apply for this</a>
        </div>

        <div className="product-box col2">
          <img src="/img/png/devices-2.png" className="product-image" alt="Devices" />
          <h2>Front-End Developer</h2>
          <p>Oh no! It looks like the button below doesn't work. If only there was some way it could be fixed so you could apply for this position... Your role will involve you being proficient in HTML5, CSS3 and JavaScript.</p>
          <a href="#fixerupper" id="fixerupper" className="main-button broken">Fix me</a>
          <span className="there-is-a-clue-in-here" dangerouslySetInnerHTML={{ __html: "<!-- FOLLOW THE CLUES: When is a button not a button? When it's broken with an unnecessary token... -->" }}></span>
        </div>
      </section >
    </>
  )
}