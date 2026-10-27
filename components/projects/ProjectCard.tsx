import { MapPin, CalendarDays, ArrowLeft } from "lucide-react";

const getImagePath = path => {
  if (!path) return "";

  // پشتیبانی از آدرس کامل تصاویر و مسیرهای داخل public
  if (/^(https?:\/\/|data:|blob:)/i.test(path)) {
    return path;
  }

  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
};

const ProjectCard = ({ project }) => {
  const { title, description, location, year, image } = project;

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-xl">
      {/* تصویر پروژه */}
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <img
          src={getImagePath(image)}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* لایه تیره روی تصویر */}
        <div className="absolute inset-0 bg-linear-to-t from-[#071c2b]/50 via-transparent to-transparent" />

        {/* نوار نارنجی برند */}
        <span className="absolute bottom-0 right-0 h-1 w-20 bg-orange-500 transition-all duration-300 group-hover:w-full" />
      </div>

      {/* اطلاعات پروژه */}
      <div className="p-5 sm:p-6">
        {/* موقعیت و سال اجرا */}
        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
          {location && (
            <span className="flex items-center gap-1.5">
              <MapPin size={16} className="shrink-0 text-orange-500" />
              <span>{location}</span>
            </span>
          )}

          {year && (
            <span className="flex items-center gap-1.5">
              <CalendarDays size={16} className="shrink-0 text-orange-500" />
              <span>{year}</span>
            </span>
          )}
        </div>

        {/* عنوان پروژه */}
        <h3 className="mb-3 line-clamp-2 text-lg font-bold leading-8 text-[#102a41] transition-colors group-hover:text-orange-600">
          {title}
        </h3>

        {/* توضیحات پروژه */}
        <p className="mb-5 line-clamp-3 text-sm leading-7 text-slate-600">
          {description}
        </p>

        {/* جزئیات پروژه */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-sm font-semibold text-slate-700">
            جزئیات پروژه
          </span>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#102a41] text-white transition-all duration-300 group-hover:bg-orange-500">
            <ArrowLeft size={18} />
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
