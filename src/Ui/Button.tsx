import React from "react";
import classes from "./Button.module.css"

type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    className?: string | number;
    type?: string;
   
}

 const Button = ({onClick, children}: ButtonProps) => {
    return (
        <button className={classes.button}
            onClick={onClick}
        >
            {children}
        </button>
    )
}


export default Button;