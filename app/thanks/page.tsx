export default function ThanksPage() {
  return (
    <main className="thanksPage">
      <section className="thanksPanel">
        <p className="eyebrow">Request received</p>
        <h1>Thank you for contacting us.</h1>
        <p>
          Your parts request has been sent to GANDAKOREA / Korea-Autoparts. We
          will review your vehicle details and reply as soon as possible.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="/">
            Back to Home
          </a>
          <a
            className="button button--secondary thanksPanel__whatsapp"
            href="https://wa.me/821055670102?text=Hello%20GANDAKOREA%2C%20I%20submitted%20a%20parts%20request%20on%20your%20website."
          >
            WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
