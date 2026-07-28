import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "جامانده | روایت تصویری سفر حج",
  description:
    "روایت تصویری کتاب جامانده؛ عکس‌ها و عکس‌نوشت‌های سفر حج از مکه تا مدینه.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
