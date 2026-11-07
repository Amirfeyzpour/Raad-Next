import { getImagePath } from "@/lib/images";

export default function AboutSection() {
  return (
    <section
      dir="ltr"
      className="relative isolate flex min-h-[600px] items-center overflow-hidden bg-[#061522] px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[650px] lg:px-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-[position:86%_center] sm:bg-center lg:bg-[position:center_55%]"
        style={{
          backgroundImage: `url("${getImagePath("Images/About/About-us.webP")}")`,
        }}
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-t from-[#061522] via-[#061522]/10 to-[#061522]/100 sm:bg-gradient-to-r sm:from-[#061522]/95 sm:via-[#061522]/65 sm:to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-xl text-white" dir="rtl">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-4">
            <span className="h-1 w-12 rounded-full bg-orange-500 sm:w-14" />

            <span className="text-sm font-bold text-orange-500 sm:text-base">
              درباره ما
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            رعد گستر سهند
          </h2>

          {/* Subtitle */}
          <h3 className="mb-5 text-base font-bold leading-7 text-gray-200 sm:text-lg sm:leading-8 lg:text-xl">
            با تجربه، تعهد و تخصص، در کنار پروژه‌های بزرگ
          </h3>

          {/* Description */}
          <p className="text-sm leading-7 text-gray-300 sm:text-base sm:leading-8 lg:leading-9">
            شرکت رعد گستر سهند با تکیه بر سال‌ها تجربه و تیمی متخصص، در
            زمینه‌های عمرانی، معدنی، سدسازی، حفاری و اکتشافات فعالیت می‌کند. ما
            با بهره‌گیری از تجهیزات مدرن، نیروی انسانی مجرب و رویکردی حرفه‌ای،
            تلاش داریم تا نقشی مؤثر در توسعه زیرساخت‌های کشور ایفا کنیم.
          </p>

          {/* Accent */}
          <div className="mt-7 flex items-center gap-3 sm:mt-8">
            <span className="h-9 w-1 shrink-0 rounded-full bg-orange-500" />

            <span className="text-xs font-semibold text-gray-300 sm:text-sm">
              تخصص در اجرا؛ تعهد در نتیجه
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
