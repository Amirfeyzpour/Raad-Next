import {
  Flame,
  Drill,
  Pickaxe,
  Warehouse,
  Activity,
  Building2,
  Route,
  Package,
  Layers,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

type ProjectCategory =
  | "all"
  | "عملیات آتشباری"
  | "عملیات حفاری"
  | "عملیات استخراج"
  | "ساخت انبارک‌های مواد ناریه"
  | "عملیات لرزه‌نگاری"
  | "ساختمان‌سازی و شهرک‌سازی"
  | "اجرای تونل و عملیات تحکیم"
  | "صادرات و واردات کالا";

type ProjectFilter = {
  id: ProjectCategory;
  label: string;
  icon: LucideIcon;
};

type ProjectFiltersProps = {
  activeCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
};

const filters: ProjectFilter[] = [
  {
    id: "all",
    label: "همه پروژه‌ها",
    icon: Layers,
  },
  {
    id: "عملیات آتشباری",
    label: "عملیات آتشباری",
    icon: Flame,
  },
  {
    id: "عملیات حفاری",
    label: "عملیات حفاری",
    icon: Drill,
  },
  {
    id: "عملیات استخراج",
    label: "عملیات استخراج",
    icon: Pickaxe,
  },
  {
    id: "ساخت انبارک‌های مواد ناریه",
    label: "ساخت انبارک‌های مواد ناریه",
    icon: Warehouse,
  },
  {
    id: "عملیات لرزه‌نگاری",
    label: "عملیات لرزه‌نگاری",
    icon: Activity,
  },
  {
    id: "ساختمان‌سازی و شهرک‌سازی",
    label: "ساختمان‌سازی و شهرک‌سازی",
    icon: Building2,
  },
  {
    id: "اجرای تونل و عملیات تحکیم",
    label: "اجرای تونل و عملیات تحکیم",
    icon: Route,
  },
  {
    id: "صادرات و واردات کالا",
    label: "صادرات و واردات کالا",
    icon: Package,
  },
];

export type { ProjectCategory };

export default function ProjectFilters({
  activeCategory,
  onCategoryChange,
}: ProjectFiltersProps) {
  return (
    <section className="w-full" dir="rtl">
      {/* عنوان بخش */}
      <div className="mb-5">
        <span className="mb-2 block text-sm font-semibold text-orange-500">
          دسته‌بندی پروژه‌ها
        </span>

        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
          پروژه‌های ما
        </h2>

        <p className="mt-2 text-sm leading-7 text-slate-500">
          پروژه‌ها را براساس حوزه فعالیت شرکت مشاهده کنید.
        </p>
      </div>

      {/* دکمه‌های دسته‌بندی */}
      <div className="flex gap-3 overflow-x-auto pb-4">
        {filters.map(filter => {
          const Icon = filter.icon;
          const isActive = activeCategory === filter.id;

          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => onCategoryChange(filter.id)}
              aria-pressed={isActive}
              className={`flex shrink-0 items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "border-[#102a41] bg-[#102a41] text-white shadow-md"
                  : "border-slate-200 bg-white text-slate-600 hover:border-orange-400 hover:text-orange-600"
              }`}
            >
              <Icon
                size={18}
                aria-hidden="true"
                className={isActive ? "text-orange-400" : "text-orange-500"}
              />

              <span>{filter.label}</span>
            </button>
          );
        })}
      </div>

      <div className="h-px w-full bg-slate-200" />
    </section>
  );
}
