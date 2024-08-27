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
            <img src="/img/client/logo/dext_logo.png" alt="DEXT logo" />
          </li>
          <li>
            <img src="/img/client/logo/asos_logo.png" alt="ASOS logo" />
          </li>
          <li>
            <img src="/img/client/logo/marks_and_spencer_logo.png" alt="Marks & Spencer logo" />
          </li>
          <li>
            <img src="/img/client/logo/sony_entertainment_network_logo.png" alt="Sony Entertainment Network logo" />
          </li>
          <li>
            <img src="/img/client/logo/jack_wills_logo.png" alt="Jack Wills" />
          </li>
          <li>
            <img src="/img/client/logo/d2e_logo.png" alt="D2E" />
          </li>
          <li>
            <img src="/img/client/logo/flashtalking_logo.png" alt="Flashtalking" />
          </li>
          <li>
            <img src="/img/client/logo/b_and_q_logo.png" alt="B&Q logo" />
          </li>
          <li>
            <img src="/img/client/logo/visionpath_logo.png" alt="Visionpath Education" />
          </li>
          <li>
            <img src="/img/client/logo/itv_logo.png" alt="ITV logo" />
          </li>
          <li>
            <img src="/img/client/logo/hero_logo.png" alt="HERO Rally Events" />
          </li>
          <li>
            <img src="/img/client/logo/quality_franking_supplies_logo.png" alt="Quality Franking Supplies" />
          </li>
          <li>
            <img src="/img/client/logo/hertford_regional_college_hrc_logo.png" alt="Hertford Regional College" />
          </li>
          <li>
            <img src="/img/client/logo/ware_in_bloom_logo.png" alt="Ware in Bloom logo" />
          </li>
          <li>
            <img src="/img/client/logo/truffle_talent_logo.png" alt="Truffle Talent Recruitment" />
          </li>
        </ul>
        <div className="clearfix"></div>
        <a className="cta-btn" href="/contact/">Become a client</a>
      </div>
    </>
  )
}