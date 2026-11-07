import { ShieldCheck, Settings, Users, Handshake } from "lucide-react";

import { getImagePath } from "@/lib/images";

const advantages = [
  {
    id: 1,
    title: "تعهد به کیفیت",
    description: "تحویل پروژه‌ها با کیفیت و در زمان مقرر",
    icon: Handshake,
  },
  {
    id: 2,
    title: "تیم متخصص",
    description: "بهره‌گیری از نیروهای مجرب و کارآزموده",
    icon: Users,
  },
  {
    id: 3,
    title: "تجهیزات پیشرفته",
    description: "استفاده از ماشین‌آلات و فناوری‌های روز",
    icon: Settings,
  },
  {
    id: 4,
    title: "ایمنی در اولویت",
    description: "رعایت استانداردهای ایمنی در تمام مراحل",
    icon: ShieldCheck,
  },
];

export default function CompetitiveAdvantages() {
  return (
    <section
      dir="ltr"
      className="relative isolate overflow-hidden bg-[#071c2b] text-white md:mx-auto md:max-w-340"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src={getImagePath("Images/image-2.webp")}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[30%_center] sm:object-center"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-linear-to-l from-[#061522]/95 via-[#061522]/75 to-[#061522]/20" />

      {/* Content */}
      <div className="mx-auto grid w-full max-w-360 grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:min-h-107.5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:px-10 lg:py-16">
        {/* Space for Engineer on Desktop */}
        <div className="hidden lg:block" />

        {/* Text and Advantages */}
        <div className="w-full" dir="rtl">
          <div className="mb-8 text-right">
            <span className="mb-3 block text-sm font-bold text-orange-500">
              چرا رعد گستر سهند؟
            </span>

            <h2 className="text-2xl font-black leading-relaxed sm:text-3xl">
              مزیت‌های رقابتی ما
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
              ما با تکیه بر تجربه، تجهیزات مدرن و تیم متخصص، پروژه‌های شما را با
              بالاترین کیفیت و در کوتاه‌ترین زمان ممکن اجرا می‌کنیم.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-0">
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className={`flex flex-col items-center px-3 text-center sm:px-4 ${
                    index !== advantages.length - 1
                      ? "sm:border-l sm:border-white/20"
                      : ""
                  }`}
                >
                  <Icon
                    size={30}
                    strokeWidth={2.2}
                    className="mb-3 shrink-0 text-orange-500 sm:mb-4 sm:h-8.5 sm:w-8.5"
                    aria-hidden="true"
                  />

                  <h3 className="mb-2 text-sm font-extrabold sm:text-base">
                    {item.title}
                  </h3>

                  <p className="max-w-40 text-xs leading-6 text-slate-200 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
