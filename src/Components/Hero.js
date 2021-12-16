import React from "react";
import heroLogo from "../images/logo.svg";
import DownloadButtons from "./DownloadButtons";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <img className="hero-logo" src={heroLogo} alt="Home." />
        <h1 className="hero-title">A history of everything you copy</h1>
        <p className="hero-info">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <DownloadButtons />
      </section>
    </>
  );
};

export default Hero;
