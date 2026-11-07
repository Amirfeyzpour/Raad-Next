import { Award, GraduationCap, BriefcaseBusiness } from "lucide-react";
import { getImagePath } from "@/lib/images";

const managementData = [
  {
    id: 1,
    title: "مدیرعامل",
    subtitle: "غلامرضا سروش نیا",
    description:
      "بیش از ۳۰ سال سابقه فعالیت تخصصی و عضویت در هیئت‌مدیره انجمن صنفی شرکت‌های مهندسی آتشکاری، با تجربه ارزشمند در توسعه و ارتقای این صنعت.",
    image: "Images/About/sorosh.webP",
    stats: [
      { icon: BriefcaseBusiness, label: "سابقه کاری", value: "—" },
      { icon: GraduationCap, label: "مدرک تحصیلی", value: "—" },
      { icon: Award, label: "حوزه تخصص", value: "مدیریت" },
    ],
  },
  {
    id: 2,
    title: "رئیس هیئت‌مدیره",
    subtitle: "محمدعلی نیل زن",
    description:
      "بیش از ۳۰ سال سابقه فعالیت در حوزه خدمات تخصصی معرفی‌شده و تجربه ارزشمند در کارشناسی و اجرای عملیات ژئوفیزیکی مرتبط با اکتشاف هیدروکربن‌ها.",
    image: "Images/About/nilzan.webP",
    stats: [
      { icon: BriefcaseBusiness, label: "سابقه کاری", value: "—" },
      { icon: GraduationCap, label: "مدرک تحصیلی", value: "—" },
      { icon: Award, label: "حوزه تخصص", value: "عمران و معدن" },
    ],
  },
];

export default function AboutManagement() {
  return (
    <section
      dir="rtl"
      className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* عنوان بخش */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-3 text-sm font-bold text-orange-500">
            <span className="h-0.5 w-8 bg-orange-500" />
            مدیریت و رهبری
            <span className="h-0.5 w-8 bg-orange-500" />
          </div>

          <h2 className="text-2xl font-black leading-relaxed text-[#0b2942] sm:text-3xl lg:text-4xl">
            آشنایی با ساختار مدیریتی شرکت
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base">
            ترکیبی از تجربه، تخصص و مدیریت هدفمند برای اجرای پروژه‌ها و دستیابی
            به اهداف راهبردی رعد گستر سهند
          </p>
        </div>

        {/* کارت‌های مدیریتی */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-8">
          {managementData.map(item => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
            >
              <div className="flex flex-col gap-6 p-5 sm:flex-row sm:items-center sm:p-7">
                {/* تصویر */}
                <div className="relative mx-auto w-full shrink-0 sm:mx-0 sm:w-36 md:w-40 lg:w-44">
                  <div className="absolute -right-1 -top-1 z-10 h-10 w-10 rounded-tr-xl border-r-4 border-t-4 border-orange-500" />

                  <img
                    src={getImagePath(item.image)}
                    alt={item.title}
                    loading="lazy"
                    className="aspect-[4/5] w-full rounded-xl bg-slate-100 object-cover"
                  />

                  <div className="absolute -bottom-1 -left-1 h-10 w-10 rounded-bl-xl border-b-4 border-l-4 border-orange-500" />
                </div>

                {/* اطلاعات */}
                <div className="min-w-0 flex-1">
                  <span className="text-sm font-bold text-orange-500 md:text-base">
                    {item.subtitle}
                  </span>

                  <h3 className="mt-2 text-xl font-black text-[#0b2942]">
                    {item.title}
                  </h3>

                  <div className="mt-3 h-1 w-12 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-20" />

                  <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* نوار تزئینی پایین کارت */}
              <div className="h-1 w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
