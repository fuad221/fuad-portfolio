import React from 'react';
import { useAppSelector } from "../../store/hooks";
import { Link } from 'react-router-dom';
import Button  from '../../Ui/Button';
import clsx from 'clsx';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";
import mc from './Works.module.css';

const Works = () => {
    const isDark = useAppSelector((state) => state.darkMode.isDarkMode)


    // transition
    return (
        <div className={mc.works} id="works">
            {/* left side */}
            <div className={mc.wLeft}>
                <div className={mc.awesome}>
                    {/* dark Mode */}
                    <span style={{ color: isDark ? "white" : "" }}>
                        Works for All these
                    </span>
                    <span>Brands & Clients</span>
                    <span>
                        Lorem ispum is dummy text of printing of printing Lorem
                        <br />
                        ispum is dummy text of printingLorem ispum is dummy
                        text
                        <br />
                        y dummy text of printingLorem
                        <br />
                        ispum is dummy text of printing
                    </span>
                    <Link to="contact">
                        <Button className={clsx([mc.button, mc.sButton])}>Hire Me</Button>
                    </Link>
                    <div
                        className={clsx([mc.blur, mc.sBlur1])}
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>

                {/* right side */}
            </div>
            <div className={mc.Wright}>
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className={mc.wMainCircle}
                >
                    <div className={mc.wSecCircle}>
                        <img src={Upwork} alt="" />
                    </div>
                    <div className={mc.wSecCircle}>
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className={mc.wSecCircle}>
                        <img src={Amazon} alt="" />
                    </div>{" "}
                    <div className={mc.wSecCircle}>
                        <img src={Shopify} alt="" />
                    </div>
                    <div className={mc.wSecCircle}>
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                {/* background Circles */}
                <div className={clsx([mc.wBackCircle, mc.blueCircle])}></div>
                <div className={clsx([mc.wBackCircle, mc.yellowCircle])}></div>
            </div>
        </div>
    );
};

export default Works;
