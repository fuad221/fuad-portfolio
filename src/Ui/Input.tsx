import React, { InputHTMLAttributes, DetailedHTMLProps } from 'react';
import classes from './Input.module.css';
import clsx from 'clsx';

// https://dev.to/giselamd/creating-a-react-input-component-in-typescript-hai

type NativeInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
interface InputProps extends NativeInputProps {
    inputIcon?: string;
}

const Input = ({ className, children, inputIcon, ...rest }: InputProps) => {
    return (
        <div>
            {inputIcon}
            <input className={clsx([classes.user, className])}
                {...rest} />
            {children}
        </div>
    )
}

export default Input