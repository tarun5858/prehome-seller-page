import React from "react";
// import GreenFilledCta from "./GreenFilledCta";
import backgroundImage from "../assets/img/caltoactionbg.png"
import LargeCustomCta from "./LargeCustomCta";
const PreFooter = () => {
  return (
    <section
      className="why-choice-us section-padding bg-cover "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container container-lg">
        <div className="row ">
          <div
            className="col-12 cal-to-action pt-100 pb-100 aos-item footer-section text-left"
            data-aos="flip-up"
          >
            <h2 className="prefooter-head"><span style={{color:"#000"}}>Ready to</span> Maximize Your <br />Property's Potential<span style={{color:"#000"}}>?</span></h2>
            <p className="text-white pb-4 mt-10 mb-30">
              Be the first to know about our upcoming homes near you!!
            </p>

            {/* <GreenFilledCta text="Get My Property Assesed"></GreenFilledCta> */}
            <LargeCustomCta text="Get My Property Assesed" className="LargeCustomCta"></LargeCustomCta>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PreFooter;
