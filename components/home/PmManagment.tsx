import { getImagePath } from "@/lib/images";

export default function PmManagment() {
  return (
    <section
      dir="rtl"
      className="relative mx-auto w-full max-w-500 overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-slate-100/70 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* CEO Image */}
          <div className="relative mx-auto w-full max-w-70 sm:max-w-[320px] lg:mx-0 lg:max-w-85">
            <div
              aria-hidden="true"
              className="absolute -right-2 -top-2 h-16 w-16 rounded-tr-2xl border-r-4 border-t-4 border-orange-500"
            />

            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-md shadow-slate-900/10">
              <img
                src={getImagePath("Images/About/sorosh.png")}
                alt="مدیرعامل شرکت رعد گستر سهند"
                loading="lazy"
                className="h-70 w-full object-cover object-center sm:h-80 lg:h-88"
              />

              {/* CEO Information */}
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#061522] via-[#061522]/85 to-transparent px-4 pb-4 pt-12">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-1 rounded-full bg-orange-500" />

                  <div>
                    <h3 className="text-base font-extrabold text-white sm:text-lg">
                      غلامرضا سروش نیا
                    </h3>

                    <p className="mt-1 text-xs text-slate-300">
                      مدیرعامل شرکت رعد گستر سهند
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-2 left-6 h-1 w-20 rounded-full bg-orange-500"
            />
          </div>

          {/* CEO Message */}
          <div className="flex min-w-0 flex-col items-start">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-orange-500" />

              <span className="text-2xl font-bold text-orange-600">
                پیام مدیرعامل
              </span>
            </div>

            <h2 className="text-2xl font-black leading-relaxed tracking-tight text-[#102a41] sm:text-3xl lg:text-4xl">
              با تکیه بر تجربه،
              <span className="mt-1 block text-orange-500">
                به سوی آینده‌ای پایدار
              </span>
            </h2>

            <div className="mt-3 space-y-3 text-justify text-sm leading-9 text-slate-900 sm:leading-8">
              <p>
                ما در شرکت رعد گستر سهند برای حرکت رو به جلو و دست‌یابی به
                موفقیت‌های بیشمار در آبادانی کشور و ارائه خدمات تحت پوشش شرکت
                پیشرو بوده‌ایم. با استفاده از پشتوانه، تلاش مدیران، پرسنل مجرب،
                نمایندگان و ... می‌کوشیم جایگاهی اثرگذار در صنعت، معدن و عمران
                کشور داشته باشیم.
              </p>
            </div>

            {/* Signature */}
            <div className="flex h-35 w-full items-center justify-end text-center">
              <div className="w-30 leading-8">
                <p>
                  با سپاس
                  <br />
                  غلامرضا سروش نیا
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
