// import "../assets/style.css";
// import { useState } from "react";

const CustomOutlineCta = ({ text, isClicked, onClick,src,className}) => {
  return (
    <button
      type="button"
      className={`${className} ${isClicked ? 'clicked' : ''}`}
      onClick={onClick}
      // {...props}
    >
      {text}
      <img src={src} alt="" style={{marginLeft:"3%"}}/>
    </button>
  );
};

export default CustomOutlineCta;
