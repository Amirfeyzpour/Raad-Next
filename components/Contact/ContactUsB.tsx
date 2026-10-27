"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowLeft,
  Printer,
  Smartphone,
  MapPinned,
  Contact,
} from "lucide-react";
import { getImagePath } from "@/lib/images";

const contactItems = [
  {
    icon: MapPin,
    title: "آدرس دفتر",
    description: "موقعیت دفتر مرکزی شرکت",
    value:
      "تهران، ستارخان، برق آلستوم، خیابان جهانی نسب، پلاک یک، طبقه اول، واحد یک",
    details: [
      {
        icon: MapPinned,
        label: "کد پستی",
        value: "1454813111",
      },
    ],
  },
  {
    icon: Phone,
    title: "شماره تماس",
    description: "ارتباط مستقیم با شرکت",
    details: [
      {
        icon: Smartphone,
        label: "همراه",
        value: "09125484802",
        href: "tel:09125484802",
      },
      {
        icon: Phone,
        label: "تلفن ثابت",
        value: "021-66066132",
        href: "tel:02166066132",
      },
      {
        icon: Phone,
        label: "تلفن ثابت",
        value: "021-44280126",
        href: "tel:02144280126",
      },
      {
        icon: Printer,
        label: "فکس",
        value: "021-66021447",
      },
    ],
  },
  {
    icon: Mail,
    title: "پست الکترونیکی",
    description: "ارتباط از طریق ایمیل",
    details: [
      {
        icon: Mail,
        label: "ایمیل",
        value: "raadgostarsahand@gmail.com",
        href: "mailto:raadgostarsahand@gmail.com",
      },
    ],
  },
  {
    icon: Clock,
    title: "ساعات کاری",
    description: "زمان پاسخ‌گویی",
    value: "شنبه تا چهارشنبه، ۸ تا ۱۷",
  },
];

const companyDescription =
  "از آنجایی که رسیدن به توسعه کشور مستلزم داشتن راه‌های ارتباطی مناسب، معادن فعال و همچنین دستیابی به انرژی پایدار از قبیل احداث سد و نیروگاه‌های متعدد می‌باشد، که عمده این پروژه‌ها نیاز به اجرای عملیات آتشباری داشته، لذا رعد گستر سهند جهت ارائه خدمات و تسریع در اجرای سیکل مواد ناریه و قبول کلیه مسئولیت مواد ناریه به منظور هموار ساختن راه برای مدیران و مسئولان عمرانی کشور، فعالیت گسترده و چشمگیری را با پرسنلی مجرب و متخصص در زمینه‌های حفاری، تهیه و حمل، نگهداری مواد ناریه، اجرای عملیات آتشباری کنترل‌شده و لرزه‌نگاری، احداث جاده‌های مختلف از بدو تأسیس آغاز نموده است.";

export default function ContactUsB() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="contact-methods"
      dir="rtl"
      className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-8 text-center sm:mb-12">
          <span className="text-sm font-bold text-orange-500">
            ارتباط با رعد گستر سهند
          </span>

          <h2 className="mt-3 text-2xl font-black text-[#0b2942] sm:text-3xl">
            راه‌های ارتباطی با ما
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
            برای دریافت اطلاعات بیشتر درباره خدمات و فعالیت‌های شرکت، می‌توانید
            از راه‌های ارتباطی زیر با ما در تماس باشید.
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-orange-500" />
        </div>

        {/* Contact Cards + Company Information */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {contactItems.map(item => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex min-w-0 flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
                >
                  {/* Main Icon */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                      <Icon size={23} strokeWidth={1.8} />
                    </span>

                    <ArrowLeft
                      size={17}
                      className="text-slate-300 transition group-hover:-translate-x-1 group-hover:text-orange-500"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-extrabold text-[#0b2942]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-6 text-slate-500">
                    {item.description}
                  </p>

                  {/* Main Value */}
                  {"value" in item && item.value && (
                    <div className="mt-3 flex items-start gap-2 border-t border-slate-100 pt-3">
                      {item.title === "آدرس دفتر" && (
                        <MapPin
                          size={17}
                          className="mt-1 shrink-0 text-orange-500"
                        />
                      )}

                      {item.title === "ساعات کاری" && (
                        <Clock
                          size={17}
                          className="mt-1 shrink-0 text-orange-500"
                        />
                      )}

                      <p className="wrap-break-word text-sm font-semibold leading-7 text-slate-700">
                        {item.value}
                      </p>
                    </div>
                  )}
                
                  {/* Additional Details */}
                  {"details" in item && item.details?.length > 0 && (
                    <div className="mt-3 space-y-3">
                      {item.details.map((detail, index) => {
                        const DetailIcon = detail.icon || Contact;

                        return (
                          <div
                            key={`${detail.label}-${index}`}
                            className="flex min-w-0 items-start gap-3 border-t border-slate-100 pt-3"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                              <DetailIcon size={16} strokeWidth={1.8} />
                            </span>

                            <div className="min-w-0 flex-1">
                              <span className="block text-xs text-slate-500">
                                {detail.label}
                              </span>

                              {detail.href ? (
                                <a
                                  href={detail.href}
                                  dir="ltr"
                                  className="mt-1 block break-all text-left text-sm font-bold text-[#0b2942] transition hover:text-orange-500"
                                >
                                  {detail.value}
                                </a>
                              ) : (
                                <span
                                  dir="ltr"
                                  className="mt-1 block break-all text-left text-sm font-bold text-[#0b2942]"
                                >
                                  {detail.value}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Company Image and Description */}
          <div className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {/* Image */}
            <div className="relative h-56 shrink-0 overflow-hidden sm:h-72 lg:h-72">
              <Image
                src={getImagePath("Images/hero-dom-3.png")}
                alt="فعالیت‌های صنعتی و عمرانی رعد گستر سهند"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#041522]/85 via-transparent to-transparent" />

              <div className="absolute bottom-5 right-5 left-5">
                <span className="text-xs font-bold text-orange-400">
                  RAAD GOSTAR SAHAND CO
                </span>

                <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                  همراه مطمئن پروژه‌های بزرگ
                </h3>
              </div>
            </div>

            {/* Company Description */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-8 w-1 rounded-full bg-orange-500" />

                <h3 className="text-lg font-black text-[#0b2942]">
                  درباره شرکت
                </h3>
              </div>

              <p
                className={`text-justify text-sm leading-8 text-slate-600 ${
                  showMore ? "" : "line-clamp-4 sm:line-clamp-none"
                }`}
              >
                {companyDescription}
              </p>

              {/* Mobile Read More */}
              <div className="mt-4 flex justify-center sm:hidden">
                <button
                  type="button"
                  onClick={() => setShowMore(prev => !prev)}
                  aria-expanded={showMore}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-orange-500/30 bg-orange-50 px-6 py-2.5 text-sm font-bold text-orange-600 transition duration-300 hover:bg-orange-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  {showMore ? "بستن توضیحات" : "مشاهده بیشتر"}

                  <ArrowLeft
                    size={16}
                    className={`transition-transform duration-300 ${
                      showMore ? "-rotate-90" : "rotate-90"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
