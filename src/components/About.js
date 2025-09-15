import React, { useEffect, useState } from "react";
import UserClass from "./UserClass";

export const About = () => {
  useEffect(() => {
    const intv = setInterval(() => {
      console.log("from about");
    }, 1000);
    return () => {
      clearInterval(intv);
    };
  }, []);
  return (
    <div className="about-us-container">
      <div className="about-us-image-container">
        <div className="about-us-info">
          <h2>ABOUT US</h2>
        </div>
        <div>
          <p className="intro-text">
            We are new-age consumer-first organization offering an easy-to-use
            convenience platform, accessible through a unified app.
          </p>
          <div className="about-us-logo-container">
            <img
              className="about-us-company-logo"
              src="https://as1.ftcdn.net/v2/jpg/02/41/30/72/1000_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
              alt="logo"
            />
          </div>
        </div>
        <UserClass name={"Harry"} location="Telangana" />
      </div>
    </div>
  );
};
