import Map from "@/components/common/Map";
import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import { strongMultiPages } from "@/data/menu";
import dynamic from "next/dynamic";
import Image from "next/image";
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
    "当店について",
};
export default function StrongAboutPage() {
  return (
    <>
      <div className="theme-strong">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar wch-unset">
            <Header10 links={strongMultiPages} />
          </nav>
          <main id="main">
            {/* Home Section */}
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
                    <span className="wow charsAnimIn-2 font-alt" data-splitting="chars">
                      当店について
                    </span>
                  </h1>
                </div>
                {/* End Home Section Content */}
              </div>
            </ParallaxContainer>
            {/* End Home Section */}
            {/* About Section */}
            <section
              className={`page-section  scrollSpysection  ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
              id="about"
            >
              <div className="container">
                <div className="row">
                  <div className="col-sm-4 mb-xs-50">
                    <div className="call-action-4-images">
                      <div className="call-action-4-image-1">
                        <Image
                          width={500}
                          height={692}
                          src="/assets/images/demo-strong/section-image-1.jpg"
                          alt="Image description"
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                        />
                      </div>
                      <div className="call-action-4-image-2">
                        <Image
                          width={500}
                          height={692}
                          src="/assets/images/demo-strong/section-image-2.jpg"
                          alt="Image description"
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                          data-wow-offset="0"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-8 col-lg-6 col-xl-4 offset-xl-1 ">
                  <div className="row fadeInUp" data-wow-delay="0.27s">
        
        <ul className="food-menu">
          <hr />
          <li className="item">
            <span className="sub3">住所</span>
            <span className="sub5">札幌市中央区南19条西15丁目2-7</span>
          </li>
          <hr />
          <li className="item">
            <span className="sub3">営業時間</span>
            <span className="sub5">AM11:00-14:00/PM17:00-22:00</span>
          </li>
          <hr />
          <li className="item">
            <span className="sub3">定休日</span>
            <span className="sub5">毎週火曜日</span>
          </li>
          <hr />
          <li className="item">
            <span className="sub3">駐車場</span>
            <span className="sub5">3台
            </span>
          </li>
          
          <hr />
        </ul>
        
        {/* ボタンの追加 */}
        <div className="text-center mt-4">
          {/* 電話をかけるボタン */}
          <a href="tel:011-600-1747" className="btn btn-secondary me-2 sub4">
            電話をかける
          </a>
          {/* メールを送るボタン */}
          <a href="mailto:info@unagi-machiya.com" className="btn btn-secondary me-2 sub4">
            メールを送る
          </a>
          <a href="/menu" className="btn btn-secondary sub4">
            お品書きを見る
          </a>
        </div>
        <div className="mt-30">
                        <Image
                          width={1500}
                          height={1000}
                          src="/assets/images/machiya_parking.png"
                          alt="Image description"
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                        />
                        <p className="sub4 text-center mr-0">(ランチタイムは近隣に第二駐車場あり)</p>
                      </div>
      </div>

                    
                  </div>
                </div>
              </div>
            </section>
            <div className="google-map">
                <Map />
              </div>
          </main>

          <footer className="footer-1 bg-dark-1 light-content">
            <Footer9 />
          </footer>
        </div>
      </div>{" "}
    </>
  );
}
