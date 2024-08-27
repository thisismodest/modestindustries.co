import { Metadata } from "next";
import Header from "@/app/ui/header/header";

export const metadata: Metadata = {
  title: "Products | Modest Industries",
  description: "Here at Modest Industries when one of us comes up with an idea that either makes us smile or is just down right useful, we'll build it. Come and take a peek.",
  keywords: "modest industries, modest, digital agency, social design, design, web development, open source, startups, products, smile, useful product, entertaining product, concept builds",
  openGraph: {
    images: ['/img/header-camera.png']
  }
};

export default function Page() {
  return (
    <>
      <Header
        title="Products"
        description="In-house ideas, design, and development."
        imageUrl="/img/header-camera.png"
        imageAlt="Products by Modest Industries"
      />

      <section className="section text">
        <h2 className="col1">Smile, we've made stuff</h2>
        <p className="col2">Every now and then we'll come up with an idea that we end up building, either because it makes us smile or we find it useful.</p>
        <p className="col2">Some of these are prototypes, others are polished. Take a peek and have a play with what we've made. Like something? Get in touch.</p>
      </section>

      <section className="section product">
        <div className="product-box col2">
          <a href="https://deadwallet.com" title="Dead Wallet" target="_blank">
            <img src="/img/png/dead-wallet-by-modest-industries.png" className="product-image" alt="Dead Wallet Logo" />
          </a>
          <h2>DeadWallet.com</h2>
          <p>Stuff you didn't know you wanted, beautifully curated. Dead Wallet scours the web for the kind of stuff that'll kill your wallet.</p>
          <a href="https://deadwallet.com" title="Dead Wallet" target="_blank" className="main-button">Shop Dead Wallet</a>
        </div>

        <div className="product-box col2">
          <a href="https://browsersnippets.com" title="Browser Snippets" target="_blank">
            <img src="/img/png/browser-snippets-by-modest-industries.png" className="product-image" alt="Browser Snippets Logo" />
          </a>
          <h2>Browser Snippets</h2>
          <p>Write, share, and execute JavaScript snippets on any site with Browser Snippets and its companion Chrome Extension.</p>
          <a href="https://browsersnippets.com" title="Browser Snippets" target="_blank" className="main-button">Visit Browser Snippets</a>
        </div>

        <div className="product-box col2">
          <a href="https://plottd.com" title="Plottd" target="_blank">
            <img src="/img/png/plottd-by-modest-industries.png" className="product-image" alt="Plottd Logo" />
          </a>
          <h2>Plottd.com</h2>
          <p>Plottd allows you to easily add interactive hotspots to your images and embed them on your website or blog.</p>
          <a href="https://plottd.com" title="Plottd" target="_blank" className="main-button">Play with Plottd</a>
        </div>

      </section>
    </>
  )
}