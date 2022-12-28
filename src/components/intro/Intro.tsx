import React, { ReactNode } from 'react'
import { darkModeActions } from '../../store/DarkModeSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Button from '../../Ui/Button';
import { Link } from 'react-router-dom';
import classes from './Intro.module.css';
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import { motion } from "framer-motion";

const Intro = () => {

  const isDarkMode = useAppSelector ((state) => state.darkMode.isDarkMode)
  const transition = { duration: 2, type: "spring" };

  return (
    <div className={classes.Intro} id="Intro">
      {/* left name side */}
      <div className={classes.left}>
        <div className={classes.name}>

          {/* yahan change hy darkmode ka */}
          {/* <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span> */}
          <span>Fuad</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, productions the Quality work
          </span>
        </div>
        <Link to="contact">
          <Button>Hire me</Button>
        </Link>
        {/* social icons */}
        <div className={classes.icons}>
          <FaInstagram />
          <FaLinkedinIn />
          <FaGithub />

        </div>
      </div>
      {/* right image side */}
      {/* right image side */}
      <div className={classes.right}>
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className={classes.floatingDiv}
        >
          <FloatingDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className={classes.floatingDiv}
        >
          <FloatingDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className={classes.blur} style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className={classes.blur}
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
      </div>
  )
}

export default Intro