import { Waves, Pickaxe, Truck, Search, ArrowLeft } from "lucide-react";
import { getImagePath } from "@/lib/images";

const specialties = [
  {
    id: 1,
    title: "سدسازی و پروژه‌های عمرانی",
    description:
      "اجرای پروژه‌های سدسازی، راه‌سازی و سازه‌های صنعتی با بهره‌گیری از تجهیزات مدرن و تیم متخصص.",
    image: "Images/Specialties/image-1.webP",
    icon: Waves,
  },
  {
    id: 2,
    title: "حفاری و آتشباری",
    description:
      "اجرای عملیات حفاری و آتشباری در پروژه‌های معدنی و عمرانی با رعایت استانداردهای ایمنی.",
    image: "Images/Specialties/image-2.webP",
    icon: Pickaxe,
  },
  {
    id: 3,
    title: "استخراج و عملیات معدنی",
    description:
      "استخراج و جابه‌جایی مواد معدنی با استفاده از ماشین‌آلات تخصصی و روش‌های اجرایی مناسب.",
    image: "Images/Specialties/image-3.webP",
    icon: Truck,
  },
  {
    id: 4,
    title: "اکتشاف و آماده‌سازی پروژه‌ها",
    description:
      "بررسی‌های اولیه، مطالعات زمین‌شناسی و آماده‌سازی محل اجرای پروژه‌ها.",
    image: "Images/Specialties/image-4.webP",
    icon: Search,
  },
];

export default function SpecialtiesSection() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#041827] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-10"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* عنوان بخش */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-1 w-10 rounded-full bg-orange-500" />
            <span className="text-sm font-bold text-orange-500 sm:text-base">
              حوزه‌های تخصصی
            </span>
            <span className="h-1 w-10 rounded-full bg-orange-500" />
          </div>

          <h2 className="text-xl font-black leading-relaxed sm:text-3xl lg:text-4xl">
            توانمندی‌های اجرایی
            <br />
            <span className="pt-4 text-4xl text-orange-500">رعد گستر سهند</span>
          </h2>

          <p className="mt-4 text-sm leading-8 text-slate-300 sm:text-base">
            تجربه، دانش فنی و تجهیزات تخصصی در خدمت اجرای پروژه‌های بزرگ.
          </p>
        </div>

        {/* کارت‌های تخصص */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map(item => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="group relative isolate flex min-h-[490px] flex-col overflow-hidden rounded-xl border border-sky-900/70 bg-[#031827] transition duration-300 hover:-translate-y-1 hover:border-orange-500/60 hover:shadow-[0_16px_45px_rgba(0,0,0,0.3)]"
              >
                {/* تصویر */}
                <div className="absolute inset-x-0 top-0 h-[60%] overflow-hidden">
                  <img
                    src={getImagePath(item.image)}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* لایه تیره روی تصویر */}
                <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent from-25% via-[#031827]/10 via-40% to-[#031827] to-[80%]" />

                {/* محتوای کارت */}
                <div className="relative z-10 mt-auto flex flex-1 flex-col justify-end px-5 pb-5 pt-56 sm:px-6">
                  <div className="mb-4 flex justify-start">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-orange-500/50 bg-[#041827]/90 text-orange-500 shadow-lg backdrop-blur-sm transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                      <Icon size={30} strokeWidth={2} />
                    </div>
                  </div>

                  <h3 className="mb-3 text-base font-extrabold leading-8 text-white sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>

                  <div className="mx-auto mt-5 flex justify-start">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-500 text-orange-500 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                      <ArrowLeft size={18} />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
