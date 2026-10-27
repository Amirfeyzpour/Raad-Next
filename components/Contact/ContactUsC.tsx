import Image from "next/image";
import MapPlace from "./MapPlaceContent";
import { getImagePath } from "@/lib/images";

export default function ContactUsC() {
  return (
    <section dir="rtl" className="bg-slate-50 px-4 py-14 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* عکس و نقشه */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {/* بخش تصویر و توضیحات */}
          <div className="flex min-h-113 flex-col overflow-hidden rounded-2xl bg-white shadow-sm sm:min-h-125">
            {/* تصویر */}
            <div className="relative h-64 shrink-0 overflow-hidden sm:h-72">
              <Image
                src={getImagePath("Images/Contact.png")}
                alt="فعالیت‌های مهندسی و معدنی رعد گستر سهند"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#041522]/60 to-transparent" />
            </div>

            {/* توضیحات */}
            <div className="flex flex-1 gap-4 p-5 sm:gap-5 sm:p-7">
              {/* خط نارنجی کنار متن */}
              <div className="w-1 shrink-0 self-stretch rounded-full bg-orange-500" />

              <div className="min-w-0 py-1">
                <h3 className="text-xl font-black leading-relaxed text-[#0b2942] sm:text-2xl">
                  همراه شما در مسیر پیشرفت
                </h3>

                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base sm:leading-9">
                  رعد گستر سهند با تکیه بر دانش فنی، تخصص مهندسی و تجربه در
                  اجرای پروژه‌های صنعتی و عمرانی، در مسیر توسعه و آبادانی همراه
                  شماست. ما با تمرکز بر فعالیت‌های معدنی، حفاری، عملیات انفجاری
                  و پروژه‌های مرتبط با سدسازی، تلاش می‌کنیم راهکارهایی متناسب با
                  نیازهای کارفرمایان ارائه دهیم و در اجرای پروژه‌ها، کیفیت،
                  ایمنی و تعهد حرفه‌ای را در اولویت قرار دهیم.
                </p>
              </div>
            </div>
          </div>

          {/* نقشه */}
          <div className="min-w-0">
            <MapPlace />
          </div>
        </div>
      </div>
    </section>
  );
}
