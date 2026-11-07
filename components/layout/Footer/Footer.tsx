"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ChevronDown, Download } from "lucide-react";
import { getImagePath } from "@/lib/images";

type AccordionId = "links" | "externalLinks" | "services" | "contact";

const Footer = () => {
  const [openSection, setOpenSection] = useState<AccordionId | null>(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const toggleSection = (section: AccordionId) => {
    setOpenSection(current => (current === section ? null : section));
  };

  const quickLinks = [
    {
      title: "رزومه حفاری و آتشکاری",
      href: "Documents/Resume-Drilling-Blasting.pdf",
      download: "Raad-Gostar-Drilling-Blasting.pdf",
    },
    {
      title: "رزومه لرزه‌نگاری",
      href: "Documents/Resume-Seismic.pdf",
      download: "Raad-Gostar-Seismic.pdf",
    },
    {
      title: "رزومه ساختمان‌سازی",
      href: "Documents/Resume-Construction.pdf",
      download: "Raad-Gostar-Construction.pdf",
    },
    {
      title: "معرفی انبار مواد ناریه",
      href: "Documents/Introduction to Explosives.pdf",
      download: "Introduction to Explosives.pdf",
    },
  ];

  const externalLinks = [
    {
      title: "انجمن صنفی شرکت‌های مهندسی آتشکاری",
      href: "https://atashkari.ir/",
    },
    {
      title: "محاسبه قیمت اجرای عملیات آتشباری",
      href: "https://atashkari.ir/deployment-calculator/",
    },
    {
      title: "وزارت صنعت، معدن و تجارت",
      href: "https://www.mimt.gov.ir/",
    },
    {
      title: "وزارت راه و شهرسازی",
      href: "https://www.mrud.ir/",
    },
    {
      title: "وزارت نفت",
      href: "https://www.niopdc.ir/",
    },
  ];

  const services = [
    "عملیات آتشباری",
    "عملیات حفاری",
    "عملیات استخراج",
    "ساخت انبارک‌های مواد ناریه",
    "عملیات لرزه‌نگاری",
    "ساختمان‌سازی و شهرک‌سازی",
    "اجرای تونل و عملیات تحکیم",
    "صادرات و واردات کالا",
  ];

  const companyDescription =
    "شرکت رعد گستر سهند با تکیه بر دانش فنی، تجربه اجرایی و بهره‌گیری از نیروهای متخصص، در زمینه اجرای پروژه‌های عمرانی، حفاری و آتشباری، فعالیت‌های معدنی و اکتشاف منابع معدنی فعالیت می‌کند. این مجموعه با هدف ارائه خدمات تخصصی و باکیفیت، تلاش می‌کند نیازهای کارفرمایان را با برنامه‌ریزی دقیق، استفاده از تجهیزات مناسب و رعایت استانداردهای اجرایی پاسخ دهد. تعهد به کیفیت، مسئولیت‌پذیری و توجه به الزامات ایمنی از اصول مهم در اجرای پروژه‌های این شرکت است.";

  const AccordionHeader = ({
    id,
    children,
  }: {
    id: AccordionId;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onClick={() => toggleSection(id)}
      aria-expanded={openSection === id}
      className="flex w-full items-center justify-between gap-3 text-right lg:cursor-default"
    >
      <h3 className="text-sm font-extrabold text-[#0b2942] sm:text-base">
        {children}
      </h3>

      <ChevronDown
        size={18}
        className={`shrink-0 text-orange-500 transition-transform duration-300 lg:hidden ${
          openSection === id ? "rotate-180" : ""
        }`}
      />
    </button>
  );

  const accordionClass = (section: AccordionId) =>
    `grid transition-all duration-300 ease-in-out lg:!grid-rows-[1fr] lg:!opacity-100 ${
      openSection === section
        ? "grid-rows-[1fr] opacity-100"
        : "grid-rows-[0fr] opacity-0"
    }`;

  return (
    <footer dir="rtl" className="w-full overflow-hidden">
      {/* Top Banner */}
      <div
        className="relative bg-cover bg-center py-12 sm:py-16"
        style={{
          backgroundImage: `url("${getImagePath("Images/Footer.webP")}")`,
        }}
      >
        <div className="absolute inset-0 bg-[#041522]/20" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-8 md:flex-row md:items-center lg:px-12">
          <div>
            <h2 className="pt-4 text-sm font-black leading-relaxed text-white sm:text-3xl">
              همراه مطمئن در پروژه‌های بزرگ
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
              تجربه، تخصص و تعهد در اجرای پروژه‌های عمرانی و معدنی
            </p>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-[1450px] grid-cols-1 gap-y-7 px-6 py-9 sm:px-6 lg:grid-cols-5 lg:gap-8 lg:px-12 lg:py-12">
          {/* Brand */}
          <div className="min-w-0">
            <div className="flex">
              <Link href="/" className="inline-flex items-center">
                <img
                  src={getImagePath("Logo.png")}
                  alt="لوگوی رعد گستر سهند"
                  className="h-16 w-auto object-contain"
                />
                <h2 className="mt-1 pr-2 text-sm text-black">
                  شرکت رعد گستر سهند
                </h2>
              </Link>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              ارائه خدمات تخصصی در حوزه حفاری، آتشباری، معدن و پروژه‌های عمرانی
              با تکیه بر تجربه و دانش فنی.
            </p>
          </div>

          {/* Download Resumes */}
          <div className="min-w-0 border-b border-slate-200 pb-5 lg:border-0 lg:pb-0">
            <AccordionHeader id="links">رزومه شرکت</AccordionHeader>

            <div className={accordionClass("links")}>
              <ul className="min-h-0 space-y-8 overflow-hidden pt-4 text-sm text-slate-600">
                {quickLinks.map(item => (
                  <li key={item.href}>
                    <a
                      href={getImagePath(item.href)}
                      download={item.download}
                      className="group flex items-start gap-2 transition-colors hover:text-orange-500"
                    >
                      <Download
                        size={16}
                        className="mt-0.5 shrink-0 text-orange-500 transition-transform group-hover:translate-y-0.5"
                      />
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* External Quick Links */}
          <div className="min-w-0 border-b border-slate-200 pb-5 lg:border-0 lg:pb-0">
            <AccordionHeader id="externalLinks">لینک‌های سریع</AccordionHeader>

            <div className={accordionClass("externalLinks")}>
              <ul className="min-h-0 space-y-6 overflow-hidden pt-4 text-sm text-slate-600">
                {externalLinks.map(item => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-orange-500"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="min-w-0 border-b border-slate-200 pb-5 lg:border-0 lg:pb-0">
            <AccordionHeader id="services">خدمات تخصصی</AccordionHeader>

            <div className={accordionClass("services")}>
              <ul className="min-h-0 space-y-3 overflow-hidden pt-4 text-sm leading-6 text-slate-600">
                {services.map(service => (
                  <li
                    key={service}
                    className="transition-colors hover:text-orange-500"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="min-w-0 border-b border-slate-200 pb-5 lg:border-0 lg:pb-0">
            <AccordionHeader id="contact">اطلاعات تماس</AccordionHeader>

            <div className={accordionClass("contact")}>
              <ul className="min-h-0 space-y-4 overflow-hidden pt-4 text-sm leading-7 text-slate-600">
                <li className="flex items-start gap-2">
                  <MapPin size={19} className="mt-1 shrink-0 text-orange-500" />
                  <span>تهران، ستارخان، برق آلستوم، نبش خیابان جهانی نسب</span>
                </li>

                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-orange-500" />
                  <a
                    href="tel:11454813111"
                    dir="ltr"
                    className="transition-colors hover:text-orange-500"
                  >
                    14 54 81 31 11
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-orange-500" />
                  <a
                    href="tel:02144280126"
                    dir="ltr"
                    className="transition-colors hover:text-orange-500"
                  >
                    021 44 28 01 26
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-orange-500" />
                  <a
                    href="tel:09125484802"
                    dir="ltr"
                    className="transition-colors hover:text-orange-500"
                  >
                    0912 548 4802
                  </a>
                </li>

                <li className="flex items-start gap-2">
                  <Mail size={18} className="mt-1 shrink-0 text-orange-500" />
                  <a
                    href="mailto:raadgostar@gmail.com"
                    className="break-all transition-colors hover:text-orange-500"
                  >
                    raadgostar@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Company Description */}
          <div className="min-w-0 pt-6 lg:col-span-5 lg:mt-2">
            <h3 className="mb-3 text-base font-extrabold leading-7 text-[#0b2942] sm:text-lg">
              رعد گستر سهند؛ همراه مطمئن در پروژه‌های بزرگ
            </h3>

            <div className="text-justify text-sm leading-7 text-slate-600">
              <p className={showFullDescription ? "" : "line-clamp-5"}>
                {companyDescription}
              </p>

              <button
                type="button"
                onClick={() => setShowFullDescription(prev => !prev)}
                aria-expanded={showFullDescription}
                className="mt-1 inline-flex items-center gap-1 font-bold text-orange-500 transition-colors hover:text-orange-600 md:hidden"
              >
                {showFullDescription ? "مشاهده کمتر" : "مشاهده بیشتر"}

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    showFullDescription ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t bg-[#0b2942] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs leading-6 sm:px-6 md:flex-row lg:px-12">
          <p>تمامی حقوق این وب‌سایت متعلق به شرکت رعد گستر سهند است.</p>

          <p dir="ltr">© {currentYear ?? ""} AmirrezaFeiz</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
