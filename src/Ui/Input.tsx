import React from 'react'
import classes from './Input.module.css'

import clsx from 'clsx'

type InputProps = {
    type: string;
    name?: string;
    className? : string;
    placeholder?: string;
    value? : string | number;
}

const Input = ({className, ...rest}: InputProps) => {
  return (
        <input className= {clsx([classes.user, className])}
        {...rest}
        />
   
  )
}

export default Input