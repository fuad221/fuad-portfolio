import React from 'react'
import { Link } from 'react-scroll';
import classes from './Navbar.module.css'
import Button from '../../Ui/Button'
import Toggle from '../Toggle/Toggle'



type NavbarProps = {
    children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
    return (
        <>
            <div className={classes.wrapper} >
                <div className={classes.left}>
                    <div className={classes.name}>Fuad</div>
                    <Toggle />
                </div>
                <div className={classes.right}>
                    <div className={classes.list}>
                        <ul style={{ listStyleType: "none" }}>
                            <li>
                                <Link className="active" to="home" spy={true} smooth={true}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="services" spy={true} smooth={true}>     Services       </Link>
                            </li>
                            <li>
                                <Link to="works" spy={true} smooth={true}>    Experience  </Link>
                            </li>
                            <li>
                                <Link to="portfolio" spy={true} smooth={true}>
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link to="testimonial" spy={true} smooth={true}>
                                    Testimonial
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="contact" spy={true} smooth={true}>
                        <Button className={classes.button} onClick={() => {}}>Contact my</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
