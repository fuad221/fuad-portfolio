import clsx from "clsx";
import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";
import classes from "./Button.module.css"

type NativeButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface ButtonProps extends NativeButtonProps {
}

const Button = ({ className, ...rest }: NativeButtonProps) => {

    return (
        <button className={clsx([classes.button, className])}
            {...rest}
        />
    )
}




export default Button;