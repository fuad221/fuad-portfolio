
import React from "react";
import Button from '../../Ui/Button'
import mc from "./Card.module.css";

type CardProp ={
    emoji: string, 
    heading: string, 
    detail: string, 
    color?: string,
    // styles?: React.CSSProperties  // ???
}

const Card = ({emoji, heading, detail, color}: CardProp) => {
  return (
    <div className={mc.card}   style={{borderColor: color}}
    > 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <Button className={mc.cButton} onClick={()=> {}}>Learn more</Button>
    </div>
  );
};

export default Card;