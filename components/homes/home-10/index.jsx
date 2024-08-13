"use client";


import Service from "./Service";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";

export default function Home10({ onePage = false, dark = false }) {
  useEffect(() => {
    const addPaddingLeft = () => {
      const paddingLeftElement = document.getElementById("paddingLeft");
      const paddingLeftContainer = document.getElementById("paddingLeftContainer");
      if (paddingLeftElement && paddingLeftContainer) {
        paddingLeftElement.style.paddingLeft = `${
          (window.innerWidth - paddingLeftContainer.offsetWidth) / 2
        }px`;
      }
    };
    
    const addPaddingRight = () => {
      const paddingRightElement = document.getElementById("paddingRight");
      const paddingRightContainer = document.getElementById("paddingRightContainer");
      if (paddingRightElement && paddingRightContainer) {
        paddingRightElement.style.paddingRight = `${
          (window.innerWidth - paddingRightContainer.offsetWidth) / 2
        }px`;
      }
    };

    addPaddingLeft();
    addPaddingRight();
    
    window.addEventListener("resize", addPaddingLeft);
    window.addEventListener("resize", addPaddingRight);
    
    return () => {
      window.removeEventListener("resize", addPaddingLeft);
      window.removeEventListener("resize", addPaddingRight);
    };
  }, []);

  return (
    <>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="font-alt section-caption-border">当店について</h2>
              <h3 className="section-title-strong mb-60 mb-sm-50 mt-60">
                <span className="font-alt block ">国産鰻の逸品と<br />銘酒を堪能。</span> 
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4 mb-xs-50">
              <div className="call-action-4-images">
                <div className="call-action-4-image-1">
                  <Image
                    width={500}
                    height={692}
                    src="/assets/images/demo-strong/section-image-1.png"
                    alt="Image description"
                    className=" scaleOutIn"
                    data-wow-duration="1.2s"
                  />
                </div>
                <div className="call-action-4-image-2">
                  <Image
                    width={500}
                    height={692}
                    src="/assets/images/demo-strong/section-image-2.png"
                    alt="Image description"
                    className="scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset="0"
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-8 col-lg-6 col-xl-4 offset-xl-1 mt-0">
              <div className="linesAnimIn" data-splitting="lines">
                <p className="lead font-alt mt-5 mb-5 text-sm font-bold">
                市電ロープウェイ入口駅1分。<br />国産鰻を使用。<br />昼はふっくら鰻重を、<br />夜は鰻の逸品と銘酒を<br />ご堪能ください。
                </p>
                <p className="font-alt mb-5">
                和風情緒あふれる<br />落ち着いた雰囲気の店内には、<br />カウンター席とテーブル席を完備。<br />卓を繋げて10名様前後で座れるので、<br />ご家族3世代でのご利用もおすすめです。
                </p>
              </div>

              <div className="local-scroll fadeInUp" data-wow-offset="0">
                {onePage ? (
                  <>
                    <a
                      href="#team"
                      className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                    >
                      <span className="font-alt">
                        地図を開く
                        <span className="visually-hidden">About Us</span>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/about${dark ? "-dark" : ""}`}
                      className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                    >
                      <span className="font-alt">
                        詳細を見る
                        <span className="visually-hidden">About Us</span>
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>

            <div className="col-lg-2 offset-xl-1 d-none d-lg-block bg-gray">
              <div className="round overflow-hidden">
                <Image
                  width={330}
                  height={894}
                  src="/assets/images/demo-strong/section-image-3.png"
                  alt="Image description"
                  className="scaleOutIn"
                  data-wow-duration="1.2s"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content mt-o pt-0" : ""
        }`}
        id="services"
      >
        <section
        className={`page-section  scrollSpysection  overflow-hidden mt-0 pt-0  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="portfolio"
      >
        <Portfolio />
      </section>

        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="font-alt section-caption-border">お品書き</h2>
              <h3 className="section-title-strong mb-90 mb-sm-50">
                  
              </h3>
            </div>
          </div>
          {/* Nav tabs */}

          <Service />
          {/* End Tab panes */}
        </div>
      </section>
      <section
        className="page-section bg-dark-1 light-content"
        style={{
          backgroundImage:
            "url(/assets/images/2.jpg)",
        }}
      ><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </section>
         <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="blog"
      >
        <Blog />
      </section>

    </>
  );
}
