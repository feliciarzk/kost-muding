import FacilityCard from "../components/FacilityCard";

export default function Facilities({ room }) {
  return (
    <section id="facilities" className="fasilitas">
      <div className="wrap">
        <div className="eyebrow on-dark">What's included</div>
        <h2>Everything in the room, ready from day one</h2>
        <div className="fas-grid">
          {Object.entries(room.facilities).map(([groupTitle, items]) => (
            <FacilityCard key={groupTitle} title={groupTitle} items={items} />
          ))}
        </div>
      </div>
    </section>
  );
}
