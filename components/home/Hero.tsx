import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getImagePath } from "@/lib/images";

export default function Hero() {
  return (
    <section
      dir="rtl"
      className="relative isolate flex min-h-155 items-center overflow-hidden bg-[#061522] md:min-h-170"
    >
      {/* Background Image */}
      <div
        className="
          absolute inset-0 -z-20
          bg-cover bg-no-repeat
          bg-position-[52%_center]
          md:bg-position-[55%_center]
          lg:bg-position-[60%_center]
        "
        style={{
          backgroundImage: `url("${getImagePath("Images/hero-dom-3.webp")}")`,
        }}
      />

      {/* Background Overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(-13deg, rgba(3,12,2,0.88) 0%, rgba(3,12,22,0.68) 5%, rgba(3,12,22,0.18) 70%, rgba(3,12,22,0.05) 100%), linear-gradient(0deg, rgba(3,12,22,0.55) 0%, transparent 45%)",
        }}
      />

      {/* Mobile Overlay */}
      <div
        className="
          absolute inset-0 -z-10 md:hidden
          bg-linear-to-t
          from-[#03101c]/80
          via-[#03101c]/25
          to-[#03101c]/20
        "
      />

      {/* Hero Content */}
      <div className="container mx-auto w-full px-5 py-20 md:px-12 md:py-24">
        <div
          className="
            max-w-xl
            border-r-2 border-orange-500
            bg-[#061522]/25
            py-3 pr-4
            [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]
            md:pr-7
          "
        >
          <p className="mb-3 text-sm font-medium tracking-wide text-gray-200 md:mb-5 md:text-base">
            تجربه، تخصص، اعتماد
          </p>

          <h1 className="text-3xl font-black leading-[1.7] text-white md:text-5xl md:leading-[1.6]">
            رعد گستر سهند
            <span className="mt-1 block text-xl leading-relaxed md:text-3xl">
              پیشرو در اجرای پروژه‌های
            </span>
            <span className="block text-xl leading-relaxed text-orange-400 md:text-3xl">
              حفاری، آتشباری و لرزه‌نگاری
            </span>
          </h1>

          <p
            className="
              mt-4 max-w-lg
              text-sm font-medium leading-7 text-white
              md:mt-5 md:text-base md:leading-8
            "
          >
            با بهره‌گیری از دانش فنی روز، تجهیزات مدرن و تیمی متخصص، در کنار شما
            هستیم تا پروژه‌های بزرگ را به واقعیت تبدیل کنیم.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-7 md:gap-5">
            <Link
              href="/projects"
              className="
                group inline-flex items-center gap-2
                rounded-lg bg-orange-500 px-5 py-3
                text-sm font-bold text-white
                transition hover:bg-orange-600
                md:px-6 md:py-3.5
              "
            >
              مشاهده پروژه‌ها
              <ArrowLeft
                size={18}
                className="transition-transform group-hover:-translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
