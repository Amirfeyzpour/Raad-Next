"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Building2,
  BriefcaseBusiness,
  HardHat,
  Headset,
  Camera,
  Send,
  MessageCircle,
} from "lucide-react";
import { navbarData } from "./navbarData";

const menuIcons: Record<string, React.ElementType> = {
  "صفحه اصلی": House,
  "درباره ما": Building2,
  خدمات: BriefcaseBusiness,
  پروژه‌ها: HardHat,
  "تماس با ما": Headset,
};

const socialLinks = [
  {
    name: "اینستاگرام",
    href: "https://instagram.com/YOUR_USERNAME",
    Icon: Camera,
    hover: "hover:text-pink-400 hover:bg-pink-500/10",
  },
  {
    name: "تلگرام",
    href: "https://t.me/YOUR_USERNAME",
    Icon: Send,
    hover: "hover:text-sky-400 hover:bg-sky-500/10",
  },
  {
    name: "ایتا",
    href: "https://eitaa.com/YOUR_USERNAME",
    Icon: MessageCircle,
    hover: "hover:text-orange-400 hover:bg-orange-500/10",
  },
  {
    name: "بله",
    href: "https://ble.ir/YOUR_USERNAME",
    Icon: MessageCircle,
    hover: "hover:text-blue-400 hover:bg-blue-500/10",
  },
];

export default function DesktopNavbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      dir="rtl"
      className="fixed top-0 z-1000 hidden w-full border-b border-white/10 text-white lg:block"
    >
      <div className="border-b border-white/[0.08] bg-[#061421]/95">
        <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-between gap-4 px-8">
          <p className="whitespace-nowrap text-[11px] text-slate-300">
            رعد گستر سهند
            <span className="mx-2 text-orange-500">|</span>
            همراه شما در مسیر پیشرفت
          </p>

          <div className="flex shrink-0 items-center gap-1">
            <span className="ml-2 text-[10px] text-slate-400">
              شبکه‌های اجتماعی
            </span>

            {socialLinks.map(({ name, href, Icon, hover }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className={`rounded-md p-1.5 text-slate-300 transition ${hover}`}
              >
                <Icon size={17} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative bg-[radial-gradient(ellipse_at_50%_50%,rgba(100,133,157,0.22)_0%,rgba(35,65,88,0.12)_35%,transparent_72%),linear-gradient(180deg,#0b2032_0%,#071827_100%)]">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-6 px-8">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <img
              src="/Logo.png"
              alt="لوگوی رعد گستر سهند"
              className="h-14 w-14 object-contain"
            />
            <h1 className="whitespace-nowrap text-base font-extrabold text-white">
              شرکت رعد گستر سهند
            </h1>
          </Link>

          <nav className="flex h-full items-center gap-4 xl:gap-6">
            {navbarData.map(item => {
              const active = isActive(item.href);
              const Icon = menuIcons[item.title] ?? BriefcaseBusiness;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex h-full items-center gap-1.5 whitespace-nowrap text-[12px] font-semibold transition-colors duration-300 after:absolute after:bottom-4 after:right-0 after:h-[2px] after:rounded-full after:bg-orange-500 after:transition-all xl:text-[13px] ${
                    active
                      ? "text-orange-400 after:w-full"
                      : "text-white after:w-0 hover:text-orange-400 hover:after:w-full"
                  }`}
                >
                  <Icon size={17} strokeWidth={1.7} />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="shrink-0 whitespace-nowrap rounded-md bg-orange-500 px-4 py-3 text-xs font-bold text-white transition-colors hover:bg-orange-600"
          >
            درخواست مشاوره
          </Link>
        </div>
      </div>
    </header>
  );
}
