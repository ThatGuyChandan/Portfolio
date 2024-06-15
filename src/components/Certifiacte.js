import React, { useEffect } from "react";
import certi from "../data/Certificate";

const Certificate = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="certificates-container">
      <h1>Certificates & Badges</h1>
      <div className="certi-box">
        {certi.map((certificate, index) => (
          <div
            className="cerit-element"
            key={certificate.id}
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id={certificate.id}
            data-share-badge-host="https://www.credly.com"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
