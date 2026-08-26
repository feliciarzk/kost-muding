import { room } from "../data/Room";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "room", label: "Rooms" },
  { id: "contact", label: "Contact" },
  { id: "map", label: "Map" },
];

export default function Footer() {
  const handleLinkClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const waLink = "https://wa.me/" + room.whatsapp;

  return (
    <footer className="mk-footer">
      <div className="wrap mk-footer-top">
        <div className="mk-footer-brand">
          <span className="mk-footer-title">Muding Room</span>
          <p className="mk-footer-tagline">A fully furnished, self-contained room in Muding, Kerobokan-Bali.</p>
        </div>

        <div className="mk-footer-links">
          <span className="mk-footer-heading">Explore</span>
          {LINKS.map((link) => (
            <button key={link.id} type="button" className="mk-footer-link" onClick={() => handleLinkClick(link.id)}>
              {link.label}
            </button>
          ))}
        </div>

        <div className="mk-footer-contact">
          <span className="mk-footer-heading">Contact</span>
          <a className="mk-footer-link" href={waLink} target="_blank" rel="noopener noreferrer">WhatsApp +62 898-1223-780</a>
          <a className="mk-footer-link" href={room.mapLink} target="_blank" rel="noopener noreferrer">{room.location}</a>
        </div>
      </div>

      <div className="wrap mk-footer-bottom">
        <span>Muding Kerobokan Room</span>
        <span>Made with care, in Bali.</span>
      </div>
    </footer>
  );
}