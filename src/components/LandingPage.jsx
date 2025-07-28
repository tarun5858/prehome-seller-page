import bannerImg from "../assets/img/image 1.png";
import CustomOutlineCta from "./OutlineCta";
// import GreenFilledCta from "../components/GreenFilledCta";

import LargeCustomCta from "./LargeCustomCta";

const LandingPage = () =>{
    return(
        <section className=" section-padding-home text-md-start">
        <div className="">
          <div className="container container-lg">
            <div className="row home-text-img-container mt-4">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-column align-items-between">
                <div className="pe-lg-3 ">
                  <h6>&nbsp;</h6>
                  <h1 className="fs-lg-seller">
                    India's First Guaranteed <br />
                    Rent-to-Own Platform
                  </h1>
                </div>
              <div className="banner-img-seller-mobile  col-12 col-sm-12 col-md-6 col-lg-6">
                <img src={bannerImg} alt=""  className="banner-img-seller"    />
              </div>

                <p className="sub-head-home">
                  <b> We match your property with qualified families</b>,
                  guarantee your monthly rent, and handle everything in between.
                </p>
                <div className="  d-flex landing-page-cta-parent">
               
            <LargeCustomCta text="Get My Property Assesed" className="Landing-page-cta"></LargeCustomCta>

                  <CustomOutlineCta text="See How It Works" className="landingpage-cta" />
                </div>

                {/* <LargeBlueCta text="Join our waitlist"></LargeBlueCta> */}
              </div>
                 <div className="banner-img-seller-desktop col-12 col-sm-12 col-md-6 col-lg-6">
                <img src={bannerImg} alt=""  className="banner-img-seller"    />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default LandingPage