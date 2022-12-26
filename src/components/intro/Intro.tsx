import React from 'react'
import { darkModeActions } from '../../store/DarkModeSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Button from '../../Ui/Button';
import { Link } from 'react-router-dom';
import classes from './Intro.module.css';
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Intro = () => {

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
          <Button onClick={() => { }} className={classes.button}>Hire me</Button>
        </Link>
        {/* social icons */}
        <div className={classes.icons}>
          <FaInstagram />
          <FaLinkedinIn />
          <FaGithub />

        </div>
      </div>
      {/* right image side */}
      
      </div>
  )
}

export default Intro