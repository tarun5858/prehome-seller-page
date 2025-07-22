import React from "react";
import "../App.css";

const GreenFilledCta = ({text}) =>{
    return(
        
        <button 
        className="green-filled-cta btn-radius animated"
                  data-animation-in="fadeInRight"
                  data-delay-in="0.9"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
            {text}
        </button>
        
    )
}
export default GreenFilledCta;