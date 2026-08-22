export default function SectionHeading({ eyebrow, title, onDark = false }) {
  return (
    <div className="section-heading">
      <div className={`eyebrow ${onDark ? "on-dark" : ""}`}>{eyebrow}</div>
      <h2>{title}</h2>
    </div>
  );
}
