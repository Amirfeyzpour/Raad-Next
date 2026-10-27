import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
  title: "رعد گستر سهند | شرکت مهندسی و عمرانی",
  description:
    "وب‌سایت رسمی شرکت رعد گستر سهند؛ فعال در حوزه حفاری، آتشباری، معدن و پروژه‌های عمرانی.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
