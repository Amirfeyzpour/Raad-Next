"use client";

import dynamic from "next/dynamic";

const MapPlaceContent = dynamic(() => import("./MapPlaceContent"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[350px] items-center justify-center rounded-2xl bg-slate-100">
      <p className="text-sm text-slate-500">در حال بارگذاری نقشه...</p>
    </div>
  ),
});

export default function MapPlace() {
  return <MapPlaceContent />;
}
