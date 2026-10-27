import ServiceA from "@/components/services/ServiceA";
import ServiceB from "@/components/services/ServiceB";
import ServiceC from "@/components/services/ServiceC";

export default function ServicesPage() {
  return (
    <main dir="rtl">
      <ServiceA />
      <ServiceB/>
      <ServiceC/>
    </main>
  );
}
