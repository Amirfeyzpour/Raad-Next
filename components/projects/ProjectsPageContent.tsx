"use client";

import { useState } from "react";

import ProjectFilters from "./ProjectFilters";
import ProjectCard from "./ProjectCard";
import ProjectsPagination from "./ProjectsPagination";
import { projectsData } from "./ProjectsData";
import type { ProjectCategory } from "./ProjectsData";
import { getImagePath } from "@/lib/images";

const PROJECTS_PER_PAGE = 6;

export default function ProjectsPageContent() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter(project => project.category === activeCategory);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  const safeCurrentPage =
    totalPages === 0 ? 1 : Math.min(Math.max(currentPage, 1), totalPages);

  const startIndex = (safeCurrentPage - 1) * PROJECTS_PER_PAGE;

  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE,
  );

  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (
      !Number.isInteger(page) ||
      page < 1 ||
      page > totalPages ||
      page === safeCurrentPage
    ) {
      return;
    }

    setCurrentPage(page);

    document.getElementById("projects-list")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main dir="rtl" className="min-h-screen bg-slate-50">
      {/* Projects Banner */}
      <section className="relative isolate min-h-[320px] overflow-hidden bg-[#061522] sm:min-h-[400px] lg:min-h-[660px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${getImagePath("/Images/hero-dom-3.webP")}")`,
          }}
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(3,12,22,0.15), rgba(3,12,22,0.55), rgba(3,12,22,0.92)), linear-gradient(20deg, rgba(3,12,22,0.45), transparent)",
          }}
        />

        {/* Banner Content */}
        <div className="container mx-auto flex min-h-[320px] items-center px-5 py-14 sm:min-h-[400px] sm:px-10 lg:min-h-[460px] lg:px-16">
          <div className="max-w-xl border-r-2 border-orange-500 py-3 pr-5 sm:pr-7">
            <p className="mb-3 mt-4 text-sm font-semibold text-orange-400 sm:text-base">
              تجربه در میدان عمل
            </p>

            <h1 className="text-2xl font-black leading-relaxed text-white sm:text-4xl sm:leading-[1.8]">
              از برنامه‌ریزی تا اجرای پروژه‌های بزرگ
            </h1>

            <p className="mt-4 text-sm leading-8 text-slate-200 sm:text-base">
              رعد گستر سهند با تکیه بر دانش فنی، نیروی متخصص و تجربه اجرایی، در
              مسیر اجرای پروژه‌های عمرانی، معدنی و عملیات حفاری و آتشباری همراه
              کارفرمایان است.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Content */}
      <section
        dir="rtl"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10"
      >
        <ProjectFilters
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <div id="projects-list" className="scroll-mt-28 pt-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-slate-500">
              تعداد پروژه‌ها:
              <span className="mr-2 font-bold text-[#102a41]">
                {filteredProjects.length}
              </span>
            </p>

            <p className="text-sm text-slate-500" aria-live="polite">
              صفحه {totalPages === 0 ? 0 : safeCurrentPage} از {totalPages}
            </p>
          </div>

          {currentProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {currentProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <p className="text-lg font-bold text-[#102a41]">
                پروژه‌ای در این دسته‌بندی وجود ندارد.
              </p>

              <p className="mt-2 text-sm text-slate-500">
                دسته‌بندی دیگری را انتخاب کنید.
              </p>
            </div>
          )}

          {totalPages > 1 && (
            <ProjectsPagination
              currentPage={safeCurrentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </section>
    </main>
  );
}
