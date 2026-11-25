"use client";

import { useEffect, useState } from "react";
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


function MenuGroup({title,items}:{title:string,items:string[][]}){return <section className="food-group"><h3>{title}</h3>{items.map(([name,description,price])=><article className="food-item" key={name}><div className="food-item-top"><h4>{name}</h4><b>KSh {price}</b></div><p>{description}</p></article>)}</section>}
function MenuLine({name,price}:{name:string,price:string}){return <div className="menu-line"><span>{name}</span><b>KSh {price}</b></div>}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const links = [
    { label: "Home", id: "home" },
    { label: "Our Story", id: "our-story" },
    { label: "Experience", id: "the-experience" },
    { label: "Food Menu", id: "full-menu" },
    { label: "Drinks", id: "drinks" },
    { label: "Moments", id: "moments" },
    { label: "Find Us", id: "find-us" },
    { label: "House Rules", id: "house-rules" },
  ];
  const go = (label: string, id: string) => {
    setActive(label);
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main>
      <div className="topline"><span>NAIROBI · KENYA</span><span>15TH FLOOR · THE CURVE BY THE PARK</span><a href={wa}>RESERVATIONS <ArrowUpRight size={12}/></a></div>
      <header className="header">
        <a className="brand" href="#home" aria-label="Fifteen Rooftop home"><span className="brand-mark">15</span><span className="brand-name">FIFTEEN<span>ROOFTOP</span></span></a>
        <nav className="desktop-nav">{links.map((l) => <button key={l.id} className={active === l.label ? "nav-active" : ""} onClick={() => go(l.label, l.id)}>{l.label}</button>)}</nav>
        <a className="header-cta" href={wa}>BOOK A TABLE <ArrowUpRight size={14}/></a>
        <button className="mobile-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X/> : <MenuIcon/>}</button>
      </header>
      {open && <div className="mobile-menu">{links.map(l => <button key={l.id} onClick={() => go(l.label, l.id)}>{l.label}</button>)}<a href={wa}>BOOK A TABLE ↗</a></div>}

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
        <div className="menu-note"><span>THE MENU CHANGES. THE MOMENT IS YOURS.</span><a href="#full-menu">VIEW FULL FOOD MENU <ArrowUpRight size={14}/></a></div>
      </section>

      <section className="quote-band"><div className="quote-inner"><span className="quote-mark">“</span><p>Some views are better<br/>when <em>shared.</em></p><span className="quote-caption">GOOD COMPANY LOOKS GOOD FROM UP HERE</span></div></section>

      <section className="moments section-pad" id="moments"><div className="section-heading moments-heading"><div><p className="eyebrow dark-eyebrow">THE VIEW FROM HERE <span>— 03</span></p><h2>Stay for the<br/><em>moments.</em></h2></div><p>Sunset conversations, dinner that turns into a night out, and the Nairobi skyline doing what it does best.</p></div><div className="gallery"><div className="gallery-large"><img src={photos.night} alt="Atmospheric rooftop restaurant at night"/><span>AFTER DARK</span></div><div className="gallery-small"><img src={photos.cocktail} alt="A drink ready for the evening"/><span>THE FIRST TOAST</span></div></div></section>

      <section className="visit-section" id="find-us"><div className="visit-image" style={{backgroundImage:`linear-gradient(0deg,rgba(8,13,12,.58),rgba(8,13,12,.04)),url(${photos.hero})`}}><span>FIFTEEN ROOFTOP · NAIROBI</span></div><div className="visit-content"><p className="eyebrow">COME FIND YOUR VIEW <span>— 04</span></p><h2>Your table<br/>is <em>waiting.</em></h2><p className="visit-copy">Find us on the 15th floor at The Curve By The Park, off Mombasa Road. Reach out to plan your visit.</p><div className="visit-detail"><MapPin size={17}/><div><b>FIFTEEN ROOFTOP</b><span>15th Floor, The Curve By The Park<br/>Off Mombasa Road, Nairobi</span></div></div><div className="visit-detail"><Phone size={17}/><div><b>CALL OR WHATSAPP</b><a href={`tel:+${phone}`}>0111 151515</a></div></div><a className="button button-gold visit-button" href={wa}>ENQUIRE ABOUT A TABLE <ArrowUpRight size={16}/></a><p className="hours-note">HOURS AND AVAILABILITY MAY VARY. PLEASE CONFIRM WHEN BOOKING.</p></div></section>


      <section className="story-section section-pad" id="our-story">
        <div className="intro-kicker">A NOTE FROM FIFTEEN <span>— OUR STORY</span></div>
        <div className="story-copy">
          <p className="eyebrow dark-eyebrow">WELCOME TO FIFTEEN</p>
          <h2>A new perspective<br/>on <em>Nairobi.</em></h2>
          <p>Dear Guests, welcome to FIFTEEN, Nairobi’s grand rooftop lounge. Overlooking the historic Nairobi National Park and the city skyline, FIFTEEN is an ode to our world travels, curated with you in mind. We bring together local ingredients and world-class flair for an experience that indulges all your senses.</p>
          <p>Sip in the city with hand-crafted cocktails inspired by Nairobi’s mixologists, and sample delectable bites from our seasonal kitchen as you take in the breathtaking views.</p>
          <p>Unwind, enjoy, celebrate and indulge at the top of the city.</p>
          <span className="story-signoff">The FIFTEEN Team</span>
        </div>
        <div className="story-pillars"><article><span>01</span><h3>Chef’s Table</h3><p>A gourmet fusion restaurant with fresh ingredients, curved-window views and a front-row seat to the open-concept kitchen.</p></article><article><span>02</span><h3>Generali Bar</h3><p>An intimate lounge above Chef’s Table, serving afternoon drinks and pre-dinner cocktails as the city lights come alive.</p></article><article><span>03</span><h3>Sunset Lounge</h3><p>An emerald-green bar, relaxed wine list, spirits and small plates, with an indoor lounge and a cosy cigar patio.</p></article></div>
      </section>

      <section className="full-menu section-pad" id="full-menu">
        <div className="full-menu-head"><p className="eyebrow dark-eyebrow">THE FIFTEEN KITCHEN <span>— FOOD MENU</span></p><h2>Good taste.<br/><em>Great company.</em></h2><p>Explore a selection of dishes from the FIFTEEN menu. Prices are in Kenya shillings (KSh).</p></div>
        <div className="food-menu-grid">
          <div className="food-menu-column">
            <MenuGroup title="Starters & Appetizers" items={[
              ["Asian BBQ Lollipops","Sweet yet tangy & spicy sauce.","1,500"],
              ["Feta & Coriander Samosa","Served with a sweet chilli sauce.","1,400"],
              ["Bacon & Camembert Samosa","With a sweet chilli sauce.","1,450"],
              ["Crispy Chicken Bites","Served with a tangy mustard dip.","1,400"],
              ["Pulled Pork Sliders","Slow-cooked pork, homemade bun, sweet mayo slaw and spicy BBQ sauce.","1,450"],
              ["Thyme Chicken Sliders","Thyme & herb patty, mixed lettuce, caramelised onions and sweet mayo.","1,450"],
              ["Chicken Croquettes","Chicken, cheese and thyme, lightly seasoned with mustard and garlic, coated in crunchy panko.","1,400"],
              ["Quesadillas","Chicken, beef or pork KSh 1,700; vegetarian KSh 1,300.","1,700"],
              ["Classic FIFTEEN Prawns","Panko-crusted king prawns with house-made tartar sauce and a fresh lemon wedge.","2,000"],
              ["Prawn Sambuca","King prawns, bacon and lemon sambuca reduction.","2,000"]
            ]}/>
            <MenuGroup title="Salads" items={[
              ["Almond Avocado Salad","Lettuce, avocado, orange segments, diced cucumber, smoked peppers, roasted almonds and a tangy herb vinaigrette.","1,300"],
              ["Strawberry Spinach Salad","Lettuce, succulent strawberries, juicy mangoes, salted cashew nuts and creamy camembert in a herb vinaigrette.","1,300"],
              ["Roasted Beetroot & Grilled Halloumi Salad","Lettuce, beetroot, halloumi, cannellini beans, peppery arugula and salted cashews.","1,300"],
              ["Make it a meal","Add chicken or beef.","500"]
            ]}/>
            <MenuGroup title="Pasta, Burgers & Favourites" items={[
              ["Lemon Thyme Pasta","Mixed mushrooms, baby spinach, cherry tomatoes, olives in a lemon-thyme cream sauce with Parmesan.","1,850"],
              ["Mushroom Lasagna","Button and shiitake mushroom filling, Parmesan gratin and herb cream sauce.","1,750"],
              ["Classic FIFTEEN Beef Burger & Fries","Bacon optional, cheese, onion strings, lettuce, gherkins, onion rings and slaw.","2,100"],
              ["Classic Fish n Chips","Panko-crusted fish fillet, vegetables and French fries with classic tartar sauce.","2,200"],
              ["Deep Fried Buttermilk Chicken","Spice-marinated chicken thighs, twice-cooked, creamy mashed potatoes, sautéed market vegetables and tangy mustard sauce.","2,200"],
              ["Chicken Confit","Creamed spinach with optional bacon, crispy sautéed potatoes and poached egg/avocado.","2,500"]
            ]}/>
          </div>
          <div className="food-menu-column">
            <MenuGroup title="From the Grill & Signature Mains" items={[
              ["Pan-Seared Tilapia Fillet (250g)","Golden-crust tilapia with garlic, mustard and dill butter, creamy mash, seasonal vegetables and tartar sauce.","2,650"],
              ["BBQ Pork Spare Ribs","Spicy BBQ sauce, sautéed vegetables and French fries.","2,750"],
              ["Czar The Marine Duck","Pan-seared duck breast, crispy garlic potatoes and garden vegetables with house-made tamarind jam.","2,800"],
              ["Pork Tenderloin","Baked and glazed with house-made sweet pineapple sauce, grilled market vegetables and French fries.","3,300"],
              ["Beef Tenderloin","Smoky eggplant, sour cream spinach and sautéed mushrooms.","3,300"],
              ["The General’s Sirloin Steak (300g)","Pan-seared sirloin steak, market vegetables and creamy mashed potato.","3,500"],
              ["Major Rib-Eye (300g)","Seared rib-eye steak with French fries, market vegetables and pan jus.","3,500"],
              ["Norwegian Salmon","Grilled and baked with butter, garlic and dill, served on creamy mash and seasonal vegetables.","4,000"],
              ["Knight Ops Chops (600g)","Grilled rack of lamb basted in garlic, parsley, mint and chilli flakes. Served with fries, mash or sautéed potatoes and vegetables.","6,000"],
              ["The Mighty Tomahawk Steak (950g)","Seared to desired doneness with French fries and roasted vegetables. A sharing plate for two to four meat lovers.","7,000"]
            ]}/>
            <MenuGroup title="Sides & Sauces" items={[
              ["Sides","French fries, mashed potatoes, plantain, creamed spinach, sautéed farm vegetables or garden salad.","500"],
              ["Sauces","Mushroom sauce or pepper sauce.","250"]
            ]}/>
            <MenuGroup title="Desserts" items={[
              ["Mousse Selection","Orange and chocolate, milk and white chocolate, or dark chocolate mousse.","1,500"],
              ["Ice Cream","Vanilla, chocolate, strawberry, chocolate chip mint, salted caramel or pistachio.","500 / scoop"]
            ]}/>
          </div>
        </div>
        <p className="menu-disclaimer">Please inform our team of any food allergies before making your order. Thank you.</p>
      </section>

      <section className="drinks-section section-pad" id="drinks">
        <div className="full-menu-head">
          <p className="eyebrow">THE GENERALI BAR <span>— DRINKS MENU</span></p>
          <h2>Raise a <em>glass.</em></h2>
          <p>Classic pours, refreshing favourites and cocktails for the moment.</p>
        </div>
        <div className="drinks-grid">
          <div className="drink-panel">
            <h3>Mocktails &amp; Refreshers</h3>
            {[
              ["Boomerang", "650"], ["Mint Lemonade", "650"],
              ["Spicy Carolina", "650"], ["Strawberry Mojito", "650"]
            ].map(([name, price]) => <MenuLine key={name} name={name} price={price} />)}
            <h3>Soft Drinks &amp; Water</h3>
            {[
              ["Soda", "300"], ["Red Bull", "500"],
              ["Still water", "400"], ["Sparkling water", "450"]
            ].map(([name, price]) => <MenuLine key={name} name={name} price={price} />)}
            <h3>Beer &amp; Cider</h3>
            {[
              ["Guinness 325ml", "500"], ["Tusker Lager", "500"],
              ["Tusker Lite", "500"], ["Tusker Malt", "500"],
              ["White Cap Crisp 300ml", "500"], ["White Cap Lager 500ml", "500"],
              ["Hunters Dry Cider", "500"], ["Savanna Angry Lemon Cider", "500"],
              ["Savanna Cider", "500"], ["Heineken Zero", "550"],
              ["Heineken 330ml", "550"], ["Corona 330ml", "550"]
            ].map(([name, price]) => <MenuLine key={name} name={name} price={price} />)}
          </div>
          <div className="drink-panel">
            <h3>Signature Cocktails</h3>
            {[
              ["Captain Morgan Dark / Blue Curaçao / Gin / Tequila / Vodka / Sprite", "1,500"],
              ["Magnun – Martini, apple juice, pomegranate juice and fresh strawberries", "1,200"],
              ["M-16 – Monkey Shoulder, Johnnie Walker Red Label, ginger syrup, lime and honey", "1,200"],
              ["Air Force 1 – Jack Daniel’s, triple sec and cranberry juice", "1,200"],
              ["Colonel Sour – Gin, triple sec, lime and grenadine syrup", "1,200"],
              ["Generali – Gin, blueberry, red chilli, pineapple and lime", "1,100"],
              ["Revolver – Captain Morgan Dark, Malibu, orange juice and pineapple juice", "1,100"],
              ["Colt – Tequila, agave syrup and lime juice", "1,100"]
            ].map(([name, price]) => <MenuLine key={name} name={name} price={price} />)}
            <h3>Shooters</h3>
            <MenuLine name="Lethal Lion" price="600" />
            <MenuLine name="B52" price="600" />
            <p className="drink-note">Classic mixed drinks are available on request and subject to ingredient availability. Please ask our team about non-alcoholic options.</p>
          </div>
        </div>
        <div className="drinks-note">Please enjoy responsibly. Guests must be 18 years or older to purchase or consume alcohol.</div>
      </section>

      <section className="house-rules section-pad" id="house-rules">
        <p className="eyebrow">A FEW THINGS TO KNOW <span>— HOUSE RULES</span></p><h2>Good times.<br/><em>Good company.</em></h2>
        <div className="rules-grid">{["Management reserves the right of admission.","Strictly over 25 years only.","No cash payments. Only M-Pesa and card payments are accepted.","No fighting or name dropping.","No leaning against any windows, window railings or lingering outside the elevators.","No illegal or controlled substances may be brought to or consumed on the premises.","No firearms are allowed onto the premises under any circumstances.","Smoking is allowed only within the allocated smoking zones.","Please treat our staff with respect. Any unnecessary aggression will be dealt with swiftly.","Exit the bar briskly and quietly. Please respect our neighbours and plan your transport before leaving.","Management is not responsible for theft or loss of personal property.","Guests may be charged for damage caused to property by deliberate, negligent or reckless acts.","Dress code: smart casual. No open shoes.","For any query or concern, please speak to the manager on duty."].map((rule,i)=><div className="rule-item" key={rule}><span>{String(i+1).padStart(2,"0")}</span><p>{rule}</p></div>)}</div>
      </section>

      <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">15</span><span className="brand-name">FIFTEEN<span>ROOFTOP</span></span></a><span className="footer-tag">ABOVE THE ORDINARY.</span><div className="footer-links"><a href={wa}>RESERVATIONS</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={15}/> INSTAGRAM</a><a href="https://maps.google.com/?q=The+Curve+By+The+Park+Nairobi" target="_blank" rel="noreferrer">DIRECTIONS <ArrowUpRight size={13}/></a></div><div className="footer-bottom"><span>© 2026 FIFTEEN ROOFTOP · CONCEPT WEBSITE</span><span>DESIGNED TO ELEVATE</span></div></footer>
    </main>
  );
}
