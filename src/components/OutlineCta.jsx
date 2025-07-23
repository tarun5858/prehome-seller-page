// import "../assets/style.css";
// import { useState } from "react";

const OutlineCta = ({ text, isClicked, onClick,src, ...props }) => {
  return (
    <button
      type="button"
      className={`outline-cta ${isClicked ? 'clicked' : ''}`}
      onClick={onClick}
      {...props}
    >
      {text}
      <img src={src} alt="" />
    </button>
  );
};

export default OutlineCta;
