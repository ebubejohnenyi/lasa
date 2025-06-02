import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import cssClasses from "./google_map_block.module.css";

const GoogleMap: React.FC = () => {
  return (
    <section className={cssClasses.mapWrapper}>
      <p style={{ color: "transparent" }}>
        Hello My people of
        tyweifbiuwbeisdbckjwlbasjfewjibaslwebafhbwhealbswebfhbehrsfbwejazshufbweahb
        ahwbefhwehjfbalsrhuf aewfbewhbfersakhj awehfbjhwe
      </p>
      <MapContainer
        center={[6.5244, 3.3792]} // Lagos coordinates
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[6.5244, 3.3792]}>
          <Popup>Lagos, Nigeria</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default GoogleMap;
