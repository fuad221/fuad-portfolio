import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import mc from "./Button.module.css"

type NativeButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface ButtonProps extends NativeButtonProps {
}

const Button = ({ className, ...rest }: NativeButtonProps) => {

    return (
        <button className={clsx([mc.button, className])}
            {...rest}
        />
    )
}




export default Button;