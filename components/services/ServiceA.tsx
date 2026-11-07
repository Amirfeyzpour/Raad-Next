"use client";

import { getImagePath } from "@/lib/images";

const ServiceA = () => {
  return (
    <section
      className="relative flex min-h-75 w-full items-center overflow-hidden bg-cover bg-center bg-no-repeat md:min-h-150"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(2, 28, 43, 0.08) 0%,
            rgba(2, 28, 43, 0.35) 40%,
            rgba(2, 28, 43, 0.95) 100%
          ),
          url('${getImagePath("Images/hero-dom.webP")}')
        `,
      }}
    >
      <div className="flex w-full items-center justify-start px-6 py-10 md:px-[7%]">
        <div className="w-full max-w-115 text-right text-white">
          <span className="mb-3 inline-flex items-center gap-2 font-bold text-orange-500">
            <span className="h-0.5 w-5 bg-orange-500" />
            رعد گستر سهند
          </span>

          <h1 className="mb-4 text-2xl font-extrabold leading-relaxed md:text-4xl">
            خدمات تخصصی حفاری و آتشباری
          </h1>

          <p className="text-sm leading-8 text-slate-200 md:text-base">
            رعد گستر سهند با بهره‌گیری از پرسنل مجرب و متخصص، در زمینه حفاری،
            تأمین و حمل مواد ناریه، نگهداری ایمن، اجرای عملیات آتشباری کنترل‌شده
            و لرزه‌نگاری فعالیت می‌کند. ما با تکیه بر دانش فنی و تجربه، در مسیر
            توسعه زیرساخت‌های عمرانی، معدنی و راه‌سازی کشور گام برمی‌داریم.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceA;
