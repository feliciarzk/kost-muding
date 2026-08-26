import buildingPhoto from "../assets/build.jpeg";

export default function Map({ room }) {
  return (
    <section id="map" className="map-section">
      <div className="wrap">
        <div className="map-layout">
          <div className="map-photo">
            <img src={buildingPhoto} alt={room.location} />
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