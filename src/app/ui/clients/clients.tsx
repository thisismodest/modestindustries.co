export default function Clients() {

  const mailTo = "mailto:hello@modestindustries.co?subject=Enquiry from Modest Industries";

  return (
    <section id="clients">
      <div className="section clients">
        <h2 className="col1">We've delivered for</h2>
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
        <a className="cta-btn" style={{ marginTop: "3rem" }} href={mailTo}>Let's talk</a>
      </div>
    </section>
  )
}