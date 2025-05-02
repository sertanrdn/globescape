import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import worldGeoJson from '../data/countries.geo.json';
import 'leaflet/dist/leaflet.css';
import '../styles/Map.css';
import { useState } from 'react';
import { CountryModal } from './CountryModal';
import { useFetchData } from "../hooks/useFetchData";
import { useCountryContext } from "../context/useCountryContext";

const countryStyle = {
    fillColor: "transparent", 
    weight: 1,            
    opacity: 1,           
    color: "#d3d3d3"    
  };

export function Map() {
    const [selectedCountryCode, setSelectedCountryCode] = useState(null);
    const [selectedCountryName, setSelectedCountryName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data, isLoading, error } = useFetchData(selectedCountryCode);

    const { visited, wishlist } = useCountryContext();

    const onEachCountry = (feature, layer) => {
        const countryCode = feature.properties.iso_a2;

        let fillColor = 'transparent'; 

        if (visited.includes(countryCode)) {
            fillColor = '#1C7C54';
        } else if (wishlist.includes(countryCode)) {
            fillColor = '#FFCB77';
        }

        layer.setStyle({...countryStyle, fillColor, fillOpacity: 1});
        layer.on({
            click: () => {
                // console.log('Clicked country code:', countryCode);
                setSelectedCountryCode(countryCode);
                setSelectedCountryName(feature.properties.name);
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
            <GeoJSON 
                key={visited.join(',') + wishlist.join(',')}
                data={worldGeoJson} 
                onEachFeature={onEachCountry} 
            />
            </MapContainer>
            <CountryModal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                countryName={selectedCountryName}
                countryData={data}
                isLoading={isLoading}
                error={error}
                countryCode={selectedCountryCode}
            />
        </div>
    );
}