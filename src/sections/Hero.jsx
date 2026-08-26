import frontDoor from "../assets/garden-path.jpeg";
import { roomTypes } from "../data/Room";

const features = [
  { label: "Own kitchen" },
  { label: "Private bathroom" },
  { label: "Fresh linen monthly" },
  { label: "Friendly owner" },
];

// Ambil 3 foto dari tipe kamar buat kolase (A, B, C)
const collagePhotos = [roomTypes[0], roomTypes[1], roomTypes[2]];

export default function Hero({ room }) {
  return (
    <section id="home" className="hero">
      <div className="hero-media">
        <img src={frontDoor} alt={`${room.name} entrance path`} />
        <div className="hero-fog" />
        <div className="hero-scrim" />
      </div>

      <div className="hero-grid">
        <div className="hero-columns">
          <div className="hero-headline">
            <div className="hero-eyebrow">
              {room.name} — {room.location}
            </div>
            <h1 className="hero-title">
              A happy home
              <br />
              in <em>Muding Kerobokan.</em>
            </h1>
            <p className="hero-lede">
              Move in with just a suitcase and settle into a space that's
              genuinely yours. Fully furnished, always private, and cared
              for like it matters. It's the kind of room people plan to stay
              in for a few months and end up calling home for years.
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

          <div className="hero-collage">
            <div className="hero-collage-main">
              <img
                src={collagePhotos[0].heroImage}
                alt={`${room.name} - ${collagePhotos[0].label}`}
              />
            </div>
            <div className="hero-collage-accent hero-collage-accent-1">
              <img
                src={collagePhotos[1].heroImage}
                alt={`${room.name} - ${collagePhotos[1].label}`}
              />
            </div>
            <div className="hero-collage-accent hero-collage-accent-2">
              <img
                src={collagePhotos[2].heroImage}
                alt={`${room.name} - ${collagePhotos[2].label}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}