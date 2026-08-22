import SectionHeading from "../components/SectionHeading";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Price({ room }) {
  return (
    <section id="price" className="price-section">
      <div className="wrap">
        <SectionHeading eyebrow="Rent" title="Simple, all-inclusive pricing" />
        <div className="price-card">
          <div>
            <div className="price-card-num">
              Rp {(room.price / 1000000).toLocaleString("id-ID")}
              <sup>million / month</sup>
            </div>
            <div className="price-card-lbl">Fully furnished — no extra setup costs</div>
          </div>
          <ul className="price-includes">
            <li>King-size bed &amp; wardrobe</li>
            <li>Private bathroom with water heater</li>
            <li>Private kitchen with fridge &amp; stove</li>
            <li>Air conditioning &amp; TV</li>
            <li>Daily-cleaned garden entrance</li>
          </ul>
          <WhatsAppButton phone={room.whatsapp} variant="sage" block>
            Ask About Availability
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
