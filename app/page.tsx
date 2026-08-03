const whatsappUrl =
  "https://wa.me/821055670102?text=Hello%20GANDAKOREA%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20Korean%20auto%20parts.";

const categories = [
  "Engine parts",
  "Transmission",
  "Brake system",
  "Suspension",
  "Body parts",
  "Electrical parts",
  "Filters",
  "Lighting",
  "Cooling system",
  "Interior parts",
  "Maintenance parts",
  "Special order parts",
];

const buyerTypes = [
  "Individual car owners",
  "Repair workshops",
  "Auto parts distributors",
  "Wholesale importers",
  "Fleet maintenance teams",
  "Online parts sellers",
];

const process = [
  {
    step: "01",
    title: "Send your request",
    body: "Share the vehicle model, year, VIN, part number, photos, or quantity by email or WhatsApp.",
  },
  {
    step: "02",
    title: "We check availability",
    body: "We help verify compatible Hyundai and Kia parts and prepare a clear quotation from Korea.",
  },
  {
    step: "03",
    title: "Confirm and ship",
    body: "After confirmation, we support packing and international shipping for small and bulk orders.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero__overlay" />
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="GANDAKOREA home">
            <span>GANDAKOREA</span>
            <strong>Korea-Autoparts</strong>
          </a>
          <div className="nav__links">
            <a href="#parts">Parts</a>
            <a href="#buyers">Buyers</a>
            <a href="#quote">Quote</a>
          </div>
        </nav>

        <div className="hero__content" id="top">
          <p className="eyebrow">Korean auto parts sourcing for global buyers</p>
          <h1>Hyundai Kia All Parts From Korea</h1>
          <p className="hero__lead">
            Source Hyundai and Kia genuine parts from Korea with support for
            individual orders, workshop needs, distributor supply, and worldwide
            orders.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#quote">
              Contact Us
            </a>
            <a className="button button--whatsapp" href={whatsappUrl}>
              <span className="whatsappMark" aria-hidden="true">
                <span />
              </span>
              <span>WhatsApp</span>
            </a>
          </div>
          <div className="hero__proof" aria-label="Service highlights">
            <span>VIN and part number check</span>
            <span>Worldwide shipping support</span>
            <span>Retail and bulk orders</span>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div>
          <p className="eyebrow">What we do</p>
          <h2>Reliable sourcing for Hyundai and Kia parts</h2>
        </div>
        <p>
          GANDAKOREA / Korea-Autoparts helps overseas buyers find Korean auto
          parts, confirm compatibility, and request pricing for international
          orders. Send us the VIN, part number, vehicle details, or photos and
          we will help you move from inquiry to quotation.
        </p>
      </section>

      <section className="section" id="parts">
        <div className="section__heading">
          <p className="eyebrow">All parts available by request</p>
          <h2>Full-range Hyundai and Kia parts supply</h2>
        </div>
        <div className="categoryGrid">
          {categories.map((category) => (
            <article className="category" key={category}>
              <span aria-hidden="true" />
              <h3>{category}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="band" id="buyers">
        <div className="band__content">
          <p className="eyebrow">For B2C and B2B</p>
          <h2>Built for one-time buyers and repeat wholesale orders</h2>
          <p>
            Whether you need one hard-to-find component or a repeated parts
            supply for your local market, we can support quotation, part
            matching, and order communication from Korea.
          </p>
        </div>
        <div className="buyerGrid">
          {buyerTypes.map((buyer) => (
            <div className="buyer" key={buyer}>
              {buyer}
            </div>
          ))}
        </div>
      </section>

      <section className="section process">
        <div className="section__heading">
          <p className="eyebrow">Simple ordering process</p>
          <h2>From request to shipment</h2>
        </div>
        <div className="processGrid">
          {process.map((item) => (
            <article className="processCard" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quote" id="quote">
        <div className="quote__copy">
          <p className="eyebrow">Get a fast quotation</p>
          <h2>Send your vehicle details and parts request</h2>
          <p>
            For the most accurate quote, include your country, vehicle model,
            year, VIN, part number, quantity, and any photos you have.
          </p>
        </div>

        <form
          className="quoteForm"
          action="https://formsubmit.co/autoparts7425@gmail.com"
          method="post"
        >
          <input
            type="hidden"
            name="_subject"
            value="New parts inquiry from GANDAKOREA website"
          />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_url"
            value="https://gandakorea-autoparts.kongee7425.chatgpt.site/#quote"
          />
          <input
            type="hidden"
            name="_next"
            value="https://gandakorea-autoparts.kongee7425.chatgpt.site/thanks"
          />
          <input
            className="quoteForm__honey"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
          />
          <label>
            Name
            <input name="Name" autoComplete="name" required />
          </label>
          <label>
            Country
            <input name="Country" autoComplete="country-name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            WhatsApp
            <input name="WhatsApp" type="tel" autoComplete="tel" />
          </label>
          <label className="quoteForm__wide">
            Vehicle model / year
            <input name="Vehicle model and year" required />
          </label>
          <label className="quoteForm__wide">
            VIN or part number
            <input name="VIN or part number" />
          </label>
          <label className="quoteForm__wide">
            Parts and quantity
            <textarea name="Parts and quantity" rows={4} required />
          </label>
          <button type="submit">Contact Us</button>
          <p>
            Prefer chat? Message us on WhatsApp for photos, part numbers, and
            urgent requests.
          </p>
        </form>
      </section>

      <footer>
        <strong>GANDAKOREA / Korea-Autoparts</strong>
        <p>
          Hyundai and Kia are trademarks of their respective owners.
          GANDAKOREA / Korea-Autoparts is an independent sourcing and order
          support service unless otherwise stated.
        </p>
      </footer>
    </main>
  );
}
