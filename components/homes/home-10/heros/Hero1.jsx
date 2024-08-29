import React, { useState } from "react";

function ReserveModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "15%",
        bottom: "10px",
        left: "0",
        width: "100%",
        height: "85%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "90%",
          maxWidth: "800px",
          height: "100%",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "8px",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "rgba(0, 0, 0, 0.5)",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "white",
          }}
        >
          close&times;
        </button>
        <iframe
          width="100%"
          height="100%"
          src="https://select-type.com/rsv/?id=304fIyuZ3Ko&w_flg=1"
          frameBorder="0"
          style={{ borderRadius: "8px" }}
        ></iframe>
      </div>
    </div>
  );
}

export default function Hero1() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
      {/* Home Section Content */}
      <div className="home-content text-center">
        <span className="charsAnimIn-1" data-splitting="chars">
          <img src="/assets/images/machiyalogo.png" alt="Test" />
        </span>

        <div className="local-scroll fadeInUpShort" data-wow-delay="0.57s">
          <button
            onClick={openModal}
            className="link-hover-anim link-circle-1 align-middle"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span className="font-alt link-strong link-strong-unhovered">
              ご予約はこちら{" "}
              <i
                className="mi-arrow-right size-18 align-middle"
                aria-hidden="true"
              ></i>
            </span>
            <span
              className="font-alt link-strong link-strong-hovered"
              aria-hidden="true"
            >
              ご予約はこちら{" "}
              <i
                className="mi-arrow-right size-18 align-middle"
                aria-hidden="true"
              ></i>
            </span>
          </button>
        </div>
      </div>
      {/* End Home Section Content */}
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-3-wrap fadeInUp"
        data-wow-offset={0}
      >
        <a href="#about" className="scroll-down-3">
          Scroll Down
        </a>
      </div>
      {/* End Scroll Down */}
      <ReserveModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
