import clsx from "clsx";
import React, { HTMLAttributes } from "react";
import classes from "./Button.module.css"

// interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    className?: string ;
    type?: "button" | "submit" | "reset" ;
   
}
 const Button = ({ className, ...rest}: ButtonProps) => {
    return (
        <button className={clsx( [classes.button, className])}
            {...rest}
        />
    )
}




export default Button;