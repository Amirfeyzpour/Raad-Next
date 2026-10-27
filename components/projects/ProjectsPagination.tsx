import { ChevronRight, ChevronLeft, MoreHorizontal } from "lucide-react";

type ProjectsPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

type PageItem = number | "...";

export default function ProjectsPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ProjectsPaginationProps) {
  if (totalPages <= 1) return null;

  const getPages = (): PageItem[] => {
    const pages: PageItem[] = [];

    for (let page = 1; page <= totalPages; page++) {
      if (
        page === 1 ||
        page === totalPages ||
        Math.abs(page - currentPage) <= 1
      ) {
        pages.push(page);
      } else if (page === currentPage - 2 || page === currentPage + 2) {
        pages.push("...");
      }
    }

    return pages.filter(
      (page, index) => page !== "..." || pages[index - 1] !== "...",
    );
  };

  return (
    <nav
      aria-label="صفحه‌بندی پروژه‌ها"
      dir="rtl"
      className="mt-10 flex items-center justify-center gap-2"
    >
      {/* صفحه قبلی */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="صفحه قبلی"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-orange-400 hover:text-orange-500 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight size={20} />
      </button>

      {/* شماره صفحات */}
      {getPages().map((page, index) =>
        page === "..." ? (
          <span
            key={`dots-${index}`}
            aria-hidden="true"
            className="flex h-10 w-8 items-center justify-center text-slate-400"
          >
            <MoreHorizontal size={20} />
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-label={`صفحه ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
            className={`h-10 min-w-10 rounded-xl border px-3 text-sm font-bold transition ${
              currentPage === page
                ? "border-[#102a41] bg-[#102a41] text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-orange-400 hover:text-orange-500"
            }`}
          >
            {page}
          </button>
        ),
      )}

      {/* صفحه بعدی */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="صفحه بعدی"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-orange-400 hover:text-orange-500 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={20} />
      </button>
    </nav>
  );
}
