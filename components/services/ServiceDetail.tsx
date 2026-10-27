import Image from "next/image";
import { getImagePath } from "@/lib/images";
import type { ServiceData } from "./servicesData";

type ServiceDetailProps = {
  service: ServiceData;
};

const ServiceDetail = ({ service }: ServiceDetailProps) => {
  const isNavy = service.background === "navy";
  const isImageLeft = service.imagePosition === "left";

  return (
    <section
      dir="rtl"
      className={`w-full min-w-0 py-2 ${
        isNavy ? "bg-[#142D4E]" : "bg-white"
      }`}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 md:grid-cols-2 md:gap-12 lg:px-8">
        {/* تصویر */}
        <div
          className={`relative min-w-0 ${
            isImageLeft ? "md:order-1" : "md:order-2"
          }`}
        >
          <div className="relative h-64 w-full overflow-hidden rounded-xl md:h-96">
            <Image
              src={getImagePath(service.image)}
              alt={service.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* توضیحات */}
        <div
          className={`min-w-0 ${
            isImageLeft ? "md:order-2" : "md:order-1"
          }`}
        >
          <span className="mb-3 block text-sm font-bold text-orange-500">
            حوزه فعالیت {service.number}
          </span>

          <h2
            className={`mb-5 text-2xl font-extrabold leading-relaxed md:text-4xl ${
              isNavy ? "text-white" : "text-[#142D4E]"
            }`}
          >
            {service.title}
          </h2>

          <p
            className={`text-justify text-base leading-8 md:text-lg md:leading-9 ${
              isNavy ? "text-slate-200" : "text-slate-600"
            }`}
          >
            {service.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;