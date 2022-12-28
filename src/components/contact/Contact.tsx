import React, { useRef, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import Input from '../../Ui/Input'
import classes from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import clsx from "clsx";


const Contact = () => {
    const isDark = useAppSelector((state) => state.darkMode.isDarkMode)

    const form = useRef<HTMLFormElement>(null);
    const [done, setDone] = useState(false)

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_2mu5xtl",
                "template_m5udu2c",
                // @ts-ignore
                form.current,
                "VLwg1ltOWvnCYAiK_"
            )
            .then(
                (result: any) => {
                    console.log(result.text);
                    setDone(true);
                    form.current?.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="contactForm" id="contact">
            {/* left side copy and paste from work section */}
            <div className="wLeft">
                <div className="awesome">
                    {/* isDark */}
                    <span style={{ color: isDark ? 'white' : '' }}>Get in Touch</span>
                    <span>Contact me</span>
                    <div
                        className={clsx([classes.blur, classes.cBlur1])}
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>
            {/* right side form */}
            <div className={classes.cRight}>
                <form ref={form} onSubmit={sendEmail}>
                    <Input type="text" name="user_name" className="user" placeholder="Name" />
                    <Input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <Input type="submit" value="Send" className="button" />
                    <span>{done && "Thanks for Contacting me"}</span>
                    <div
                        className={clsx([classes.blur, classes.cBlur1])}
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
