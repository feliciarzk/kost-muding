import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { roomTypes, room } from "../data/Room";

const CATEGORY_LABELS = {
  Kamar: "Room",
  "Dapur Pribadi": "Private Kitchen",
  "Kamar Mandi Dalam": "Private Bathroom",
};

export default function RoomDetail() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const type = roomTypes.find((t) => t.id === roomId);
  const [activeImg, setActiveImg] = useState(type?.gallery?.[0]);

  if (!type) {
    return (
      <div className="detail-empty">
        <p>Room type not found.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  const waMessage = encodeURIComponent(
    `Hi, I'm interested in ${type.label} at ${room.name}`
  );
  const waLink = `https://wa.me/${room.whatsapp}?text=${waMessage}`;

  return (
    <section className="detail-section">
      <div className="wrap detail-wrap">
        <button
          className="detail-back"
          onClick={() => navigate("/", { state: { scrollTo: "room" } })}
        >
          <BackIcon />
          <span>Back</span>
        </button>

        <div className="detail-gallery">
          <div className="detail-main-img">
            <img src={activeImg} alt={type.label} />
          </div>

          {type.gallery?.length > 1 && (
            <div className="detail-thumbs">
              {type.gallery.map((img, i) => (
                <button
                  key={i}
                  className={
                    "detail-thumb" + (activeImg === img ? " is-active" : "")
                  }
                  onClick={() => setActiveImg(img)}
                >
                  <img src={img} alt={`${type.label} ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="detail-header">
          <div className="eyebrow">{room.name}</div>
          <div className="detail-title-row">
            <h1>{type.label}</h1>
            <span className="detail-price">
              Rp{type.price.toLocaleString("id-ID")}
              <span className="detail-price-unit">/month</span>
            </span>
          </div>
          {type.description && <p className="detail-lede">{type.description}</p>}
        </div>

        {Object.keys(type.facilities || {}).length > 0 && (
          <div className="detail-facilities">
            {Object.entries(type.facilities).map(([category, items]) => (
              <div key={category} className="detail-facility-group">
                <h4>{CATEGORY_LABELS[category] || category}</h4>
                <ul>
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <a href={waLink} target="_blank" rel="noreferrer" className="btn-wa detail-cta">
          <WhatsAppIcon />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </section>
  );
}

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
      <path d="M19 12H5M12 19l-7-7 7-7" />
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