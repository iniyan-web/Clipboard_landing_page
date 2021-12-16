import React from "react";
import iMacImg from "../images/image-computer.png";

const FeatureFirst = () => {
  return (
    <>
      <section className="feature-first">
        <div className="top-section">
          <h2 className="ff-ts-title"> Keep track of your snippets</h2>
          <p className="ff-ts-info">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
        <div className="bottom-section">
          <img className="ff-bs-img" src={iMacImg} alt="An iMAC computer." />
          <div className="ff-bs-text">
            <h3 className="ff-bs-title">Quick Search</h3>
            <p className="ff-bs-info">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
            <h3 className="ff-bs-title">iCloud Sync</h3>
            <p className="ff-bs-info">
              Instantly saves and syncs snippets across all your devices.
            </p>
            <h3 className="ff-bs-title">Complete History</h3>
            <p className="ff-bs-info">
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureFirst;
