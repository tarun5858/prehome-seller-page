import React from "react";
import "../App.css";

const RealResultCta = ({text}) =>{
    return(
        
        <button 
        className="real-result-cta  animated"
                  data-animation-in="fadeInRight"
                  data-delay-in="0.9"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
            {text}
        </button>
        
    )
}
export default RealResultCta;