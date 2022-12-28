import React from "react";
import "./Footer.module.css";
import Wave from "../../img/wave.png";
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import { FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';

// import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="fContent">
        <span>Zainkeepscode@gmail.com</span>
        <div className="fIcons">
          <FaInstagram color="white" size={"3rem"} />
          <FaGithub color="white" size={"3rem"} />
          <FaFacebook color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
