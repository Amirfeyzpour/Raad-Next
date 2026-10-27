import Link from "next/link";
import { ArrowLeft, ChevronLeft, Home, Mail } from "lucide-react";
import { getImagePath } from "@/lib/images";

export default function ContactUsA() {
  return (
    <section
      dir="rtl"
      className="
        relative isolate flex min-h-80 items-center
        overflow-hidden bg-[#041522] text-white
        sm:min-h-95 md:min-h-105 lg:min-h-158
      "
    >
      {/* Background Image */}
      <div
        className="
          absolute inset-0 -z-20
          bg-cover bg-no-repeat bg-center
        "
        style={{
          backgroundImage: `url('${getImagePath("Images/ContactUs.png")}')`,
        }}
      />

      {/* Dark Overlay */}
      <div
        className="
          absolute inset-0 -z-10
          bg-linear-to-r
          from-[#041522] via-[#041522]/60 to-[#041522]/20
        "
      />

      {/* Mobile Overlay */}
      <div
        className="
          absolute inset-0 -z-10
          bg-linear-to-l
          from-[#041522]/10 via-transparent to-[#041522]/10
          md:hidden
        "
      />

      {/* Content */}
      <div className="mx-auto flex w-full max-w-7xl items-center px-5 py-8 sm:px-8 md:px-10 lg:px-12">
        <div className="w-full max-w-2xl">
          {/* Breadcrumb */}
          <nav
            aria-label="مسیر صفحه"
            className="
              mb-5 flex flex-wrap items-center gap-2
              text-xs text-slate-300 sm:mb-7 sm:text-sm
            "
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 transition hover:text-orange-500"
            >
              <Home size={15} />
              صفحه اصلی
            </Link>

            <ChevronLeft size={16} className="text-orange-500" />

            <span className="font-semibold text-orange-500">تماس با ما</span>
          </nav>

          {/* Heading */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="h-12 w-1 shrink-0 rounded-full bg-orange-500 sm:h-16" />

            <div>
              <p className="mb-1 text-xs font-bold text-orange-400 sm:text-sm">
                رعد گستر سهند
              </p>

              <h1 className="text-3xl font-black leading-relaxed sm:text-4xl lg:text-5xl">
                تماس با ما
              </h1>
            </div>
          </div>

          {/* Description */}
          <p
            className="
              mt-4 max-w-xl text-justify
              text-xs leading-7 text-slate-200
              sm:mt-5 sm:text-sm sm:leading-8
            "
          >
            ما آماده پاسخ‌گویی به سوالات و درخواست‌های شما هستیم. برای کسب
            اطلاعات بیشتر درباره خدمات و فعالیت‌های رعد گستر سهند، می‌توانید از
            راه‌های ارتباطی زیر با ما در تماس باشید.
          </p>

          {/* Contact Button */}
          <a
            href="#contact-methods"
            className="
              mt-5 inline-flex items-center gap-2.5
              rounded-lg bg-orange-500 px-4 py-2.5
              text-xs font-bold text-white
              transition hover:-translate-y-0.5 hover:bg-orange-600
              sm:mt-6 sm:px-5 sm:py-3 sm:text-sm
            "
          >
            <Mail size={17} />
            راه‌های ارتباطی
            <ArrowLeft size={17} />
          </a>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-5 flex gap-1.5 sm:left-8 lg:left-12">
        <span className="h-1 w-8 rounded-full bg-orange-500" />
        <span className="h-1 w-4 rounded-full bg-white/70" />
        <span className="h-1 w-2 rounded-full bg-white/30" />
      </div>
    </section>
  );
}
