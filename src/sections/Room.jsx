import { Link } from "react-router-dom";
import { roomTypes, room } from "../data/Room";

export default function Room() {
  return (
    <section id="room" className="room-section">
      <div className="wrap">
        <div className="room-heading">
          <h2>Rooms for Rent in Kerobokan, Bali</h2>

          <p>
            Choose a fully furnished private room for your monthly stay
          </p>
        </div>

        <div className="room-grid">
          {roomTypes.map((type) => (
            <Link
              key={type.id}
              to={`/room/${type.id}`}
              className="room-card"
            >
              <div className="room-card-image">
                <img
                  src={type.heroImage}
                  alt={`${room.name} ${type.label} room for rent in Kerobokan, Bali`}
                />

                <span className="room-card-price-badge">
                  Rp{type.price.toLocaleString("id-ID")}/month
                </span>
              </div>

              <div className="room-card-body">
                <h3 className="room-card-title">
                  {room.name} — {type.label}
                </h3>

                <div className="room-card-location">
                  <PinIcon />
                  <span>{room.location}</span>
                </div>

                <div className="room-card-tag">Private Room</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      width="14"
      height="14"
    >
      <path d="M12 21s-7-6.4-7-11.5A7 7 0 0 1 19 9.5C19 14.6 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}