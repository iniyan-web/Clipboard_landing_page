import React from "react";
import deviceImg from "../images/image-devices.png";
import blacklistImg from "../images/icon-blacklist.svg";
import textImg from "../images/icon-text.svg";
import previewImg from "../images/icon-preview.svg";

const FeatureSecond = () => {
  return (
    <>
      <section className="feature-second">
        <div className="top-section">
          <div className="fs-ts-text">
            <h2 className="fs-ts-title">Access Clipboard anywhere</h2>
            <p className="fs-ts-info">
              Whether you’re on the go, or at your computer, you can access all
              your Clipboard snippets in a few simple clicks.
            </p>
          </div>
          <img
            className="fs-ts-img"
            src={deviceImg}
            alt="A set of electronic devices."
          />
        </div>
        <div className="bottom-section">
          <div className="fs-bs-main">
            <h2 className="fs-bs-main-title">Supercharge your workflow</h2>
            <p className="fs-bs-main-info">
              We’ve got the tools to boost your productivity.
            </p>
          </div>
          <div className="fs-bs-sub">
            <div className="fs-bs-sub-feature">
              <img
                className="fs-bs-sub-img"
                src={blacklistImg}
                alt="A list illustration."
              />
              <h3 className="fs-bs-sub-heading">Create blacklists</h3>
              <p className="fs-bs-sub-info">
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </div>
            <div className="fs-bs-sub-feature">
              <img
                className="fs-bs-sub-img"
                src={textImg}
                alt="A text illustration."
              />
              <h3 className="fs-bs-sub-heading">Plain text snippets</h3>
              <p className="fs-bs-sub-info">
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>
            <div className="fs-bs-sub-feature">
              <img
                className="fs-bs-sub-img"
                src={previewImg}
                alt="An animated eye used as a preview illustration."
              />
              <h3 className="fs-bs-sub-heading">Sneak preview</h3>
              <p className="fs-bs-sub-info">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSecond;
