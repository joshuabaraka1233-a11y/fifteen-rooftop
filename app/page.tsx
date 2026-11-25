"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight, Instagram, MapPin, Menu as MenuIcon, Phone, X } from "lucide-react";

const phone = "254111151515";
const wa = `https://wa.me/${phone}?text=${encodeURIComponent("Hello Fifteen Rooftop, I'd like to enquire about a reservation.")}`;
const photos = {
  hero: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2200&q=90",
  dining: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
  cocktail: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=85",
  food: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
  night: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=85",
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const links = ["Home", "The Experience", "Menu", "Moments", "Find Us"];
  const go = (label: string) => {
    setActive(label);
    setOpen(false);
    document.getElementById(label.toLowerCase().replaceAll(" ", "-"))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <div className="topline"><span>NAIROBI · KENYA</span><span>15TH FLOOR · THE CURVE BY THE PARK</span><a href={wa}>RESERVATIONS <ArrowUpRight size={12}/></a></div>
      <header className="header">
        <a className="brand" href="#home" aria-label="Fifteen Rooftop home"><span className="brand-mark">15</span><span className="brand-name">FIFTEEN<span>ROOFTOP</span></span></a>
        <nav className="desktop-nav">{links.map((l) => <button key={l} className={active === l ? "nav-active" : ""} onClick={() => go(l)}>{l}</button>)}</nav>
        <a className="header-cta" href={wa}>BOOK A TABLE <ArrowUpRight size={14}/></a>
        <button className="mobile-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X/> : <MenuIcon/>}</button>
      </header>
      {open && <div className="mobile-menu">{links.map(l => <button key={l} onClick={() => go(l)}>{l}</button>)}<a href={wa}>BOOK A TABLE ↗</a></div>}

      <section className="hero" id="home" style={{ backgroundImage: `linear-gradient(90deg,rgba(9,13,12,.78),rgba(9,13,12,.2) 65%,rgba(9,13,12,.12)),url(${photos.hero})` }}>
        <div className="hero-content"><p className="eyebrow"><span/> ELEVATE YOUR EVENING</p><h1>Above the<br/><em>ordinary.</em></h1><p className="hero-copy">A different perspective on Nairobi. Good food, considered drinks and a view worth slowing down for.</p><div className="hero-actions"><a className="button button-gold" href={wa}>RESERVE YOUR MOMENT <ArrowUpRight size={16}/></a><a className="text-link" href="#the-experience">DISCOVER FIFTEEN <ArrowDown size={14}/></a></div></div>
        <div className="hero-bottom"><span>01 / 04</span><span className="hero-line"/><span>THE CITY, FROM A DIFFERENT HEIGHT</span></div>
        <div className="vertical-note">15TH FLOOR · NAIROBI</div>
      </section>

      <section className="intro section-pad" id="the-experience">
        <div className="intro-kicker">THE FIFTEEN EXPERIENCE <span>— 01</span></div>
        <div className="intro-main"><h2>Where the city<br/>meets the <em>sky.</em></h2><div className="intro-text"><p>Set high above the everyday, Fifteen Rooftop brings together atmosphere, flavour and a view that makes you stay a little longer.</p><p>Come for the golden hour. Stay for the conversations, the plates and the city lights.</p><a className="under-link" href={wa}>MAKE AN ENQUIRY <ArrowUpRight size={14}/></a></div></div>
        <div className="intro-image-wrap"><img src={photos.dining} alt="Warm, atmospheric restaurant dining space"/><div className="image-caption"><span>THE ART OF TAKING IT SLOW</span><span>NAIROBI, KENYA</span></div></div>
      </section>

      <section className="menu-section section-pad" id="menu">
        <div className="section-heading"><div><p className="eyebrow dark-eyebrow">A TASTE OF FIFTEEN <span>— 02</span></p><h2>Made for the<br/><em>moment.</em></h2></div><p>Thoughtful plates. Beautifully made drinks.<br/>A menu best enjoyed without rushing.</p></div>
        <div className="menu-grid">
          <article className="menu-card"><div className="menu-photo"><img src={photos.food} alt="A beautifully plated meal"/></div><div className="menu-meta"><span>01 / FOOD</span><span>EXPLORE THE MENU ↗</span></div><h3>Something<br/><em>delicious.</em></h3><p>From relaxed bites to a meal worth dressing up for. Ask our team for the current menu.</p></article>
          <article className="menu-card menu-card-offset"><div className="menu-photo"><img src={photos.cocktail} alt="Craft cocktail in a glass"/></div><div className="menu-meta"><span>02 / DRINKS</span><span>THE BAR ↗</span></div><h3>Raise a<br/><em>glass.</em></h3><p>Settle in with a favourite pour or let the evening lead you to something new.</p></article>
        </div>
        <div className="menu-note"><span>THE MENU CHANGES. THE MOMENT IS YOURS.</span><a href={wa}>ASK ABOUT TODAY'S MENU <ArrowUpRight size={14}/></a></div>
      </section>

      <section className="quote-band"><div className="quote-inner"><span className="quote-mark">“</span><p>Some views are better<br/>when <em>shared.</em></p><span className="quote-caption">GOOD COMPANY LOOKS GOOD FROM UP HERE</span></div></section>

      <section className="moments section-pad" id="moments"><div className="section-heading moments-heading"><div><p className="eyebrow dark-eyebrow">THE VIEW FROM HERE <span>— 03</span></p><h2>Stay for the<br/><em>moments.</em></h2></div><p>Sunset conversations, dinner that turns into a night out, and the Nairobi skyline doing what it does best.</p></div><div className="gallery"><div className="gallery-large"><img src={photos.night} alt="Atmospheric rooftop restaurant at night"/><span>AFTER DARK</span></div><div className="gallery-small"><img src={photos.cocktail} alt="A drink ready for the evening"/><span>THE FIRST TOAST</span></div></div></section>

      <section className="visit-section" id="find-us"><div className="visit-image" style={{backgroundImage:`linear-gradient(0deg,rgba(8,13,12,.58),rgba(8,13,12,.04)),url(${photos.hero})`}}><span>FIFTEEN ROOFTOP · NAIROBI</span></div><div className="visit-content"><p className="eyebrow">COME FIND YOUR VIEW <span>— 04</span></p><h2>Your table<br/>is <em>waiting.</em></h2><p className="visit-copy">Find us on the 15th floor at The Curve By The Park, off Mombasa Road. Reach out to plan your visit.</p><div className="visit-detail"><MapPin size={17}/><div><b>FIFTEEN ROOFTOP</b><span>15th Floor, The Curve By The Park<br/>Off Mombasa Road, Nairobi</span></div></div><div className="visit-detail"><Phone size={17}/><div><b>CALL OR WHATSAPP</b><a href={`tel:+${phone}`}>0111 151515</a></div></div><a className="button button-gold visit-button" href={wa}>ENQUIRE ABOUT A TABLE <ArrowUpRight size={16}/></a><p className="hours-note">HOURS AND AVAILABILITY MAY VARY. PLEASE CONFIRM WHEN BOOKING.</p></div></section>

      <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">15</span><span className="brand-name">FIFTEEN<span>ROOFTOP</span></span></a><span className="footer-tag">ABOVE THE ORDINARY.</span><div className="footer-links"><a href={wa}>RESERVATIONS</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={15}/> INSTAGRAM</a><a href="https://maps.google.com/?q=The+Curve+By+The+Park+Nairobi" target="_blank" rel="noreferrer">DIRECTIONS <ArrowUpRight size={13}/></a></div><div className="footer-bottom"><span>© 2026 FIFTEEN ROOFTOP · CONCEPT WEBSITE</span><span>DESIGNED TO ELEVATE</span></div></footer>
    </main>
  );
}
