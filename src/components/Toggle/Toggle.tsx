import React from 'react';
import { darkModeActions } from '../../store/DarkModeSlice';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Button from '../../Ui/Button'
import { FaSun, FaMoon } from 'react-icons/fa';
import mc from './Toggle.module.css'
import './toggle.css'


const Toggle = () => {
    const dispatch = useAppDispatch();
    const isDarkMode = useAppSelector((state) => state.darkMode.isDarkMode);

    const handleToggle = () => {
        dispatch(darkModeActions.toggleDarkMode())
    }

    return (
        <div className={mc.toggle}>

            <Button onClick={handleToggle} >{isDarkMode ? <FaSun /> : <FaMoon />}</Button>

            <div
                className={mc.button}
                style={isDarkMode ? { left: "2px" } : { right: "2px" }}
            ></div>
        </div>
    )
}

export default Toggle;

