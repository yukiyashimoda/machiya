"use client";
import { useEffect } from "react";
import "swiper/css";
import "/public/assets/css/styles.css";
import "jarallax/dist/jarallax.min.css";
import "swiper/css/effect-fade";
import "react-modal-video/css/modal-video.css";
import "photoswipe/dist/photoswipe.css";
import { usePathname } from "next/navigation";
import { parallaxMouseMovement, parallaxScroll } from "/utlis/parallax";

import "tippy.js/dist/tippy.css";
import { init_wow } from "@/utlis/initWowjs";
import { headerChangeOnScroll } from "@/utlis/changeHeaderOnScroll";

export default function RootLayout({ children }) {
  const path = usePathname();

  useEffect(() => {
    init_wow();
    parallaxMouseMovement();
    var mainNav = document.querySelector(".main-nav");
    if (mainNav?.classList.contains("transparent")) {
      mainNav.classList.add("js-transparent");
    } else if (!mainNav?.classList?.contains("dark")) {
      mainNav?.classList.add("js-no-transparent-white");
    }

    window.addEventListener("scroll", headerChangeOnScroll);
    parallaxScroll();
    return () => {
      window.removeEventListener("scroll", headerChangeOnScroll);
    };
  }, [path]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Bootstrapがクライアント側で正しく読み込まれるように
      });
    }
  }, []);

  // SEOメタ情報
  const pageTitle = "うなぎと酒 まちや | 国産鰻の逸品と銘酒を堪能";
  const pageDescription =
    "市電「ロープウェイ入口駅」徒歩2分。うなぎと酒 まちやでは、国産鰻を使用した逸品と厳選された銘酒をご提供します。";
  const pageUrl = `https://unagi-machiya.com${path}`;
  const pageImage = "/assets/images/machiya_view.jpg";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "うなぎと酒 まちや",
    "description": pageDescription,
    "image": pageImage,
    "url": "https://unagi-machiya.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "北海道札幌市中央区",
      "addressLocality": "札幌市",
      "postalCode": "064-0916",
      "addressCountry": "JP",
    },
    "telephone": "+81-11-600-1747",
    "priceRange": "¥4000-¥5000",
    "servesCuisine": "Japanese",
    "menu": "/menu",
    "sameAs": ["https://www.instagram.com/unagi__sake_machiya"],
  };

  return (
    <html lang="ja" className="no-mobile no-touch">
      <head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={pageUrl} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) タグ */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="うなぎと酒 まちや" />

        {/* Twitterカード */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* 構造化データ（JSON-LD） */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        {/* フォントのリンク */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500&family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="appear-animate body">{children}</body>
    </html>
  );
}
