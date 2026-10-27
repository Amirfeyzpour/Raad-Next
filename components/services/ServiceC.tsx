import ServiceDetail from "./ServiceDetail";
import servicesData from "./servicesData";

export default function ServiceC() {
  return (
    <section>
      {servicesData.map(service => (
        <ServiceDetail key={service.id} service={service} />
      ))}
    </section>
  );
}
