import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { Suspense, useEffect } from "react";
import Head from "next/head";
import Loader from "@/components/Loader";
import { generateMetadata } from "@/utils/metadata";

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

export const metadata: Metadata = generateMetadata(
  "JSK Opinions - Informer, Contribuer, Transmettre",
  "Plateforme d'expression libre animée par Jed Sophonie Koboude. Découvrez des analyses et des chroniques sur l'Afrique, l'économie et l'histoire."
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-p6U9YH4dQ5L4MItfZtWnhM1qPy/5ipPgZ3Q9s4y0mV9D8F06uY3k3Zl7/7B5L7hZ3N9h2Lh6N9G1D9bG5T2a/w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} open-search-fojrm`}
      >
        <Header />
        <Suspense fallback={<Loader />}>
          <main
            style={{
              paddingTop: "100px",
            }}
          >
            {children}
          </main>
        </Suspense>
        <Footer />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "JSK Opinions",
              url: "https://jsk-opinions.com",
              description:
                "Essayiste, chroniqueur et analyste passionné par les nouvelles technologies, l'économie et l'Afrique.",
              sameAs: [
                "https://www.facebook.com/jed.koboude",
                "https://x.com/koboude",
                "https://www.linkedin.com/in/sophonie-jed-koboude-622856a9/",
              ],
            }),
          }}
        />
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
