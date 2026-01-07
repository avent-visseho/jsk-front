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
            //backgroundColor: "#10243f",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          <FiFacebook style={{ color: "#fff", fontSize: "16px" }} />
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
            //backgroundColor: "#10243f",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          <FiX style={{ color: "#fff", fontSize: "16px" }} />
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
            //backgroundColor: "#10243f",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          <FiLinkedin style={{ color: "#fff", fontSize: "16px" }} />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
