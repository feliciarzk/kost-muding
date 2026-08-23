import frontDoor from "../assets/front-door.jpeg";

const features = [
  { label: "Own kitchen" },
  { label: "Private bathroom" },
  { label: "Fresh linen monthly" },
  { label: "Friendly owner" },
];

export default function Hero({ room }) {
  return (
    <section id="home" className="hero">
      <div className="hero-media">
        <img src={frontDoor} alt="Entrance path to the room" />
        <div className="hero-fog" />
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
              clean and well looked after. Housekeeping is self-service, with
              a paid cleaning service available on request. Most tenants end
              up staying for years.
            </p>
            <ul className="hero-features">
              {features.map((f, i) => (
                <li
                  key={f.label}
                  className="hero-feature"
                  style={{ animationDelay: `${0.5 + i * 0.08}s` }}
                >
                  {f.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}