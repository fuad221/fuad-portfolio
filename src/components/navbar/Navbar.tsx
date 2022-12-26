import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'
import Button from '../../Ui/Button'
import Toggle from '../Toggle'



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
                                <Link className="active" to="home">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="services">     Services       </Link>
                            </li>
                            <li>
                                <Link to="works">    Experience  </Link>
                            </li>
                            <li>
                                <Link to="portfolio">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link to="testimonial">
                                    Testimonial
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="contact" >
                        <Button className={classes.button} onClick={() => {}}>Contact my</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
