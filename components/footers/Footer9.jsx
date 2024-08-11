import { socialMediaLinks } from "@/data/footer";
import React from "react";

export default function Footer9() {
  return (
    <div className="container">
      <div className="page-section">
        <div className="row">
          
          <div className="col-lg-6 footer-social-links text-center mb-md-40">
            {socialMediaLinks.map((elm, i) => (
              <a
                key={i}
                href={elm.href}
                title="Facebook"
                rel="noopener nofollow"
                target="_blank"
              >
                <span className="visually-hidden">{elm.name}</span>
                <i className={elm.iconClass} />
              </a>
            ))}
          </div>
          {/* End Social Links */}
          <div className="col-lg-3 text-center text-lg-end local-scroll">
            <a href="#top" className="fw-top-link">
              <span className="fw-top-link-underline">Back to top</span>
              <span className="icon ms-1">
                <i className="icon-arrow-up size-17" />
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* Footer Text */}
      <div className="footer-text text-center opacity-75 mt-n10 pb-50">
        市電「ロープウェイ入口駅」徒歩2分。
        <hr className={`mt-0 mb-0  `} />

        〒064-0919 北海道札幌市中央区南１９条西１５丁目２−７<br />
        AM11:00-14:00 / PM17:00-22:00<br />
        定休日：火曜日
        </div>
        <div className="text-center mb-md-mt-50">
            © うなぎと酒 まちや {new Date().getFullYear()}.
          </div>
      {/* End Footer Text */}
    </div>
  );
}
