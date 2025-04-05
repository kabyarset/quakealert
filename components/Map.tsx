"use client";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView([20, 0], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Sample marker (you can later replace this with real earthquake data)
    L.marker([35.6895, 139.6917])
      .addTo(map)
      .bindPopup("Tokyo, Japan - 3.2M");

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} className="h-full w-full" />;
}

