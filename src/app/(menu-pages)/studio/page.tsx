import { Metadata } from "next";
import Header from "@/app/ui/header/header";

export const metadata: Metadata = {
  title: "Studio | Modest Industries",
  description: "Welcome to the Modest studio, here we have the equipment to produce the things we need for your project.",
  keywords: "modest industries, studio, workshop, factory, studio equipment, modest, digital agency, design, cross platform testing, creative production, social assets, photography studio, photography",
  openGraph: {
    images: ['/img/header-spill.png']
  }
};

export default function Page() {
  return (
    <>
      <Header
        title="Studio"
        description="Here we make our mess."
        imageUrl="/img/header-spill.png"
        imageAlt="Studio by Modest Industries"
      />

      <section className="section text">
        <h2 className="col1">Studio / Workshop / Factory</h2>
        <p className="col2">Our studio has a well stocked range of facilities so we can do the very best for you. From our multi-device development test bench to our photography area.</p>
        <p className="col2">The benefit of having everything we need in one place means that we have instant access to familiar equipment so we can produce good quality work, quicker.</p>
      </section>

      <section className="section studio">
        <h2 className="col1">Photography Studio</h2>
        <div className="alt-box">
          <img src="/img/png/backdrop.png" alt="Photography backdrop" />
          <p>We love photography. Having the skills and equipment in our studio to take photos of products, people, animals and anything else we can fit through the door means we spend less time looking for stock photos and more time working on something original for your project.</p>
        </div>

        <h2 className="col1">Cross-Platform Development Testing</h2>
        <div className="alt-box">
          <img src="/img/png/devices.png" alt="Multiple devices" />
          <p>There is a vast catalogue of devices, screen-sizes, browsers, operating systems – the list goes on. We have a mix of laptops, tablets and mobile devices using the latest software so that we can run the tests needed to make sure what we build works where you need it to.</p>
        </div>

        <h2 className="col1">Visit us</h2>
        <div className="alt-box">
          <img src="/img/png/coffee.png" alt="Coffee cups" />
          <p>Our door is always open for you to come in, meet our team and see the studio. Pop by for a cheeky tour or drop in for a quick coffee, either way, we'd love to have you.</p>
        </div>
      </section>
    </>
  )
}