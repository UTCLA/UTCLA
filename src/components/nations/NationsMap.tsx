"use client";

import { MapContainer, TileLayer, Polygon, Popup } from "react-leaflet";
import type { Nation } from "@/types";
import "leaflet/dist/leaflet.css";

interface NationsMapProps {
  nations: Nation[];
}

export default function NationsMap({ nations }: NationsMapProps) {
  return (
    <div className="w-full h-[320px] md:h-[500px] rounded-lg overflow-hidden border border-earth-200 shadow-sm">
      <MapContainer
        center={[-20, 134]}
        zoom={5}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {nations.map((nation) => (
          <Polygon
            key={nation.id}
            positions={nation.territory}
            pathOptions={{
              color: nation.color,
              fillColor: nation.color,
              fillOpacity: 0.45,
              weight: 3,
            }}
          >
            <Popup>
              <div className="font-body">
                <h3 className="font-heading font-bold text-base mb-1">
                  {nation.name}
                </h3>
                <p className="text-sm text-gray-600">{nation.region}</p>
              </div>
            </Popup>
          </Polygon>
        ))}
      </MapContainer>
    </div>
  );
}
