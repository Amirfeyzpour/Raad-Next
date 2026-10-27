export type NavbarItem = {
  title: string;
  href: string;
  children?: NavbarItem[];
};

export const navbarData: NavbarItem[] = [
  { title: "صفحه اصلی", href: "/" },
  { title: "درباره ما", href: "/about" },
  { title: "خدمات", href: "/services" },
  { title: "پروژه‌ها", href: "/projects" },
  { title: "تماس با ما", href: "/contact" },
];
