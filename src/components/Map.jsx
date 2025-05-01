import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import '../styles/Map.css';

export function Map() {
    return (
        <div className="map-wrapper">
            <MapContainer 
                center={[20, 0]}
                zoom={2}
                minZoom={2}
                maxZoom={6}
                scrollWheelZoom={true}
                className="leaflet-map"
                worldCopyJump={false} 
                maxBoundsViscosity={1.0}
                maxBounds={[[ -90, -200 ], [ 90, 200 ]]} 
            >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
                noWrap={true}
            />
            </MapContainer>
        </div>
    );
}