import AnimatedText from "@/components/common/AnimatedText";
import React from "react";

export default function Hero1() {
  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
      {/* Home Section Content */}
      <div className="home-content text-center">
      <span className="wow charsAnimIn-1" data-splitting="chars">
        <img src="/assets/images/machiyalogo.png" alt="Test" />
      </span>

        <div className="local-scroll wow fadeInUpShort" data-wow-delay="0.57s">
          <a
            href="#about"
            className="link-hover-anim link-circle-1 align-middle"
            data-link-animate="y"
          >
            <span className="link-strong link-strong-unhovered">
              ご予約はこちら{" "}
              <i
                className="mi-arrow-right size-18 align-middle"
                aria-hidden="true"
              ></i>
            </span>
            <span
              className="link-strong link-strong-hovered"
              aria-hidden="true"
            >
              ご予約はこちら{" "}
              <i
                className="mi-arrow-right size-18 align-middle"
                aria-hidden="true"
              ></i>
            </span>
          </a>
        </div>
      </div>
      {/* End Home Section Content */}
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-3-wrap wow fadeInUp"
        data-wow-offset={0}
      >
        <a href="#about" className="scroll-down-3">
          Scroll Down
        </a>
      </div>
      {/* End Scroll Down */}
    </div>
  );
}
