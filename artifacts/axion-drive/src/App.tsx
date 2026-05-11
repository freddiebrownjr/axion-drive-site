import React, { useMemo, useState } from "react";

/*
  AXION DRIVE GROUP WEBSITE
  Fixed for index.tsx / React preview.

  Why this fixes the error:
  - The previous version was full HTML starting with <!DOCTYPE html>.
  - This canvas is a React/TypeScript file, so it must export a React component.
  - This version uses JSX only and can run inside index.tsx.

  Easy edits:
  - Change business info in CONTACT.
  - Change homepage copy in COPY.
  - Change vehicle cards in VEHICLES.
  - Change colors in the CSS variables inside the <style> block.
*/

const CONTACT = {
  phone: "470.419.1986",
  email: "info@axiondrivegroup.com",
  location: "Marietta, Georgia",
};

const COPY = {
  eyebrow: "AXION DRIVE GROUP",
  heroTitle: "Luxury automotive retail, reimagined.",
  heroSubtitle:
    "A modern used-car dealership designed around transparency, technology, premium customer experience, and Apple-level simplicity.",
  primaryButton: "Browse Inventory",
  secondaryButton: "Get Pre-Approved",
};

const VEHICLES = [
  {
    year: "2021",
    make: "Mercedes-Benz",
    model: "E 350 Sedan",
    price: "$34,900",
    payment: "$589/mo est.",
    detail: "41,230 miles • Gasoline",
    tag: "Executive Pick",
    image:
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1400&q=80",
  },
  {
    year: "2022",
    make: "Tesla",
    model: "Model Y Long Range",
    price: "$38,500",
    payment: "$649/mo est.",
    detail: "29,810 miles • Electric",
    tag: "Tech Forward",
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1400&q=80",
  },
  {
    year: "2020",
    make: "BMW",
    model: "X5 xDrive40i",
    price: "$42,750",
    payment: "$719/mo est.",
    detail: "52,400 miles • Gasoline",
    tag: "Family Luxury",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=80",
  },
];

const EXPERIENCE_CARDS = [
  {
    title: "AI Concierge",
    text: "Smart recommendations, financing guidance, appointment scheduling, and inventory matching.",
  },
  {
    title: "Transparent Pricing",
    text: "Clear pricing designed to remove pressure, confusion, and traditional dealership friction.",
  },
  {
    title: "Digital Buying",
    text: "Financing, paperwork, trade-in steps, and scheduling built for a mobile-first buyer.",
  },
  {
    title: "VIP Delivery",
    text: "Premium reveal experiences, branded handoff moments, and white-glove follow-up.",
  },
];

const STEPS = [
  [
    "01",
    "Discover",
    "Browse curated inventory with cinematic photos and clear vehicle details.",
  ],
  [
    "02",
    "Match",
    "Use AI-assisted recommendations to find the right vehicle for your lifestyle.",
  ],
  ["03", "Drive", "Book a guided or self-paced test drive without pressure."],
  [
    "04",
    "Deliver",
    "Complete the deal digitally and enjoy a premium handoff experience.",
  ],
];

function runSelfTests() {
  const results = [];

  results.push({
    name: "Vehicle inventory exists",
    passed: VEHICLES.length >= 3,
  });

  results.push({
    name: "Every vehicle has required fields",
    passed: VEHICLES.every(
      (v) => v.year && v.make && v.model && v.price && v.payment && v.image,
    ),
  });

  results.push({
    name: "Contact information exists",
    passed: Boolean(CONTACT.phone && CONTACT.email && CONTACT.location),
  });

  results.push({
    name: "Hero copy exists",
    passed: Boolean(COPY.heroTitle && COPY.heroSubtitle),
  });

  return results;
}

function AxionLogo() {
  return (
    <div className="logoWrap" aria-label="Axion Drive Group logo">
      <div className="mark" aria-hidden="true">
        <span className="markLine markLeft" />
        <span className="markLine markRight" />
      </div>
      <div>
        <div className="logoPrimary">AXION</div>
        <div className="logoSecondary">DRIVE GROUP</div>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="sectionLabel">{children}</div>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["Inventory", "#inventory"],
    ["Experience", "#experience"],
    ["Financing", "#financing"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="header">
      <div className="navInner">
        <a href="#top" className="logoLink">
          <AxionLogo />
        </a>

        <nav className="desktopNav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
          <a className="navButton" href="#contact">
            Book Appointment
          </a>
        </nav>

        <button
          type="button"
          className="menuButton"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobileNav" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=80"
        alt="Luxury sports car at night"
        className="heroImage"
      />
      <div className="heroOverlay" />
      <div className="heroContent pageWrap">
        <div className="heroTextBlock">
          <div className="heroEyebrow">{COPY.eyebrow}</div>
          <h1>{COPY.heroTitle}</h1>
          <p>{COPY.heroSubtitle}</p>
          <div className="heroActions">
            <a className="primaryBtn" href="#inventory">
              {COPY.primaryButton}
            </a>
            <a className="secondaryBtn" href="#financing">
              {COPY.secondaryButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    "Transparent Pricing",
    "AI Vehicle Concierge",
    "Luxury Customer Experience",
    "White-Glove Delivery",
  ];

  return (
    <section className="trustBar">
      <div className="pageWrap trustGrid">
        {items.map((item) => (
          <div key={item} className="trustItem">
            <span /> {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function Inventory() {
  const [search, setSearch] = useState("");

  const filteredVehicles = useMemo(() => {
    const query = search.toLowerCase().trim();
    if (!query) return VEHICLES;
    return VEHICLES.filter((vehicle) =>
      `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.detail}`
        .toLowerCase()
        .includes(query),
    );
  }, [search]);

  return (
    <section id="inventory" className="section darkSection">
      <div className="pageWrap">
        <div className="sectionHeader splitHeader">
          <div>
            <SectionLabel>Featured Inventory</SectionLabel>
            <h2>Curated vehicles. Premium presentation. No pressure.</h2>
          </div>

          <input
            className="searchInput"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search Tesla, BMW, SUV..."
            aria-label="Search inventory"
          />
        </div>

        <div className="vehicleGrid">
          {filteredVehicles.map((vehicle) => (
            <article
              className="vehicleCard"
              key={`${vehicle.year}-${vehicle.make}-${vehicle.model}`}
            >
              <div className="vehicleImageWrap">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  className="vehicleImage"
                />
                <div className="vehicleTag">{vehicle.tag}</div>
              </div>

              <div className="vehicleBody">
                <div className="vehicleMake">
                  {vehicle.year} {vehicle.make}
                </div>
                <h3>{vehicle.model}</h3>

                <div className="priceRow">
                  <div>
                    <div className="price">{vehicle.price}</div>
                    <div className="payment">{vehicle.payment}</div>
                  </div>
                  <a href="#contact" className="smallLink">
                    View
                  </a>
                </div>

                <div className="vehicleDetail">{vehicle.detail}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section softSection">
      <div className="pageWrap experienceGrid">
        <div>
          <SectionLabel>The Axion Experience</SectionLabel>
          <h2>Luxury without intimidation.</h2>
          <p className="largeText">
            Axion Drive Group combines premium hospitality, AI-powered
            operations, transparent pricing, and a technology-first customer
            experience.
          </p>
        </div>

        <div className="cardGrid">
          {EXPERIENCE_CARDS.map((card) => (
            <div key={card.title} className="featureCard">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section darkSection">
      <div className="pageWrap">
        <SectionLabel>How It Works</SectionLabel>
        <h2>A simpler way to buy your next vehicle.</h2>

        <div className="stepGrid">
          {STEPS.map(([number, title, text]) => (
            <div key={number} className="stepCard">
              <div className="stepNumber">{number}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Financing() {
  return (
    <section id="financing" className="section softSection">
      <div className="pageWrap financeGrid">
        <div>
          <SectionLabel>Financing</SectionLabel>
          <h2>Know your options before you buy.</h2>
          <p className="largeText">
            Pre-qualify online, compare payment options, and understand your
            buying power before stepping into the showroom.
          </p>
          <ul className="checkList">
            <li>Soft-pull pre-approval experience</li>
            <li>Payment scenarios explained clearly</li>
            <li>Trade-in equity visibility</li>
            <li>Digital paperwork and eSignature ready</li>
          </ul>
        </div>

        <div className="paymentCard">
          <h3>Estimated Payment</h3>
          {[
            ["Vehicle Price", "$34,900"],
            ["Down Payment", "$3,500"],
            ["Estimated APR", "7.49%"],
            ["Monthly", "$589/mo"],
          ].map(([label, value]) => (
            <div className="paymentRow" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
          <a className="primaryBtn fullBtn" href="#contact">
            Start Pre-Approval
          </a>
        </div>
      </div>
    </section>
  );
}

function Concierge() {
  return (
    <section className="section darkSection">
      <div className="pageWrap conciergeGrid">
        <div className="imagePanel">
          <img
            src="https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=1400&q=80"
            alt="Luxury vehicle detail"
          />
        </div>

        <div>
          <SectionLabel>Concierge</SectionLabel>
          <h2>A delivery experience worth remembering.</h2>
          <p className="largeText">
            From personalized vehicle videos to VIP delivery moments, Axion
            makes the handoff feel premium, calm, and memorable.
          </p>
          <div className="miniList">
            <div>Personalized video walkarounds</div>
            <div>Appointment-based showroom experience</div>
            <div>Concierge pickup and delivery options</div>
            <div>VIP reveal with branded welcome package</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section softSection">
      <div className="pageWrap contactPanel">
        <div>
          <SectionLabel>Book Your Experience</SectionLabel>
          <h2>Ready to drive forward?</h2>
          <p className="largeText">
            Schedule an appointment, ask about inventory, or let us source your
            next vehicle.
          </p>

          <div className="contactInfo">
            <div>{CONTACT.phone}</div>
            <div>{CONTACT.email}</div>
            <div>{CONTACT.location}</div>
          </div>
        </div>

        <form
          className="contactForm"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <input placeholder="Full Name" required />
          <input placeholder="Email" type="email" required />
          <input placeholder="Phone" />
          <textarea
            rows={5}
            placeholder="Tell us what vehicle you're looking for..."
          />
          <button type="submit" className="primaryBtn formButton">
            Submit Request
          </button>
          {submitted && (
            <div className="successMessage">
              Request received. This demo form is working in the preview.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function TestPanel() {
  const tests = runSelfTests();

  return (
    <details className="testPanel">
      <summary>Developer checks</summary>
      <div className="testList">
        {tests.map((test) => (
          <div
            key={test.name}
            className={test.passed ? "testPass" : "testFail"}
          >
            {test.passed ? "✓" : "✕"} {test.name}
          </div>
        ))}
      </div>
    </details>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="pageWrap footerInner">
        <AxionLogo />
        <div>© 2026 Axion Drive Group LLC. Modern automotive retail.</div>
      </div>
    </footer>
  );
}

export default function AxionDriveGroupWebsite() {
  return (
    <div className="siteRoot">
      <style>{`
        :root {
          --black: #050505;
          --graphite: #0A0A0A;
          --softBlack: #080808;
          --gold: #C9A97A;
          --white: #FFFFFF;
          --muted: rgba(255, 255, 255, 0.62);
          --faint: rgba(255, 255, 255, 0.10);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .siteRoot {
          min-height: 100vh;
          background: var(--black);
          color: var(--white);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .pageWrap {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          border-bottom: 1px solid var(--faint);
          background: rgba(0, 0, 0, 0.72);
          backdrop-filter: blur(18px);
        }

        .navInner {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logoWrap {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .logoLink {
          display: inline-flex;
        }

        .mark {
          position: relative;
          height: 42px;
          width: 42px;
        }

        .markLine {
          position: absolute;
          top: 5px;
          height: 32px;
          width: 3px;
          border-radius: 999px;
          background: var(--gold);
        }

        .markLeft {
          left: 9px;
          transform: rotate(28deg);
        }

        .markRight {
          right: 9px;
          transform: rotate(-28deg);
        }

        .logoPrimary {
          font-size: 14px;
          letter-spacing: 0.52em;
          line-height: 1;
        }

        .logoSecondary {
          margin-top: 8px;
          color: var(--gold);
          font-size: 10px;
          letter-spacing: 0.35em;
          line-height: 1;
        }

        .desktopNav {
          display: flex;
          align-items: center;
          gap: 30px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
        }

        .desktopNav a:hover {
          color: var(--white);
        }

        .navButton {
          border: 1px solid rgba(201, 169, 122, 0.45);
          border-radius: 999px;
          padding: 12px 18px;
          color: var(--gold);
        }

        .menuButton {
          display: none;
          border: 1px solid var(--faint);
          background: transparent;
          color: var(--white);
          border-radius: 999px;
          padding: 10px 14px;
        }

        .mobileNav {
          display: none;
        }

        .hero {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }

        .heroImage {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(0,0,0,0.98), rgba(0,0,0,0.72), rgba(0,0,0,0.22));
        }

        .heroContent {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 82px;
        }

        .heroTextBlock {
          max-width: 760px;
        }

        .heroEyebrow,
        .sectionLabel {
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 0.42em;
          font-size: 12px;
          margin-bottom: 20px;
        }

        h1,
        h2,
        h3,
        p {
          margin: 0;
        }

        h1 {
          font-size: clamp(52px, 8vw, 104px);
          line-height: 0.94;
          letter-spacing: -0.065em;
          font-weight: 300;
        }

        h2 {
          font-size: clamp(38px, 5vw, 68px);
          line-height: 1.02;
          letter-spacing: -0.055em;
          font-weight: 300;
        }

        .heroTextBlock p,
        .largeText {
          margin-top: 28px;
          max-width: 680px;
          color: var(--muted);
          font-size: 19px;
          line-height: 1.75;
        }

        .heroActions {
          margin-top: 38px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .primaryBtn,
        .secondaryBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          border-radius: 999px;
          padding: 0 26px;
          font-size: 14px;
          font-weight: 600;
          transition: 180ms ease;
        }

        .primaryBtn {
          background: var(--gold);
          color: #050505;
        }

        .primaryBtn:hover {
          background: #e2c18d;
          transform: translateY(-1px);
        }

        .secondaryBtn {
          border: 1px solid rgba(255, 255, 255, 0.24);
          color: var(--white);
        }

        .secondaryBtn:hover {
          border-color: var(--gold);
          color: var(--gold);
        }

        .trustBar {
          border-top: 1px solid var(--faint);
          border-bottom: 1px solid var(--faint);
          background: #000;
          padding: 24px 0;
        }

        .trustGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .trustItem {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255, 255, 255, 0.66);
          font-size: 14px;
        }

        .trustItem span {
          height: 7px;
          width: 7px;
          border-radius: 999px;
          background: var(--gold);
        }

        .section {
          padding: 96px 0;
        }

        .darkSection {
          background: var(--black);
        }

        .softSection {
          background: var(--softBlack);
        }

        .sectionHeader {
          margin-bottom: 52px;
        }

        .splitHeader {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 30px;
        }

        .splitHeader h2 {
          max-width: 820px;
        }

        .searchInput {
          width: min(100%, 360px);
          min-height: 54px;
          border-radius: 999px;
          border: 1px solid var(--faint);
          background: rgba(255,255,255,0.04);
          color: var(--white);
          outline: none;
          padding: 0 20px;
        }

        .searchInput:focus {
          border-color: var(--gold);
        }

        .vehicleGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .vehicleCard,
        .featureCard,
        .stepCard,
        .paymentCard,
        .contactPanel,
        .imagePanel {
          border: 1px solid var(--faint);
          background: var(--graphite);
          border-radius: 32px;
          overflow: hidden;
        }

        .vehicleCard {
          transition: 220ms ease;
        }

        .vehicleCard:hover {
          transform: translateY(-4px);
          border-color: rgba(201,169,122,0.4);
        }

        .vehicleImageWrap {
          position: relative;
          height: 288px;
          overflow: hidden;
        }

        .vehicleImage {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 600ms ease;
        }

        .vehicleCard:hover .vehicleImage {
          transform: scale(1.05);
        }

        .vehicleTag {
          position: absolute;
          left: 18px;
          top: 18px;
          border-radius: 999px;
          background: rgba(0,0,0,0.72);
          color: var(--gold);
          padding: 8px 12px;
          font-size: 12px;
        }

        .vehicleBody {
          padding: 26px;
        }

        .vehicleMake,
        .payment,
        .vehicleDetail {
          color: rgba(255, 255, 255, 0.46);
          font-size: 14px;
        }

        .vehicleBody h3 {
          margin-top: 6px;
          font-size: 28px;
          font-weight: 300;
          letter-spacing: -0.035em;
        }

        .priceRow {
          margin-top: 24px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--faint);
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
        }

        .price {
          font-size: 30px;
          font-weight: 300;
        }

        .smallLink {
          color: var(--gold);
          font-size: 14px;
        }

        .vehicleDetail {
          margin-top: 18px;
        }

        .experienceGrid,
        .financeGrid,
        .conciergeGrid,
        .contactPanel {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }

        .cardGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .featureCard,
        .stepCard,
        .paymentCard {
          padding: 28px;
        }

        .featureCard h3,
        .stepCard h3,
        .paymentCard h3 {
          color: var(--gold);
          font-size: 22px;
          font-weight: 300;
          margin-bottom: 18px;
        }

        .featureCard p,
        .stepCard p {
          color: rgba(255, 255, 255, 0.56);
          line-height: 1.7;
        }

        .stepGrid {
          margin-top: 48px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .stepNumber {
          margin-bottom: 42px;
          color: var(--gold);
          letter-spacing: 0.32em;
          font-size: 12px;
        }

        .checkList {
          margin: 28px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 14px;
          color: rgba(255, 255, 255, 0.68);
        }

        .checkList li::before {
          content: "✓";
          color: var(--gold);
          margin-right: 10px;
        }

        .paymentRow {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 18px 0;
          border-bottom: 1px solid var(--faint);
        }

        .paymentRow span {
          color: rgba(255, 255, 255, 0.52);
        }

        .fullBtn {
          width: 100%;
          margin-top: 28px;
        }

        .imagePanel img {
          width: 100%;
          height: 520px;
          object-fit: cover;
          display: block;
        }

        .miniList {
          margin-top: 28px;
          display: grid;
          gap: 14px;
        }

        .miniList div {
          border: 1px solid var(--faint);
          background: rgba(255,255,255,0.03);
          border-radius: 18px;
          padding: 18px;
          color: rgba(255,255,255,0.68);
        }

        .contactPanel {
          padding: 48px;
          align-items: start;
        }

        .contactInfo {
          margin-top: 32px;
          display: grid;
          gap: 14px;
          color: rgba(255,255,255,0.66);
        }

        .contactForm {
          display: grid;
          gap: 14px;
        }

        .contactForm input,
        .contactForm textarea {
          width: 100%;
          border: 1px solid var(--faint);
          background: #050505;
          color: var(--white);
          border-radius: 18px;
          outline: none;
          padding: 17px 18px;
          font: inherit;
        }

        .contactForm input:focus,
        .contactForm textarea:focus {
          border-color: var(--gold);
        }

        .formButton {
          border: 0;
          cursor: pointer;
        }

        .successMessage {
          color: var(--gold);
          font-size: 14px;
        }

        .testPanel {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto 40px;
          border: 1px solid var(--faint);
          border-radius: 18px;
          padding: 18px;
          color: rgba(255,255,255,0.7);
          background: rgba(255,255,255,0.03);
        }

        .testPanel summary {
          cursor: pointer;
          color: var(--gold);
        }

        .testList {
          margin-top: 14px;
          display: grid;
          gap: 8px;
          font-size: 14px;
        }

        .testPass {
          color: #9BE7B1;
        }

        .testFail {
          color: #FF9B9B;
        }

        .footer {
          border-top: 1px solid var(--faint);
          background: #000;
          padding: 36px 0;
        }

        .footerInner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          color: rgba(255,255,255,0.42);
          font-size: 14px;
        }

        @media (max-width: 900px) {
          .desktopNav {
            display: none;
          }

          .menuButton {
            display: inline-flex;
          }

          .mobileNav {
            display: grid;
            width: min(1180px, calc(100% - 40px));
            margin: 0 auto;
            padding: 0 0 20px;
            gap: 14px;
          }

          .mobileNav a {
            color: rgba(255,255,255,0.75);
            padding: 8px 0;
          }

          .trustGrid,
          .vehicleGrid,
          .stepGrid,
          .experienceGrid,
          .financeGrid,
          .conciergeGrid,
          .contactPanel {
            grid-template-columns: 1fr;
          }

          .splitHeader {
            align-items: start;
            flex-direction: column;
          }

          .cardGrid {
            grid-template-columns: 1fr;
          }

          .contactPanel {
            padding: 28px;
          }

          .footerInner {
            align-items: start;
            flex-direction: column;
          }
        }

        @media (max-width: 560px) {
          .pageWrap,
          .navInner,
          .mobileNav,
          .testPanel {
            width: min(100% - 28px, 1180px);
          }

          .heroActions {
            flex-direction: column;
          }

          .primaryBtn,
          .secondaryBtn {
            width: 100%;
          }

          .section {
            padding: 72px 0;
          }

          .logoPrimary {
            letter-spacing: 0.35em;
          }

          .logoSecondary {
            letter-spacing: 0.24em;
          }
        }
      `}</style>

      <Header />
      <Hero />
      <TrustBar />
      <Inventory />
      <Experience />
      <Process />
      <Financing />
      <Concierge />
      <Contact />
      <TestPanel />
      <Footer />
    </div>
  );
}
