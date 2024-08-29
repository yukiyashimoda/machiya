"use client";
import React, { useEffect, useRef } from "react";

export default function Reserve() {
  const iframeRef = useRef(null); // iframeに対する参照を作成

  useEffect(() => {
    const iframe = iframeRef.current;
    let lastSrc = iframe.src;

    const intervalId = setInterval(() => {
      if (iframe.src !== lastSrc) {
        lastSrc = iframe.src;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 500);

    // クリーンアップ: コンポーネントがアンマウントされるときにintervalをクリア
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="p-0 m-0">
      <iframe
        ref={iframeRef}
        width="100%"
        height="1500px"
        src="https://select-type.com/rsv/?id=304fIyuZ3Ko&w_flg=1"
        frameBorder="0"
      ></iframe>
    </div>
  );
}
