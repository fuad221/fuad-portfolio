import React from 'react'
import { useAppSelector } from "../../store/hooks";
import Button  from '../../Ui/Button'
import clsx from 'clsx'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import classes from './Works.module.css'

const Works = () => {
    const isDark = useAppSelector((state) => state.darkMode.isDarkMode)


    // transition
    return (
        <div className={classes.works} id="works">
            {/* left side */}
            <div className={classes.wLeft}>
                <div className={classes.awesome}>
                    {/* dark Mode */}
                    <span style={{ color: isDark ? "white" : "" }}>
                        Works for All these
                    </span>
                    <span>Brands & Clients</span>
                    <span>
                        Lorem ispum is simpley dummy text of printing of printing Lorem
                        <br />
                        ispum is simpley dummy text of printingLorem ispum is simpley dummy
                        text
                        <br />
                        y dummy text of printingLorem
                        <br />
                        ispum is simpley dummy text of printing
                    </span>
                    <Link to="contact">
                        <Button className={clsx([classes.button, classes.sButton])}>Hire Me</Button>
                    </Link>
                    <div
                        className={clsx([classes.blur, classes.sBlur1])}
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>

                {/* right side */}
            </div>
            <div className={classes.Wright}>
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className={classes.wMainCircle}
                >
                    <div className={classes.wSecCircle}>
                        <img src={Upwork} alt="" />
                    </div>
                    <div className={classes.wSecCircle}>
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className={classes.wSecCircle}>
                        <img src={Amazon} alt="" />
                    </div>{" "}
                    <div className={classes.wSecCircle}>
                        <img src={Shopify} alt="" />
                    </div>
                    <div className={classes.wSecCircle}>
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                {/* background Circles */}
                <div className={clsx([classes.wBackCircle, classes.blueCircle])}></div>
                <div className={clsx([classes.wBackCircle, classes.yellowCircle])}></div>
            </div>
        </div>
    );
};

export default Works;
