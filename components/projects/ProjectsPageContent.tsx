"use client";

import { useState } from "react";
import ProjectFilters, { type ProjectCategory } from "./ProjectFilters";
import ProjectCard from "./ProjectCard";
import ProjectsPagination from "./ProjectsPagination";
import { projectsData } from "./ProjectsData";

const PROJECTS_PER_PAGE = 6;

export default function ProjectsPageContent() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const [currentPage, setCurrentPage] = useState(1);

  // فیلتر پروژه‌ها براساس دسته‌بندی
  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter(project => project.category === activeCategory);

  // محاسبه تعداد صفحات
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  // نمایش پروژه‌های صفحه جاری
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;

  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE,
  );

  // تغییر دسته‌بندی و بازگشت به صفحه اول
  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // تغییر صفحه
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    document.getElementById("projects-list")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      dir="rtl"
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10"
    >
      {/* فیلتر دسته‌بندی */}
      <ProjectFilters
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* تعداد پروژه‌ها و شماره صفحه */}
      <div id="projects-list" className="scroll-mt-28 pt-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            تعداد پروژه‌ها:{" "}
            <span className="font-bold text-[#102a41]">
              {filteredProjects.length}
            </span>
          </p>

          <p className="text-sm text-slate-500">
            صفحه {totalPages === 0 ? 0 : currentPage} از {totalPages}
          </p>
        </div>

        {/* کارت‌های پروژه */}
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

        {/* صفحه‌بندی */}
        <ProjectsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
