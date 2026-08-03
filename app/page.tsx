const whatsappUrl =
  "https://wa.me/821055670102?text=Hello%20GANDAKOREA%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20Korean%20auto%20parts.";

const categories = [
  "GM Korea parts",
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
    body: "We help verify compatible Hyundai, Kia, and GM Korea parts and prepare a clear quotation.",
  },
  {
    step: "03",
    title: "Review costs and pay",
    body: "We share transparent shipping costs from Korea before payment, and PayPal payment is available for confirmed orders.",
  },
];

const requiredInfo = [
  {
    title: "Vehicle model and year",
    body: "Tell us the exact model name and production year, such as Sonata 2018 or Sportage 2021.",
  },
  {
    title: "VIN or part number",
    body: "VIN or part number helps us check compatibility and reduce the chance of wrong parts.",
  },
  {
    title: "Parts name and quantity",
    body: "List every part you need and the quantity for each item, especially for wholesale orders.",
  },
  {
    title: "Destination country",
    body: "Shipping cost depends on the country, package size, and weight, so this is required for a clear quote.",
  },
  {
    title: "Photos if available",
    body: "Photos of the old part, label, or damaged area can help us confirm the request faster.",
  },
];

const faqs = [
  {
    question: "Do you supply Hyundai and Kia parts?",
    answer:
      "We handle Hyundai and Kia parts by request. Please send the VIN, part number, photos, quantity, and destination country so we can check availability.",
  },
  {
    question: "Can you also supply GM Korea parts?",
    answer:
      "Yes. GM Korea parts can be quoted when available. Please send the vehicle details and part information for checking.",
  },
  {
    question: "Do you provide shipping cost before payment?",
    answer:
      "Yes. We provide transparent shipping costs from Korea before payment, so you can review the full amount before confirming the order.",
  },
  {
    question: "Which payment method is available?",
    answer:
      "PayPal payment is available after the quotation is confirmed. Payment details are shared with the final quotation.",
  },
  {
    question: "Can individual customers and wholesale buyers contact you?",
    answer:
      "Yes. We support individual vehicle owners, repair shops, distributors, wholesale buyers, and repeat orders.",
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
            <a href="#about">About</a>
            <a href="#parts">Parts</a>
            <a href="#order">Order</a>
            <a href="#faq">FAQ</a>
            <a href="#quote">Contact</a>
          </div>
        </nav>

        <div className="hero__content" id="top">
          <p className="eyebrow">Korean auto parts sourcing for global buyers</p>
          <h1>Hyundai Kia All Parts From Korea</h1>
          <p className="hero__lead">
            Source Hyundai, Kia, and GM Korea parts from Korea with
            support for individual orders, workshop needs, distributor supply,
            and worldwide orders.
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
            <span>Transparent Korea shipping costs</span>
            <span>PayPal payment available</span>
          </div>
        </div>
      </section>

      <section className="section intro" id="about">
        <div>
          <p className="eyebrow">About Us</p>
          <h2>Independent Korean auto parts sourcing service</h2>
        </div>
        <div className="intro__copy">
          <p>
            GANDAKOREA / Korea-Autoparts helps overseas buyers source Hyundai,
            Kia, and GM Korea auto parts by request. We support
            individual vehicle owners, repair shops, distributors, and
            wholesale buyers.
          </p>
          <p>
            Send your vehicle model, year, VIN, part number, photos, quantity,
            and destination country. We will check availability, confirm
            suitable parts, and provide a clear quotation with transparent
            shipping costs from Korea before payment.
          </p>
          <p>Payment can be made through PayPal for a simple transaction.</p>
        </div>
      </section>

      <section className="section" id="parts">
        <div className="section__heading">
          <p className="eyebrow">All parts available by request</p>
          <h2>Hyundai, Kia, and GM Korea parts supply</h2>
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

      <section className="section process" id="order">
        <div className="section__heading">
          <p className="eyebrow">How to Order</p>
          <h2>From request to payment confirmation</h2>
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

      <section className="section requiredInfo">
        <div className="section__heading">
          <p className="eyebrow">Required Information</p>
          <h2>Send the details we need to quote correctly</h2>
        </div>
        <div className="infoGrid">
          {requiredInfo.map((item) => (
            <article className="infoItem" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="section__heading">
          <p className="eyebrow">FAQ</p>
          <h2>Common questions from overseas buyers</h2>
        </div>
        <div className="faqList">
          {faqs.map((item) => (
            <details className="faqItem" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="quote" id="quote">
        <div className="quote__copy">
          <p className="eyebrow">Get a fast quotation</p>
          <h2>Send your vehicle details and parts request</h2>
          <p>
            For the most accurate quote, include your country, vehicle model,
            year, VIN, part number, quantity, and any photos you have. We
            provide parts pricing and transparent shipping costs from Korea
            before payment. PayPal payment is available for confirmed orders.
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
            value="https://autoparts-source.com/#quote"
          />
          <input
            type="hidden"
            name="_next"
            value="https://autoparts-source.com/thanks"
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
            urgent requests. Please include your destination country so we can
            check shipping options.
          </p>
        </form>
      </section>

      <footer>
        <strong>GANDAKOREA / Korea-Autoparts</strong>
        <p>
          All vehicle and parts brand names are trademarks of their respective
          owners. GANDAKOREA / Korea-Autoparts is an independent sourcing and
          order support service unless otherwise stated.
        </p>
      </footer>
    </main>
  );
}
