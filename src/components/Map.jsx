import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import worldGeoJson from '../data/countries.geo.json';
import 'leaflet/dist/leaflet.css';
import '../styles/Map.css';
import { useState } from 'react';
import { CountryModal } from './CountryModal';

const countryStyle = {
    fillColor: "transparent", 
    weight: 1,            
    opacity: 1,           
    color: "#d3d3d3"    
  };

export function Map() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onEachCountry = (feature, layer) => {
        layer.setStyle(countryStyle);
        layer.on({
            click: () => {
                const countryCode = feature.properties.iso_a2;
                const countryName = feature.properties.name;
                console.log('Clicked country code:', countryCode);
                setSelectedCountry(countryName);
                setIsModalOpen(true);
            }
        });
    }

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
                maxBounds={[[ -90, -180 ], [ 90, 180 ]]} 
            >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
                noWrap={true}
            />
            <GeoJSON data={worldGeoJson} onEachFeature={onEachCountry} />
            </MapContainer>
            <CountryModal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                countryName={selectedCountry}
            />
        </div>
    );
}