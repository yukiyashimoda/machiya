'use client'

import { useEffect, useState } from "react";
import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Home10 from "@/components/homes/home-10";
import Hero1 from "@/components/homes/home-10/heros/Hero1";
import { strongMultiPages } from "@/data/menu";
import dynamic from "next/dynamic";
import LoadingAnimation from "@/components/LoadingAnimation";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

export default function Home10MainDemoMultiPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {loading ? (
        <LoadingAnimation /> // Show loading animation while loading
      ) : (
        <div className="theme-strong">
          <div className="page" id="top">
            <nav className="main-nav dark transparent stick-fixed wch-unset">
              <Header10 links={strongMultiPages} />
            </nav>
            <main id="main">
              <div
                className="home-section bg-dark-alpha-30 light-content parallax-5 scrollSpysection"
                id="home"
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1",
                  }}
                >
                  <source src="/assets/images/demo-strong/machiya_mov.mp4" type="video/mp4" />
                </video>
                <Hero1 />
              </div>

              <Home10 />
            </main>
            <footer className="footer-1 bg-dark-1 light-content">
              <Footer9 />
            </footer>
          </div>
        </div>
      )}
    </>
  );
}