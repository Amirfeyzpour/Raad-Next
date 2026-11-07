"use client";

import {
  Pickaxe,
  Drill,
  Mountain,
  Warehouse,
  Activity,
  Building2,
  Construction,
  Ship,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { getImagePath } from "@/lib/images";

const activities = [
  {
    id: 1,
    title: "عملیات آتشباری",
    description:
      "ارائه خدمات تخصصی در پروژه‌های راه‌سازی، معدنی، سدسازی و خطوط لوله با رعایت الزامات فنی و ایمنی.",
    icon: Pickaxe,
    image: "Images/Servieces.webp",
  },
  {
    id: 2,
    title: "عملیات حفاری",
    description:
      "انجام عملیات حفاری با دستگاه‌های پنوماتیک و هیدرولیک متناسب با نیاز پروژه‌های عمرانی و معدنی.",
    icon: Drill,
    image: "Images/Servieces.webp",
  },
  {
    id: 3,
    title: "عملیات استخراج",
    description:
      "ارائه خدمات استخراج مواد معدنی و بهره‌برداری از معادن با تکیه بر دانش فنی و تجهیزات تخصصی.",
    icon: Mountain,
    image: "Images/Servieces.webp",
  },
  {
    id: 4,
    title: "ساخت انبارک‌های مواد ناریه",
    description:
      "اجرای پروژه‌های مرتبط با ساخت انبارک‌ها مطابق ضوابط فنی و الزامات قانونی و ایمنی.",
    icon: Warehouse,
    image: "Images/Servieces.webp",
  },
  {
    id: 5,
    title: "عملیات لرزه‌نگاری",
    description:
      "ارائه خدمات لرزه‌نگاری و برداشت داده‌های ژئوفیزیکی برای بررسی ساختارهای زمین‌شناسی و پروژه‌های اکتشافی.",
    icon: Activity,
    image: "Images/Servieces.webp",
  },
  {
    id: 6,
    title: "ساختمان‌سازی و شهرک‌سازی",
    description:
      "اجرای پروژه‌های ساختمانی و شهرک‌سازی با تمرکز بر کیفیت، مدیریت منابع و اصول مهندسی.",
    icon: Building2,
    image: "Images/Servieces.webp",
  },
  {
    id: 7,
    title: "اجرای تونل و تحکیم",
    description:
      "ارائه خدمات تونل‌سازی و تحکیم زمین با روش‌هایی مانند نصب مش و شاتکریت متناسب با شرایط پروژه.",
    icon: Construction,
    image: "Images/Servieces.webp",
  },
  {
    id: 8,
    title: "صادرات و واردات کالا",
    description:
      "ارائه خدمات بازرگانی و جابه‌جایی کالا از مسیرهای زمینی، هوایی و دریایی.",
    icon: Ship,
    image: "Images/Servieces.webp",
  },
];

const ServiceB = () => {
  return (
    <section dir="rtl" className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <span className="mb-4 block font-bold text-orange-500">
            حوزه فعالیت
          </span>

          <h2 className="text-2xl font-extrabold leading-relaxed text-slate-900 sm:text-3xl lg:text-4xl">
            تخصص ما، اجرای پروژه‌های بزرگ
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
            رعد گستر سهند با تکیه بر تجربه اجرایی، دانش فنی و نیروی متخصص، در
            زمینه‌های مختلف عمرانی، معدنی و بازرگانی فعالیت می‌کند.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className="services-swiper px-2! pb-14! pt-3!"
        >
          {activities.map(activity => {
            const Icon = activity.icon;

            return (
              <SwiperSlide key={activity.id} className="h-auto!">
                <article
                  className="group relative flex h-93 flex-col items-center justify-end overflow-hidden rounded-2xl bg-slate-900 p-5 text-center text-white shadow-lg shadow-slate-900/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/30"
                  style={{
                    backgroundImage: `url("${getImagePath(activity.image)}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/70 to-slate-900/20 transition-all duration-500 group-hover:via-slate-900/80" />

                  <div className="absolute right-0 top-0 h-1 w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />

                  <div className="relative z-10 flex w-full flex-col items-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-orange-400/40 bg-orange-500/15 text-orange-400">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>

                    <h3 className="mb-3 text-lg font-extrabold leading-8 text-white">
                      {activity.title}
                    </h3>

                    <p className="text-sm leading-7 text-slate-200">
                      {activity.description}
                    </p>

                    <div className="mt-5 h-0.5 w-10 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-40" />
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <style jsx global>{`
        .services-swiper .swiper-button-next,
        .services-swiper .swiper-button-prev {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #f97316;
          color: white;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
        }

        .services-swiper .swiper-button-next::after,
        .services-swiper .swiper-button-prev::after {
          font-size: 16px;
          font-weight: 800;
        }

        .services-swiper .swiper-pagination-bullet {
          background: #94a3b8;
          opacity: 1;
        }

        .services-swiper .swiper-pagination-bullet-active {
          width: 20px;
          border-radius: 8px;
          background: #f97316;
        }
      `}</style>
    </section>
  );
};

export default ServiceB;
