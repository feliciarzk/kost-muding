import SectionHeading from "../components/SectionHeading";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Contact({ room }) {
  return (
    <section id="contact" className="contact-section">
      <div className="wrap">
        <div className="contact-card">
          <div>
            <SectionHeading eyebrow="Get in touch" title={room.location} />
            <div className="loc-line">
              <PinIcon />
              <span>Muding, Kerobokan — an easy ride to Canggu and Seminyak.</span>
            </div>
            <div className="loc-line">
              <CalendarIcon />
              <span>Ready to move in now — message us to arrange a viewing.</span>
            </div>
            <a className="map-link" href={room.mapLink} target="_blank" rel="noopener noreferrer">
              Get directions on Google Maps →
            </a>
          </div>

          <div className="contact-right">
            <div className="lbl">Reach out on WhatsApp</div>
            <div className="phone">+62 898-1223-780</div>
            <WhatsAppButton phone={room.whatsapp} block>
              Message on WhatsApp
            </WhatsAppButton>
            <div className="note">We usually reply quickly — just say hi.</div>
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
