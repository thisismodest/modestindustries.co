'use client';

export default function Navigation() {

  return (
    <>
      <nav id="navigation">
        <div className="logo banner">
          <a href="/">
            <img src="/img/core/modest-industries-banner-logo.png" alt="Modest Industries Logo" />
          </a>
        </div>
        <div id="toggle-menu-button" className="menu-btn">MENU<img id="menu-close-x" src="/img/core/x.png" alt="Close Menu" /></div>

        <div id="menu">
          <ul id="header-menu-list">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/contact/">CONTACT</a>
            </li>
            <li>
              <a href="/services/">SERVICES</a>
            </li>
            <li>
              <a href="/clients/">CLIENTS</a>
            </li>
            <li>
              <a href="/products/">PRODUCTS</a>
            </li>
            <li>
              <a href="/studio/">STUDIO</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="hide-drop-menu">
        <div id="menu-drop">
          <ul id="header-menu-list">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/contact/">CONTACT</a>
            </li>
            <li>
              <a href="/services/">SERVICES</a>
            </li>
            <li>
              <a href="/clients/">CLIENTS</a>
            </li>
            <li>
              <a href="/products/">PRODUCTS</a>
            </li>
            <li>
              <a href="/studio/">STUDIO</a>
            </li>
          </ul>
        </div>
      </div>
    </>

  )
};