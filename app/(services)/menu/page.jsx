import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Service from "@/components/homes/home-10/Service";

import { strongMultiPages } from "@/data/menu";
import dynamic from "next/dynamic";
import Gallery1 from "../../../components/gallery/Gallery1";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
const dark = false;
const onePage = false;
export const metadata = {
  title:
    "menu",
  description:
    "当店のお料理をご紹介します。",
};
export default function StrongServicesPage() {
  return (
    <>
      <div className="theme-strong">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar wch-unset">
            <Header10 links={strongMultiPages} />
          </nav>
          <main className="main">
            <ParallaxContainer
              className="page-section bg-dark-alpha-30 light-content parallax-5"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-strong/section-bg-1.jpg)",
              }}
              id="home"
            >
              <div className="container position-relative pt-sm-30">
                {/* Home Section Content */}
                <div className="home-content text-center">
                  <h1 className="hs-title-7 mb-0">
                    <span className="wow charsAnimIn-2" data-splitting="chars">
                       <span className="font-alt">お品書き</span>
                    </span>
                  </h1>
                </div>
                {/* End Home Section Content */}
              </div>
            </ParallaxContainer>
            <section
              className={`page-section  scrollSpysection  ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
              id="services"
            >
              <div className="container">
                {/* Nav tabs */}

                <Service />
                {/* End Tab panes */}
              </div>
            </section>
            <section className="pt-30">
              <div id="paddingRightContainer" className="container" />
              <div className="row g-0 mb-30">
                <Gallery1 />
              </div>
            </section>
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer9 />
          </footer>
        </div>
      </div>{" "}
    </>
  );
}
