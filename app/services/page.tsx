import { Suspense } from "react";

import ServiceA from "@/components/services/ServiceA";
import ServiceB from "@/components/services/ServiceB";
import ServiceC from "@/components/services/ServiceC";

export default function ServicesPage() {
  return (
    <main dir="rtl">
      <ServiceA />

      <Suspense fallback={<div className="min-h-96" aria-hidden="true" />}>
        <ServiceB />
      </Suspense>

      <ServiceC />
    </main>
  );
}
