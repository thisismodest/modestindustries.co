import Header from "./ui/header/header";
import Clients from "./ui/clients/clients";

export default function Home() {
  return (
    <>
      <section>
        <Header
          title="This is Modest"
          description="Hello. Welcome to Modest Industries."
          imageUrl="/img/header-pencil-slim.png"
          imageAlt="Modest pencil"
        />
        <div className="section text">
          <h2 className="col1">It's nice to meet you</h2>
          <p className="col2">Modest Industries is a boutique digital studio that transforms ideas into expertly crafted solutions through design and development.</p>
          <p className="col2">Whether you're a rising startup or an established brand, we're here to work with you and bring your vision to life.</p>
        </div>
      </section>
      <Clients />
    </>
  );
}
