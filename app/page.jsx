import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Home10 from "@/components/homes/home-10";
import Hero1 from "@/components/homes/home-10/heros/Hero1";
import { strongMultiPages } from "@/data/menu";
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export const metadata = {
  title: "うなぎと酒 まちや",
  description: "市電「ロープウェイ入口駅」徒歩2分。国産鰻の逸品と銘酒を堪能。",
  openGraph: {
    title: "うなぎと酒 まちや",
    description: "市電「ロープウェイ入口駅」徒歩2分。国産鰻の逸品と銘酒を堪能。",
    url: "https://unagi-machiya.com",
    type: "website",
    images: [
      {
        src: "/assets/images/machiya_view.jpg",
        width: 1200,
        height: 630,
        alt: "うなぎと酒 まちや"
      }
    ]
  }
};
export default function Home10MainDemoMultiPage() {
  return (
    <>
      <div className="theme-strong">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar wch-unset">
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
      </div>{" "}
    </>
  );
}
