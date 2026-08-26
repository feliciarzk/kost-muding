import { useEffect, useState } from "react";
import { room } from "../data/Room";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "room", label: "Rooms" },
  { id: "contact", label: "Contact" },
  { id: "map", label: "Map" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="mk-nav">
      <div className="mk-nav-card">
        <span className="mk-brand">{room.name}</span>

        <div className="mk-links">
          {LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <button
                key={link.id}
                type="button"
                className={"mk-link" + (isActive ? " is-active" : "")}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className={"mk-burger" + (open ? " is-open" : "")}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={"mk-mobile" + (open ? " is-open" : "")}>
        {LINKS.map((link) => {
          const isActive = active === link.id;
          return (
            <button
              key={link.id}
              type="button"
              className={"mk-mobile-link" + (isActive ? " is-active" : "")}
              onClick={() => handleLinkClick(link.id)}
            >
              {link.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}