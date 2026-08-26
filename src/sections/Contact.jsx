import SectionHeading from "../components/SectionHeading";

export default function Contact({ room }) {
  const waMessage = encodeURIComponent(`Hi, I'm interested in a room at ${room.location}`);
  const waLink = `https://wa.me/${room.whatsapp}?text=${waMessage}`;

  return (
    <section id="contact" className="contact-section">
      <div className="wrap">
        <div className="contact-card">
          <div className="contact-info">
            <SectionHeading eyebrow="Get in touch" title={room.location} />
            <p className="contact-lede">
              Come see the room in person
            </p>

            <div className="loc-list">
              <div className="loc-line">
                <span className="loc-icon">
                  <PinIcon />
                </span>
                <span>Muding, Kerobokan — an easy ride to Canggu and Seminyak.</span>
              </div>
              <div className="loc-line">
                <span className="loc-icon">
                  <CalendarIcon />
                </span>
                <span>Ready to move in now — message us to arrange a viewing.</span>
              </div>
            </div>

            <div className="contact-cta-row">
              <a className="map-link" href={room.mapLink} target="_blank" rel="noopener noreferrer">
                <span>Get directions on Google Maps</span>
                <ArrowIcon />
              </a>

              <a className="wa-link" href={waLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="contact-footer">
            <ClockIcon />
            <span>Just say hi on WhatsApp.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s-7-6.4-7-11.5A7 7 0 0 1 19 9.5C19 14.6 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.27-1.38a9.9 9.9 0 0 0 4.77 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.46 17.5 2 12.04 2Zm0 18.1h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.18 8.18 0 0 1-1.26-4.32c0-4.53 3.69-8.22 8.24-8.22 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.81c0 4.54-3.7 8.18-8.23 8.18Zm4.5-6.13c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.16 1.73 2.65 4.2 3.71.58.25 1.04.4 1.4.51.59.19 1.12.16 1.55.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}