import React from "react";
import { useAppSelector } from "../../store/hooks";
import Contact from "../contact/Contact";
import mc from "./Footer.module.css";
import Wave from "../../img/wave.png";
import { FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';
import { Link } from "react-scroll";
import { Link as LinkWeb } from 'react-router-dom'

const Footer = () => {
  const isDark = useAppSelector((state) => state.darkMode.isDarkMode)
  return (
    <div className={mc.footer} style={{color: isDark?'var(--orange)':''}}>
      <img src={Wave} alt="" style={{ width: "100%" }}  />
      <div className={mc.fContent} style={{color: isDark?'var(--orange)':''}}>
        <span>fuad@gmail.com</span>
        <div className={mc.fIcons} style={{color: isDark?'var(--orange)':''}}>

          
          <a href="https://instagram.com/fuad221"><FaInstagram color="black" size={"3rem"} /></a>
          <a href="https://github.com/fuad221"><FaGithub color="black" size={"3rem"} /></a>
          <a href="https://facebook.com/fuad221"><FaFacebook color="black" size={"3rem"} /></a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
