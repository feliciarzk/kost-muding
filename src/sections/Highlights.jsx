import SectionHeading from "../components/SectionHeading";

export default function Highlights({ room }) {
  return (
    <section id="rooms" className="tour">
      <div className="wrap">
        <div className="tour-head">
          <SectionHeading eyebrow="Take a look inside" title="From the front door to the kitchen" />
        </div>

        {room.tour.map((step) => (
          <div className="tour-row" key={step.step}>
            <div className="tour-num-col">
              <span className="tour-num">{step.step}</span>
            </div>
            <div className="tour-img">
              <img src={step.image} alt={step.title} />
            </div>
            <div className="tour-text">
              <div className="eyebrow">{step.label}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
