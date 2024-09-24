import { Metadata } from "next";
import Header from "@/app/ui/header/header";

export const metadata: Metadata = {
  title: "Social Media Marketing | Modest Industries",
  description: "Take your business to the next level by putting your brand directly in front of your target audience with Modest's social media marketing",
  keywords: "modest industries, social media, social, marketing, social media marketing, modest, digital agency, social design, design, web development",
  openGraph: {
    images: ['/img/header-cups.png']
  }
};

export default function Page() {
  const mailTo = "mailto:hello@modestindustries.co?subject=Enquiry from Modest Industries";

  return (
    <>
      <Header
        title="Social Media Marketing"
        description="Putting your brand in front of the right people."
        imageUrl="/img/header-cups.png"
        imageAlt="String cup phones by Modest Industries"
      />

      <section className="section text">
        <h2 className="col1">Looking for more customers?</h2>
        <p className="col2">We craft targeted strategies designed to drive engagement, generate quality leads, and enhance your brand’s visibility.</p>
        <p className="col2">From content creation and ad management to qualifying leads, we tailor every campaign to align with your unique goals.</p>
      </section>

      <section className="section product">
        <h2>Discovery. Strategy. Execution. Optimisation. Reporting.</h2>

        <p className="col1">We start with a free consultation to learn about your business, goals, and target audience. Based on your needs, we create a tailored social media plan, including content ideas and ad strategies.</p>
        <p className="col1">Our team manages everything from content creation to posting, and running paid campaigns. We monitor performance, adjust strategies, and ensure you're getting the best results.</p>
        <p className="col1">You’ll receive regular reports showing the growth in engagement, leads, and conversions.</p>

        <a className="cta-btn" style={{ marginTop: "3rem" }} href={mailTo}>Book your free consultation</a>
      </section >
    </>
  )
}