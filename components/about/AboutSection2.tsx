import { ShieldCheck, Users, Settings, UserRoundCheck } from "lucide-react";
import { getImagePath } from "@/lib/images";

const features = [
  {
    id: 1,
    title: "تعهد به کیفیت",
    description: "رعایت استانداردهای ایمنی و فنی در همه پروژه‌ها",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "تیم تخصصی",
    description: "همکاری با نیروهای مجرب و حرفه‌ای",
    icon: Users,
  },
  {
    id: 3,
    title: "تجهیزات مدرن",
    description: "استفاده از به‌روزترین ماشین‌آلات و فناوری‌ها",
    icon: Settings,
  },
  {
    id: 4,
    title: "مشتری‌مداری",
    description: "پاسخ‌گویی سریع و شفاف به نیازهای مشتریان",
    icon: UserRoundCheck,
  },
];

export default function AboutSection2() {
  return (
    <section
      dir="rtl"
      className="bg-slate-50 px-4 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* تصویر */}
          <div className="relative">
            <div className="absolute -right-2 -top-2 h-20 w-20 rounded-tr-xl border-r-4 border-t-4 border-orange-500 sm:-right-3 sm:-top-3" />

            <img
              src={getImagePath("Images/About/image-1.png")}
              alt="تجهیزات و ماشین‌آلات پروژه‌های رعد گستر سهند"
              className="relative z-10 aspect-4/3 w-full rounded-xl object-cover shadow-xl transition hover:border hover:border-orange-300"
              loading="lazy"
            />

            <div className="absolute -bottom-2 -left-2 h-20 w-20 rounded-bl-xl border-b-4 border-l-4 border-orange-500 sm:-bottom-3 sm:-left-3" />
          </div>

          {/* متن و ویژگی‌ها */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="mb-3 block text-sm font-extrabold text-orange-500 sm:text-base">
                درباره شرکت
              </span>

              <h2 className="mb-6 text-2xl font-black leading-relaxed text-[#0b2942] sm:text-3xl lg:text-4xl">
                درباره رعد گستر سهند
              </h2>

              <p className="text-justify text-sm leading-8 text-slate-600 sm:text-base sm:leading-9">
                شرکت رعد گستر سهند در سال ۱۳۸۳ تأسیس شد و با تکیه بر سال‌ها
                تجربه و تیمی متخصص، در زمینه مشارکت در پروژه‌های عمرانی، معدنی،
                سدسازی، تونل‌کاری، حفاری، اکتشافات، ساختمان‌سازی و سایر حوزه‌ها
                فعالیت می‌کند. ما با بهره‌گیری از تجهیزات مدرن، نیروی انسانی
                مجرب و رویکردی حرفه‌ای، تلاش داریم تا نقشی مؤثر در توسعه
                زیرساخت‌های کشور ایفا کنیم.
              </p>

              <p className="mt-4 text-justify text-sm leading-8 text-slate-600 sm:text-base sm:leading-9">
                هدف ما ارائه خدماتی باکیفیت، ایمن و مطابق با استانداردهای روز
                دنیاست تا بتوانیم اعتماد مشتریان و همکاران خود را به بهترین شکل
                جلب کنیم.
              </p>
            </div>

            {/* ویژگی‌های شرکت */}
            <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {features.map(feature => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.id}
                    className="flex flex-col items-center px-2 text-center"
                  >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#0b2942] text-orange-500 transition duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:text-white sm:h-20 sm:w-20">
                      <Icon
                        size={34}
                        strokeWidth={1.8}
                        className="sm:h-9 sm:w-9"
                      />
                    </div>

                    <h3 className="mb-2 text-sm font-black leading-6 text-[#0b2942] sm:text-base lg:text-sm xl:text-base">
                      {feature.title}
                    </h3>

                    <p className="text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7 lg:text-xs xl:text-sm">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
