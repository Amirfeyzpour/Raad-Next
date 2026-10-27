"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Building2,
  BriefcaseBusiness,
  HardHat,
  Headset,
  ChevronLeft,
  Menu,
  X,
  Phone,
} from "lucide-react";
import { navbarData } from "./navbarData";

const menuIcons: Record<string, React.ElementType> = {
  "صفحه اصلی": House,
  "درباره ما": Building2,
  خدمات: BriefcaseBusiness,
  پروژه‌ها: HardHat,
  "تماس با ما": Headset,
};

const bottomItems = [
  { title: "خانه", href: "/", Icon: House },
  { title: "پروژه‌ها", href: "/projects", Icon: HardHat },
  { title: "درباره ما", href: "/about", Icon: Building2 },
  { title: "خدمات", href: "/services", Icon: BriefcaseBusiness },
  { title: "تماس", href: "/contact", Icon: Phone },
];

export default function MobileNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className="relative z-50 border-b border-white/10 bg-[#071827] lg:hidden">
        <div className="flex h-[76px] items-center justify-between px-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <img
              src="/Logo.png"
              alt="رعد گستر سهند"
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="text-sm font-extrabold text-white">رعد گستر سهند</p>
              <p className="mt-1 text-[10px] text-slate-400">
                حفاری، آتشباری و معدن
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="باز کردن منو"
            aria-expanded={isOpen}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:text-orange-400"
          >
            <Menu size={25} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      <button
        type="button"
        aria-label="بستن منو"
        onClick={closeMenu}
        tabIndex={isOpen ? 0 : -1}
        className={`fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      />

      <aside
        aria-label="منوی موبایل"
        aria-hidden={!isOpen}
        className={`fixed inset-y-0 right-0 z-[80] flex h-dvh w-full max-w-[430px] flex-col overflow-hidden border-l border-white/10 bg-[#061827] shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Images/Menu-mobil.png')" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[#041827]/75" />

        <div className="relative flex shrink-0 items-center justify-between border-b border-white/10 px-5 pb-5 pt-[calc(env(safe-area-inset-top)+16px)]">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <img
              src="/Logo.png"
              alt="لوگوی رعد گستر سهند"
              className="h-14 w-14 object-contain"
            />
            <div>
              <h2 className="text-base font-extrabold text-white">
                رعد گستر سهند
              </h2>
              <p className="mt-1 text-[11px] text-slate-300">
                شرکت مهندسی و عمرانی
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="بستن منو"
            className="absolute left-4 top-[calc(env(safe-area-inset-top)+12px)] flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-white hover:text-orange-400"
          >
            <X size={23} />
          </button>
        </div>

        <nav className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-3">
          <div className="space-y-1">
            {navbarData.map(item => {
              const Icon = menuIcons[item.title] ?? BriefcaseBusiness;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  tabIndex={isOpen ? 0 : -1}
                  className={`flex items-center gap-3 rounded-xl border-b border-white/10 px-3 py-3 transition-colors ${
                    active
                      ? "bg-[#0a2a40]/80 text-orange-400"
                      : "text-white hover:bg-[#0a2a40]/60"
                  }`}
                >
                  <Icon
                    size={23}
                    strokeWidth={1.7}
                    className={active ? "text-orange-400" : "text-slate-200"}
                  />
                  <span className={`text-sm ${active ? "font-bold" : ""}`}>
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border border-white/15 bg-[#061b2b]/90">
            <div className="flex items-center gap-3 p-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                <Headset size={23} strokeWidth={1.7} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  نیاز به مشاوره دارید؟
                </p>
                <p className="mt-1 text-[10px] leading-5 text-slate-300">
                  برای اطلاعات بیشتر با ما تماس بگیرید
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-4 py-3.5 text-sm font-bold text-white transition hover:bg-orange-400"
          >
            <Phone size={19} />
            درخواست مشاوره
            <ChevronLeft size={18} />
          </Link>
        </nav>

        <div className="relative shrink-0 border-t border-white/15 bg-[#041725]/95 pb-[env(safe-area-inset-bottom)]">
          <div className="grid grid-cols-5">
            {bottomItems.map(({ title, href, Icon }) => {
              const active = isActive(href);

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  tabIndex={isOpen ? 0 : undefined}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex min-h-[66px] flex-col items-center justify-center gap-1 ${
                    active ? "text-orange-400" : "text-slate-300"
                  }`}
                >
                  {active && (
                    <span className="absolute top-0 h-0.5 w-8 rounded-full bg-orange-500" />
                  )}
                  <Icon size={22} strokeWidth={active ? 2.2 : 1.7} />
                  <span className="text-[10px] font-medium">{title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
