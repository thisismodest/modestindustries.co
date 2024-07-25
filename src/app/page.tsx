import { Metadata } from "next";
import Header from "./ui/header/header";

export default function Home() {
  return (
    <>
      <Header
        title="This is Modest"
        description="Hello. Welcome to Modest Industries."
        imageUrl="/img/header-pencil.png"
        imageAlt="Modest pencil"
      />
      <section className="section text">
        <h2 className="col1">It's nice to meet you</h2>
        <p className="col2">Modest Industries is a digital creative studio specialising in ideas, design and development. We build in-house products and offer our services to help growing companies.</p>
        <p className="col2">To maintain our quality standards we're very selective with the projects we align ourselves with. If you like what we do and think we'd be a good fit, get in touch for a chat.</p>
      </section>
    </>
  );
}
