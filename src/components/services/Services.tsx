import React from 'react'
import { useAppSelector } from '../../store/hooks';
import mc from './Services.module.css';
import clsx from 'clsx';
import Button from '../../Ui/Button';
import Card from '../card/Card';
import { motion } from "framer-motion";
import  HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from '../../img/humble.png';
import { Link } from 'react-router-dom';
// import Resume from '../services/resume.pdf';


const Services = () => {

    // const isDark = useAppSelector((state) => state.darkMode.isDarkMode)
    const isDark = useAppSelector ((state) => state.darkMode.isDarkMode)

    const transition = { duration: 1, type: "spring" };
    return (
        <div className={mc.services} id="services">
            {/* left side */}
            <div className={mc.awesome}>
                {/* dark mode */}
                <span style={{ color: isDark ? "white" : "" }}>My Awesome</span>
                <span>services</span>
                <span>
                    Lorem ispum is  dummy text of printing of printing Lorem
                    <br />
                    ispum is  dummy text of printing
                </span>
                {/* <a href={Resume} download>
                    <Button type="button"className={mc.button + ' ' + mc.sButton} >Download CV</Button>
                </a> */}
                <div className={mc.blur + '' + mc.sBlur1} style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right */}
            <div className={mc.cards}>
                {/* first card */}
                <motion.div
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={HeartEmoji}
                        heading={"Design"}
                        detail={"Adobe xd, Photoshope, Adobe Illustrator, Blender 3D"}
                    />
                </motion.div>
                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Html, Css, JavaScript, React, Vue, Typescript, Python(basic), "}
                    />
                </motion.div>

                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={
                            "Lorem ispum dummy text are usually use in section where we need some random text"
                        }
                        color="rgba(252, 166, 31, 0.45)"
                    />
                </motion.div>
                <div
                    className={clsx([mc.blur, mc.sBlur2])}
                    style={{ background: "var(--purple)" }}
                ></div>
            </div>
        </div >
    )
}


export default Services