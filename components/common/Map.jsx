"use client";

import { useState } from "react";

export default function Map() {
  const [mapOpen, setMapOpen] = useState(false);
  return (
    <>
      <a href="#" className={`map-section ${mapOpen ? "js-active" : ""}`}>
        <div className="map-toggle wow fadeInUpShort" aria-hidden="true">
          <div className="mt-icon">
            <i className="mi-location"></i>
          </div>
          <div className="mt-text">
            <div onClick={() => setMapOpen((pre) => !pre)} className="mt-open">
              Mapを開く <i className="mt-open-icon"></i>
            </div>
            <div onClick={() => setMapOpen((pre) => !pre)} className="mt-close">
              Map <i className="mt-close-icon"></i>
            </div>
          </div>
        </div>
      </a>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.366131337449!2d141.33423207614427!3d43.033727471138256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2b00144ece35%3A0xd6fed657eab3fb5e!2z44GG44Gq44GO44Go6YWSIOOBvuOBoeOChA!5e0!3m2!1sja!2sjp!4v1723389669100!5m2!1sja!2sjp" 
      width={600}
      height={450}
      loading="lazy"
      style={{ border: 0 }}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex={0}
      />
      </>
  );
}
