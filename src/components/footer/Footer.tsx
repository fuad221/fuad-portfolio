import React from "react";
import { useAppSelector } from "../../store/hooks";
import mc from "./Footer.module.css";
import Wave from "../../img/wave.png";
import { FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const isDark = useAppSelector((state) => state.darkMode.isDarkMode)
  return (
    <div className={mc.footer} style={{color: isDark?'var(--orange)':''}}>
      <img src={Wave} alt="" style={{ width: "100%" }}  />
      <div className={mc.fContent} style={{color: isDark?'var(--orange)':''}}>
        <span>fuad@gmail.com</span>
        <div className={mc.fIcons} style={{color: isDark?'var(--orange)':''}}>
          <FaInstagram color="whitesmoke" size={"3rem"} />
          <FaGithub color="whitesmoke" size={"3rem"} />
          <FaFacebook color="whitesmoke" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
