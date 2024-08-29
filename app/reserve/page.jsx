
import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";

import { strongMultiPages } from "@/data/menu";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Reserve from "../../components/homes/home-10/Reserve";
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
    "うなぎと酒 まちや",
  description:
    "予約ページ",
};
export default function StrongContactPage() {
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
              <div className="container position-relative pt-sm-0">
                {/* Home Section Content */}
                <div className="home-content text-center">
                  <h6 className="hs-title-3 mb-0 mt-5">
                    <span className=" charsAnimIn-2 font-alt" data-splitting="chars">
                      ご予約はこちら
                    </span>
                  </h6>
                </div>
                {/* End Home Section Content */}
              </div>
            </ParallaxContainer>
            <section
              className={`page-section  scrollSpysection  ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
              id="reserve"
            >
              <Reserve />
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
