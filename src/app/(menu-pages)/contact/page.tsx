import { Metadata } from "next";
import Header from "@/app/ui/header/header";

export const metadata: Metadata = {
  title: "Contact | Modest Industries",
  description: "Looking to chat with Modest Industries? This is the page you're looking for.",
  keywords: "modest industries, modest, contact modest industries, contact form, digital agency, design, web development, development, banners, social campaigns, idea generation, get in touch",
  openGraph: {
    images: ['/img/header-cups.png']
  }
};

export default function Page() {
  const mailTo = "mailto:hello@modestindustries.co?subject=Enquiry from Modest Industries";
  return (
    <>
      <Header
        title="Contact Modest"
        description="Let's talk. It's good for the soul."
        imageUrl="/img/header-cups.png"
        imageAlt="Get in touch with Modest Industries"
      />


      <section className="section">
        <a className="cta-btn" href={mailTo}>Click here to email us</a>
        <p style={{ textAlign: "center" }}>Alternatively, connect with us on one of the socials below 👇</p>
      </section>


    </>
  )
}