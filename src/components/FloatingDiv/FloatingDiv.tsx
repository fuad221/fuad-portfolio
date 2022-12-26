import React from "react";
import classes from './FloatingDiv.module.css'

type FloatingDivProps = {
    img: string;
    text1: string;
    text2: string;
}
const FloatingDiv = ({img, text1, text2}: FloatingDivProps) => {
  return (
    // darkMode
    <div className={classes.floatingdiv}>
      <img src={img} alt="" />
      <span>
        {text1}
        <br/>
        {text2}
      </span>
    </div>
  );
};

export default FloatingDiv;
