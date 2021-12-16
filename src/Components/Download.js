import React from "react";
import googleImg from "../images/logo-google.png";
import ibmImg from "../images/logo-ibm.png";
import msImg from "../images/logo-microsoft.png";
import hpImg from "../images/logo-hp.png";
import vgImg from "../images/logo-vector-graphics.png";
import DownloadButtons from "./DownloadButtons";

const Download = () => {
  return (
    <>
      <section className="download">
        <div className="top-section">
          <img
            className="d-ts-img"
            src={googleImg}
            alt="Google illustration."
          />
          <img className="d-ts-img" src={ibmImg} alt="IBM illustration." />
          <img className="d-ts-img" src={msImg} alt="Microsoft illustration." />
          <img
            className="d-ts-img"
            src={hpImg}
            alt="Hewlett packard illustration."
          />
          <img
            className="d-ts-img"
            src={vgImg}
            alt="Vector graphics illustration."
          />
        </div>
        <div className="bottom-section">
          <h2 className="d-bs-title">Clipboard for iOS and Mac OS</h2>
          <p className="d-bs-info">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you’re ready to start adding to your clipboard.
          </p>
          <DownloadButtons />
        </div>
      </section>
    </>
  );
};

export default Download;
