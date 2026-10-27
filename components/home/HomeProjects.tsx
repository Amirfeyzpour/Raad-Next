"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import {
  Drill,
  Pickaxe,
  Warehouse,
  Activity,
  Building2,
  Construction,
  Globe,
  MoveLeft,
  ArrowLeft,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import { getImagePath } from "@/lib/images";

const projects = [
  {
    id: 1,
    title: "عملیات آتشباری",
    description: "اجرای عملیات تخصصی آتشباری در پروژه‌های عمرانی و معدنی",
    icon: Activity,
    image: "Images/projects/Blasting-operations.png",
  },
  {
    id: 2,
    title: "عملیات حفاری",
    description: "حفاری تخصصی با تجهیزات پنوماتیک و هیدرولیک",
    icon: Drill,
    image: "Images/projects/Excavation.png",
  },
  {
    id: 3,
    title: "عملیات استخراج",
    description: "استخراج مواد معدنی با رویکرد مهندسی و تخصصی",
    icon: Pickaxe,
    image: "Images/projects/Extraction.png",
  },
  {
    id: 4,
    title: "ساخت انبارک‌های مواد ناریه",
    description: "ساخت و اجرای انبارک‌ها مطابق ضوابط و استانداردهای مربوط",
    icon: Warehouse,
    image: "Images/projects/Explosive-materials.png",
  },
  {
    id: 5,
    title: "عملیات لرزه‌نگاری",
    description: "بررسی و پایش ارتعاشات ناشی از عملیات اجرایی",
    icon: Activity,
    image: "Images/projects/Seismography.png",
  },
  {
    id: 6,
    title: "ساختمان‌سازی و شهرک‌سازی",
    description: "اجرای پروژه‌های ساختمانی و توسعه زیرساخت‌های عمرانی",
    icon: Building2,
    image: "Images/projects/Construction.png",
  },
  {
    id: 7,
    title: "اجرای تونل و عملیات تحکیم",
    description: "اجرای تونل، پایدارسازی و عملیات تحکیم سازه‌ها",
    icon: Construction,
    image: "Images/projects/Tunnel.png",
  },
  {
    id: 8,
    title: "صادرات و واردات کالا",
    description: "تأمین و مبادله کالا و تجهیزات مورد نیاز پروژه‌ها",
    icon: Globe,
    image: "Images/projects/Export.png",
  },
];

export default function HomeProjects() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      dir="rtl"
      className="w-full overflow-hidden bg-white py-16 text-[#102a41] md:py-24"
    >
      <div className="mx-auto w-full max-w-350 px-4 md:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-orange-500" />
              <span className="text-sm font-bold text-orange-500">
                توانمندی‌های رعد گستر سهند
              </span>
            </div>

            <h2 className="text-2xl font-black leading-relaxed md:text-4xl">
              حوزه‌های فعالیت و پروژه‌های ما
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
              از عملیات تخصصی حفاری و آتشباری تا پروژه‌های عمرانی، همراه شما در
              مسیر اجرای پروژه‌های بزرگ و تخصصی هستیم.
            </p>
          </div>

          <Link
            href="/projects"
            className="hidden shrink-0 items-center gap-2 text-sm font-bold text-[#102a41] transition-colors hover:text-orange-500 md:flex"
          >
            مشاهده همه پروژه‌ها
            <ArrowLeft size={18} />
          </Link>
        </div>

        {/* Projects Slider */}
        <div className="relative mx-auto w-full min-w-0 max-w-full">
          {isMounted ? (
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={16}
              slidesPerView={1.15}
              navigation
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={700}
              breakpoints={{
                480: {
                  slidesPerView: 1.7,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 2.2,
                  spaceBetween: 18,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 22,
                },
              }}
              className="mx-0! w-full! max-w-full!"
            >
              {projects.map(project => {
                const Icon = project.icon;

                return (
                  <SwiperSlide key={project.id} className="h-auto!">
                    <Link
                      href={`/projects?category=${project.id}`}
                      className="group relative block h-85 overflow-hidden rounded-2xl bg-[#102a41] shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:h-92.5"
                    >
                      <img
                        src={getImagePath(project.image)}
                        alt={project.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-[#061522] via-[#061522]/65 to-[#061522]/10" />

                      <span className="absolute left-5 top-5 text-4xl font-black text-white/30">
                        {String(project.id).padStart(2, "0")}
                      </span>

                      <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-orange-400 backdrop-blur-md transition-all duration-300 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white">
                        <Icon size={25} strokeWidth={1.8} />
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                        <div className="mb-3 h-1 w-10 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-16" />

                        <h3 className="text-lg font-black leading-8 text-white md:text-xl">
                          {project.title}
                        </h3>

                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-300">
                          {project.description}
                        </p>

                        <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">
                          <span className="text-xs font-bold text-gray-300">
                            مشاهده حوزه فعالیت
                          </span>

                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white transition-transform duration-300 group-hover:-translate-x-1">
                            <ArrowLeft size={18} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}

              {/* View More */}
              <SwiperSlide className="h-auto!">
                <Link
                  href="/projects"
                  className="group flex h-85 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-5 transition-all duration-300 hover:border-orange-400 hover:bg-orange-50 md:h-92.5"
                >
                  <div className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-orange-500 bg-white text-[#102a41] shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white md:h-36 md:w-36">
                    <div className="flex flex-col items-center gap-2">
                      <MoveLeft size={30} strokeWidth={1.8} />
                      <span className="text-sm font-black">مشاهده بیشتر</span>
                    </div>
                  </div>

                  <h3 className="mt-6 text-lg font-black">تمام پروژه‌های ما</h3>

                  <p className="mt-2 text-center text-sm leading-6 text-gray-500">
                    مشاهده سوابق و جزئیات پروژه‌ها
                  </p>
                </Link>
              </SwiperSlide>
            </Swiper>
          ) : (
            <div className="h-85 w-full animate-pulse rounded-2xl bg-slate-100 md:h-92.5" />
          )}
        </div>

        {/* Mobile Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/projects"
            className="flex items-center gap-2 rounded-xl bg-[#102a41] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-500"
          >
            مشاهده همه پروژه‌ها
            <ArrowLeft size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
