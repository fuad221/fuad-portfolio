import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
 
import mc from './Input.module.css'

import clsx from 'clsx'

// type InputProps = {
//     type: string;
//     name?: string;
//     className? : string;
//     placeholder?: string;
//     value? : string | number;
// }

type NativeInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = ({className, ...rest}: NativeInputProps) => {
  return (
        <input className= {clsx([mc.user, className])}
        {...rest}
        />
   
  )
}

export default Input