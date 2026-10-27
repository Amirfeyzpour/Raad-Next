"use client";

import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { MapPin, Navigation } from "lucide-react";
import "leaflet/dist/leaflet.css";

const companyPosition: [number, number] = [35.720811, 51.354747];

function MapResize() {
  const map = useMap();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      map.invalidateSize();
    });

    return () => cancelAnimationFrame(frame);
  }, [map]);

  return null;
}

export default function MapPlaceContent() {
  const directionsUrl = "https://maps.app.goo.gl/4Ggyk5udraAcFhhi7";

  const companyIcon = useMemo(
    () =>
      L.divIcon({
        className: "",
        html: `
          <div style="
            width: 38px;
            height: 38px;
            background: #f97316;
            border: 4px solid white;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            box-shadow: 0 3px 12px rgba(0,0,0,0.35);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <div style="
              width: 10px;
              height: 10px;
              background: white;
              border-radius: 50%;
            "></div>
          </div>
        `,
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38],
      }),
    [],
  );

  return (
    <div
      dir="rtl"
      className="flex h-full min-h-130 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg lg:min-h-163"
    >
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-5 py-5 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10">
            <MapPin size={25} className="text-orange-500" />
          </div>

          <div>
            <h3 className="text-base font-black text-[#0b2942] sm:text-lg">
              موقعیت دفتر مرکزی
            </h3>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              شرکت رعد گستر سهند
            </p>
          </div>
        </div>

        <span className="hidden rounded-lg bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600 sm:block">
          تهران
        </span>
      </div>

      <div className="relative z-0 min-h-80 flex-1 sm:min-h-100">
        <MapContainer
          center={companyPosition}
          zoom={16}
          scrollWheelZoom={false}
          className="h-full min-h-80 w-full sm:min-h-100"
        >
          <MapResize />

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={companyPosition} icon={companyIcon}>
            <Popup>
              <div dir="rtl" className="text-center">
                <strong>شرکت رعد گستر سهند</strong>
                <p>موقعیت دفتر شرکت</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="flex flex-col gap-4 border-t border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-bold text-[#0b2942]">منتظر دیدار شما هستیم</p>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            برای مشاهده مسیر، نقشه را در گوگل مپ باز کنید.
          </p>
        </div>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0b2942] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-500"
        >
          <Navigation size={18} />
          مسیریابی
        </a>
      </div>
    </div>
  );
}
