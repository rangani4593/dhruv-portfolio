import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import Motion from "@/components/atoms/Motion";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Dhruv Rangani — AI Engineer & Full-Stack Developer",
  description:
    "AI engineer and full-stack developer shipping AI video & image platforms, Shopify apps, CMS websites and dashboards across React, Vue 3, Astro and Node.js.",
};

// `.blob.b-1/.b-2` are GSAP parallax hooks (Motion.jsx).
const BLOB = "blob fixed -z-10 rounded-full blur-[90px] pointer-events-none animate-floatB";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <div className={`${BLOB} b-1 w-[420px] h-[420px] bg-b2/[.18] -top-[120px] -right-20`} />
        <div className={`${BLOB} b-2 w-[360px] h-[360px] bg-b3/[.14] bottom-[10%] -left-[120px] [animation-delay:-9s]`} />
        <Motion />
        <Navbar />
        <main className="max-w-wrap mx-auto px-[26px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
