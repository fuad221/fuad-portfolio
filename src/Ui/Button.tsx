import clsx from "clsx";
import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";
import classes from "./Button.module.css"

// interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
// type ButtonProps = {
//     onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
//     children: React.ReactNode;
//     className?: string ;
//     type?: "button" | "submit" | "reset" ;
// }

type NativeButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface ButtonProps extends NativeButtonProps {

}

const Button = ({ className, ...rest }: NativeButtonProps) => {

    return (
        <button about="" className={clsx([classes.button, className])}
            {...rest}
        />
    )
}



export default Button;