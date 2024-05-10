import React from "react";
import style from "./Button.module.scss";
import { text } from "stream/consumers";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Button({text,type,onClick}: ButtonProps ) {
  return <button onClick={onClick} type={type} className={style.botao}> 
           {text}
          </button>;
}
export default Button;