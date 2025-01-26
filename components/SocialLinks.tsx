import React from "react";
import { FiFacebook, FiLinkedin, FiX } from "react-icons/fi";

const SocialLinks = () => {
  return (
    <ul className="header-social-network d-inline-block list-inline mr-15">
      <li className="list-inline-item">
        <a
          className="social-icon fb text-xs-center"
          target="_blank"
          href="https://www.facebook.com/jed.koboude"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FiFacebook style={{ color: "#fff", fontSize: "15px" }} />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          className="social-icon tw text-xs-center"
          target="_blank"
          href="https://x.com/koboude"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FiX style={{ color: "#fff", fontSize: "15px" }} />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          className="social-icon in text-xs-center"
          target="_blank"
          href="https://www.linkedin.com/in/sophonie-jed-koboude-622856a9/"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FiLinkedin style={{ color: "#fff", fontSize: "15px" }} />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
