import WhatsAppButton from "../components/WhatsAppButton";
import frontDoor from "../assets/front-door.jpeg";

const features = [
  { icon: "🍳", label: "Own kitchen" },
  { icon: "🚿", label: "Private bathroom" },
  { icon: "🧹", label: "Cleaned regularly" },
  { icon: "🤝", label: "Friendly owner" },
];

export default function Hero({ room }) {
  return (
    <section id="home" className="hero">
      <div className="hero-media">
        <img src={frontDoor} alt="Entrance path to the room" />
        <div className="hero-scrim" />
      </div>

      <div className="hero-grid">
        <div className="hero-bottom">
          <div className="hero-headline">
            <div className="hero-eyebrow">{room.location}</div>
            <h1 className="hero-title">
              A room you'll be
              <br />
              <em>happy to call home.</em>
            </h1>
            <p className="hero-lede">
              A self-contained room with its own kitchen and bathroom, kept
              clean and well looked after. Most tenants end up staying for
              years — if something comes up, the owner actually helps out,
              it's never just a hands-off rental.
            </p>
            <ul className="hero-features">
              {features.map((f, i) => (
                <li
                  key={f.label}
                  className="hero-feature"
                  style={{ animationDelay: `${0.5 + i * 0.08}s` }}
                >
                  <span className="hero-feature-icon">{f.icon}</span>
                  {f.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-panel">
            <p className="hero-desc">{room.description}</p>
            <div className="hero-price">
              <span className="hero-price-amount">
                Rp {room.price.toLocaleString("id-ID")}
              </span>
              <span className="hero-price-label">per month</span>
            </div>
            <WhatsAppButton phone={room.whatsapp} className="hero-cta-btn">
              Chat on WhatsApp
            </WhatsAppButton>
            <p className="hero-panel-note">Usually replies within minutes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}