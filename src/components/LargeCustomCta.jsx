import React from "react";
import "../App.css";

const LargeCustomCta = ({text,className}) =>{
    return(
        
        <button 
        // className=" btn-radius animated"
        className={`${className} btn-radius animated`}
                  data-animation-in="fadeInRight"
                  data-delay-in="0.9"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
            {text}
        </button>
        
    )
}
export default LargeCustomCta;