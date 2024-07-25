import { Metadata } from "next";
import Header from "@/app/ui/header/header";

export const metadata: Metadata = {
  title: "Clients | Modest Industries",
  description: "We're very selective about who we do work with, and because of that we've been lucky enough to work with brilliant companies and individuals.",
  keywords: "modest industries, modest, portfolio, clients, friends of Modest, business, clientele, companies, work, businesses",
  openGraph: {
    images: ['/img/header-blueprints.png']
  }
};

export default function Page() {
  return (
    <>
      <Header
        title="Our Clients"
        description="Making things together."
        imageUrl="/img/header-blueprints.png"
        imageAlt="Modest blueprints"
      />

      <div className="section clients">
        <h2 className="col1">Who we've worked with</h2>
        <ul className="client-logos">
          <li>
            <a href="https://d2e.com/" target="_blank">
              <img src="/img/client/logo/d2e_logo.png" alt="D2E" />
            </a>
          </li>
          <li>
            <a href="https://www.flashtalking.com/uk/" target="_blank">
              <img src="/img/client/logo/flashtalking_logo.png" alt="Flashtalking" />
            </a>
          </li>
          <li>
            <a href="https://www.hrc.ac.uk/" target="_blank">
              <img src="/img/client/logo/hertford_regional_college_hrc_logo.png" alt="Hertford Regional College" />
            </a>
          </li>
          <li>
            <a href="https://visionpath.co.uk/" target="_blank">
              <img src="/img/client/logo/visionpath_logo.png" alt="Visionpath Education" />
            </a>
          </li>
          <li>
            <a href="https://wiltonclassicsupercar.co.uk/" target="_blank">
              <img src="/img/client/logo/wilton_classic_supercar_logo.png" alt="Wilton Classis & Supercar" />
            </a>
          </li>
          <li>
            <a href="https://heroevents.eu/" target="_blank">
              <img src="/img/client/logo/hero_logo.png" alt="HERO" />
            </a>
          </li>
          <li>
            <a href="https://infinite.co.uk/" target="_blank">
              <img src="/img/client/logo/infinite_logo.png" alt="Infinite Domains" />
            </a>
          </li>
          <li>
            <a href="https://jackwills.com/" target="_blank">
              <img src="/img/client/logo/jack_wills_logo.png" alt="Jack Wills" />
            </a>
          </li>
          <li>
            <a href="https://www.brane.co.uk/" target="_blank">
              <img src="/img/client/logo/brane_logo.png" alt="Brane" />
            </a>
          </li>
          <li>
            <a href="https://www.truffletalent.com/" target="_blank">
              <img src="/img/client/logo/truffle_talent_logo.png" alt="Truffle Talent Recruitment" />
            </a>
          </li>
          <li>
            <img src="/img/client/logo/your_town_logo.png" alt="YOUR TOWN" />
          </li>
          <li>
            <a href="https://www.egosoleil.com/" target="_blank">
              <img src="/img/client/logo/ego_soleil_logo.png" alt="Ego Soleil" />
            </a>
          </li>
          <li>
            <a href="https://www.theocooks.com/" target="_blank">
              <img src="/img/client/logo/theo_cooks_logo.png" alt="THEO COOKS" />
            </a>
          </li>
          <li>
            <img src="/img/client/logo/quality_franking_supplies_logo.png" alt="Quality Franking Supplies" />
          </li>
          <li>
            <a href="https://interweb360.co.uk/" target="_blank">
              <img src="/img/client/logo/interweb360_logo.png" alt="INTERWEB360" />
            </a>
          </li>
        </ul>
        <div className="clearfix"></div>
        <a className="cta-btn" href="/contact/">Become a client</a>
      </div>
    </>
  )
}