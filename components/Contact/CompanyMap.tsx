"use client";

import { MapPin, Navigation } from "lucide-react";

const companyAddress = "تهران، خیابان ستارخان، خیابان جهانی نسب، پلاک ۱";

const mapUrl =
  "https://www.openstreetmap.org/?mlat=35.720811&mlon=51.354747#map=17/35.720811/51.354747";

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  companyAddress,
)}`;

export default function CompanyMap() {
  return (
    <div className="flex h-full min-h-80 flex-col">
      <div className="relative min-h-80 flex-1 overflow-hidden">
        <iframe
          title="موقعیت دفتر شرکت رعد گستر سهند"
          src="https://www.openstreetmap.org/export/embed.html?bbox=51.344747%2C35.710811%2C51.364747%2C35.730811&layer=mapnik&marker=35.720811%2C51.354747"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        <div className="pointer-events-none absolute left-3 top-3 z-10 flex items-center gap-2 rounded-xl border border-slate-200 bg-white/95 px-3 py-2.5 shadow-md">
          <MapPin size={20} className="text-orange-500" />

          <div>
            <p className="text-sm font-black text-[#0b2942]">رعد گستر سهند</p>
            <p className="mt-0.5 text-xs text-slate-500">موقعیت دفتر مرکزی</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div className="text-right" dir="rtl">
          <p className="font-bold text-[#0b2942]">آدرس دفتر مرکزی</p>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            {companyAddress}
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
