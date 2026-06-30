import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import { useEffect } from "react";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function ChangeMapView({ center }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, 14, {
      animate: true,
    });
  }, [center, map]);

  return null;
}

function MapSection({ report }) {

  const position = [
    report.coordinates.lat,
    report.coordinates.lng,
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-2xl font-bold">
            Site Location
          </h2>

          <p className="text-slate-400 mt-2">
            AI selected location
          </p>

        </div>

      </div>

      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom
        className="h-[430px] rounded-2xl"
      >

        <ChangeMapView center={position} />

        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>

          <Popup>

            <div>

              <h3 className="font-bold">
                GeoCharge
              </h3>

              <p className="mt-2">
                Project Score :
                {report.projectScore}
              </p>

              <p>
                Risk :
                {report.risk}
              </p>

              <p>
                Revenue :
                {report.revenue}
              </p>

            </div>

          </Popup>

        </Marker>

      </MapContainer>

      <div className="mt-5 grid grid-cols-2 gap-4">

        <div className="bg-slate-950 rounded-xl p-4">

          <p className="text-slate-500 text-sm">
            Latitude
          </p>

          <h3 className="text-lg font-semibold mt-1">
            {report.coordinates.lat}
          </h3>

        </div>

        <div className="bg-slate-950 rounded-xl p-4">

          <p className="text-slate-500 text-sm">
            Longitude
          </p>

          <h3 className="text-lg font-semibold mt-1">
            {report.coordinates.lng}
          </h3>

        </div>

      </div>

    </div>
  );
}

export default MapSection;