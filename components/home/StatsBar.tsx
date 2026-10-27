"use client";

import { useEffect, useState } from "react";
import {
  Award,
  BriefcaseBusiness,
  Users,
  MapPinned,
  Truck,
} from "lucide-react";

const stats = [
  {
    id: 1,
    value: 20,
    label: "سال تجربه",
    icon: Award,
    suffix: "+",
  },
  {
    id: 2,
    value: 500,
    label: "پروژه موفق",
    icon: BriefcaseBusiness,
    suffix: "+",
  },
  {
    id: 3,
    value: 80,
    label: "نیروی متخصص",
    icon: Users,
    suffix: "+",
  },
  {
    id: 4,
    value: 30,
    label: "استان در سراسر کشور",
    icon: MapPinned,
    suffix: "+",
  },
  {
    id: 5,
    value: 25,
    label: "دستگاه ماشین‌آلات",
    icon: Truck,
    suffix: "+",
  },
];

const toPersianNumber = (number: number): string =>
  number.toLocaleString("fa-IR");

export default function StatsBar() {
  const [counts, setCounts] = useState<number[]>(() => stats.map(() => 0));

  useEffect(() => {
    const duration = 1400;
    let animationFrame = 0;
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(stats.map(stat => Math.floor(stat.value * easedProgress)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      dir="rtl"
      className="relative z-10 border-y border-white/5 bg-[#061522] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className={`
                  relative flex items-center justify-center gap-3
                  px-3 py-6 md:gap-4 md:px-5 md:py-7
                  ${index < 2 ? "border-b border-white/10 md:border-b-0" : ""}
                  ${index % 2 === 0 ? "md:border-l md:border-white/20" : ""}
                  ${index === 0 || index === 2 ? "border-l border-white/15 md:border-l-0" : ""}
                  before:absolute before:inset-y-5 before:left-0
                  before:w-px before:bg-white/20
                  before:shadow-[0_0_5px_rgba(255,255,255,0.15)]
                `}
              >
                <div className="flex shrink-0 items-center justify-center">
                  <Icon
                    size={29}
                    strokeWidth={2.2}
                    className="text-orange-500 md:h-8 md:w-8"
                  />
                </div>

                <div className="flex min-w-0 flex-col gap-1">
                  <span
                    className="text-xl font-black tracking-tight md:text-2xl"
                    dir="rtl"
                  >
                    {toPersianNumber(counts[index])}
                    {stat.suffix}
                  </span>

                  <span className="text-xs leading-5 text-gray-300 md:text-sm">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
