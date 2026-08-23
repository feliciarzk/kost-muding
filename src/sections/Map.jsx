import SectionHeading from "../components/SectionHeading";

export default function Contact({ room }) {
  return (
    <section id="map" className="contact-section">
      <div className="wrap">
        <div className="contact-layout">
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

              <a className="map-link" href={room.mapLink} target="_blank" rel="noopener noreferrer">
                <span>Get directions on Google Maps</span>
                <ArrowIcon />
              </a>
            </div>

            <div className="contact-footer">
              <ClockIcon />
              <span>Usually replies within minutes — just say hi on WhatsApp.</span>
            </div>
          </div>

          <div className="map-embed">
            <iframe
              src={room.mapEmbedUrl}
              title="Room location on Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
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