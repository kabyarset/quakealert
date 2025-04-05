// pages/index.tsx (or HomePage.tsx)
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, AlertCircle, Satellite } from "lucide-react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function HomePage() {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1>QuakeAlert</h1>
        <p>Real-time earthquake detection and alerts powered by smart sensors and AI.</p>
      </header>

      {/* Earthquake Map Section */}
      <section className="grid gap-8 grid-cols-1 md:grid-cols-2 mb-16">
        <Card className="card">
          <div className="card-content">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-orange-400 mr-2" />
              <h2>Live Earthquake Map</h2>
            </div>
            <div className="h-64 rounded-xl overflow-hidden">
              <Map />
            </div>
          </div>
        </Card>

        {/* Latest Alerts Section */}
        <Card className="card">
          <div className="card-content">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-6 h-6 text-red-400 mr-2" />
              <h2>Latest Alerts</h2>
            </div>
            <ul className="text-slate-300 space-y-2">
              <li>🔔 3.2M – Tokyo, Japan – 2 mins ago</li>
              <li>🔔 4.7M – Santiago, Chile – 10 mins ago</li>
              <li>🔔 2.9M – Los Angeles, CA – 15 mins ago</li>
            </ul>
          </div>
        </Card>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Smart Sensors */}
          <div className="card">
            <Satellite className="icon" />
            <h3>Smart Sensors</h3>
            <p>Detect tremors instantly and stream real-time data to the cloud.</p>
          </div>
          {/* AI Detection */}
          <div className="card">
            <AlertCircle className="icon" />
            <h3>AI Detection</h3>
            <p>Machine learning analyzes patterns to detect early signs of earthquakes.</p>
          </div>
          {/* Instant Alerts */}
          <div className="card">
            <MapPin className="icon" />
            <h3>Instant Alerts</h3>
            <p>Alerts are sent via SMS, email, and push notifications within seconds.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Stay Informed</h2>
        <p>Sign up for alerts and stay ahead of seismic activity near you.</p>
        <Button className="cta-button">Get Alerts</Button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        © 2025 QuakeAlert. Powered by AI and open seismic data.
      </footer>
    </div>
  );
}
