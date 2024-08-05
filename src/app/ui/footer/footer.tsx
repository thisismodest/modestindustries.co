export default function Footer() {
  return (
    <footer className="footer">

      <div className="social-box">
        <a href="https://instagram.com/thisismodest" title="Follow Modest Industries on Instagram" target="_blank"><img className="social-icon" src="/img/instagram.png" alt="Instagram logo" /></a>
        <a href="https://vimeo.com/thisismodest" title="Follow Modest Industries on Vimeo" target="_blank"><img className="social-icon" src="/img/vimeo.png" alt="Vimeo logo" /></a >
        <a href="https://facebook.com/thisismodest" title="Like Modest Industries on Facebook" target="_blank"><img className="social-icon" src="/img/facebook.png" alt="Facebook logo" /></a >
      </div >

      <div className="to-top">
        <a className="scroll" data-speed="400" data-easing="easeOutQuad" data-url="false" href="#navigation"><img src="/img/core/up-arrow.png" alt="Up arrow" /></a>
      </div>

      <div className="footer-logo">
        <a href="/">
          <img src="/img/core/modest-industries-banner-logo.png" alt="Modest Industries banner logo" />
        </a>
      </div>

      <p className="footer-copyright">&copy; 2014-2024 MODEST INDUSTRIES LTD • Company No. 09229917 • Registered in England &amp; Wales at The Knoll Business Centre, Unit W8A, 325-327 Old Shoreham Road, Hove, BN3 7GS</p>
    </footer >
  )
}