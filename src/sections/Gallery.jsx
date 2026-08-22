import SectionHeading from "../components/SectionHeading";

export default function Gallery({ room }) {
  return (
    <section className="strip">
      <div className="wrap">
        <div className="strip-head">
          <SectionHeading eyebrow="More views" title="A few more corners" />
        </div>
        <div className="strip-scroll">
          {room.gallery.map((img, i) => (
            <img src={img} alt={`Room detail ${i + 1}`} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
