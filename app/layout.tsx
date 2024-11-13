import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import DataService from "@/services/DataService";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  useEffect(() => {
    console.log('====================================');
    console.log(pathname);
    console.log('====================================');
    DataService.postHistory(pathname);
  }, [pathname]);
  return (
    <html lang="en">
      <link
      rel="shortcut icon"
      type="image/x-icon"
      href="assets/imgs/jed/blogs/logo.png"
    />

      <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        {children}
        <Footer/>
        {/* <!-- Vendor JS--> */}
        <Script src="/js/vendor/modernizr-3.6.0.min.js"></Script>
        <Script src="/js/vendor/jquery-3.6.0.min.js"></Script>
        <Script src="/js/vendor/popper.min.js"></Script>
        <Script src="/js/vendor/bootstrap.min.js"></Script>
        <Script src="/js/vendor/jquery.slicknav.js"></Script>
        <Script src="/js/vendor/slick.min.js"></Script>
        <Script src="/js/vendor/wow.min.js"></Script>
        <Script src="/js/vendor/jquery.ticker.js"></Script>
        <Script src="/js/vendor/jquery.vticker-min.js"></Script>
        <Script src="/js/vendor/jquery.scrollUp.min.js"></Script>
        <Script src="/js/vendor/jquery.nice-select.min.js"></Script>
        <Script src="/js/vendor/jquery.magnific-popup.js"></Script>
        <Script src="/js/vendor/jquery.sticky.js"></Script>
        <Script src="/js/vendor/perfect-scrollbar.js"></Script>
        <Script src="/js/vendor/waypoints.min.js"></Script>
        <Script src="/js/vendor/jquery.theia.sticky.js"></Script>
       {/*  <!-- NewsBoard JS --> */}
        <Script src="/js/main.js"></Script>

        


      </body>
    </html>
  );
}
