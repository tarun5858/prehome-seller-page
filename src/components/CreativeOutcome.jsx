import OutcomesImg from "../assets/img/Frame 1000004596 (1).png";
import image1 from "../assets/img/image 3.png";
import image2 from "../assets/img/image 4.png";
import image3 from "../assets/img/image 5.png";
import image4 from "../assets/img/image 6.png";
import image5 from "../assets/img/image 7.png";

import numberimg1 from "../assets/img/Frame 1000001654.png";
import numberimg2 from "../assets/img/Frame 1000001654 (1).png";
import numberimg3 from "../assets/img/Frame 1000001654 (2).png";
import numberimg4 from "../assets/img/Frame 1000001654 (3).png";
import numberimg5 from "../assets/img/Frame 1000001654 (4).png";


import bgImage from "../assets/img/Vector 459.png";


const CreativeOutcomes = () => {
  // console.log(bgImage)
  return (
    <>
      <section className="prehome-benefit-sec">
        <div className="container container-lg" 
     >
          {/* <div className=" align-items-center" > */}
            <div className="row">
              <div className="col-12 mb-md-3 mb-sm-0  ">
                <div className=" text-center aos-item" data-aos="fade-down">
                  <h2 className="sec-title-h2">
                    How Prehome Creates Win-Win Outcomes
                  </h2>
                  <img src={OutcomesImg} alt="" />
                </div>
              </div>
            </div>
 <div className="row">
              <div className="col-7 mb-md-3 mb-sm-0 d-block d-lg-none">
                <div className=" text-center aos-item" data-aos="fade-down">
                  <div className="img-cont">
                    <img src={numberimg1} alt="" />
                    <img src={image1} alt="" />
                  </div>
                  <p>
                    List Your Property <br />
                    Move-in ready properties in our coverage area
                  </p>
                </div>
              </div>
              <div className="col-5 mb-md-3 mb-sm-0 d-block d-lg-none">
                <div
                  className=" text-center aos-item"
                  data-aos="fade-down"
                ></div>
              </div>
            </div>

<div className="align-items-center d-block d-lg-none"
  style={{
    backgroundImage: `url('${bgImage}')`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh", // important
    width: "100%", // full width
    padding: "20px 0",
  }}>
 


            <div className="row creative-outcome-rows">
              <div className="col-5 mb-md-3 mb-sm-0 d-block d-lg-none">
                <div className=" text-center aos-item" data-aos="fade-down">
                  
                </div>
              </div>
              <div className="col-7 mb-md-3 mb-sm-0 d-block d-lg-none">
              <div className=" text-center aos-item" data-aos="fade-down">
                  <div className="img-cont">
                    <img src={numberimg2} alt="" />
                    <img src={image2} alt="" />
                  </div>
                  <p>
                    List Your Property <br />
                    Move-in ready properties in our coverage area
                  </p>
                </div>
              </div>
            </div>



            <div className="row creative-outcome-rows">
              <div className="col-7 mb-md-3 mb-sm-0 d-block d-lg-none">
                <div className=" text-center aos-item" data-aos="fade-down">
                  <div className="img-cont">
                    <img src={numberimg3} alt="" />
                    <img src={image3} alt="" />
                  </div>
                  <p>
                    List Your Property <br />
                    Move-in ready properties in our coverage area
                  </p>
                </div>
              </div>
              <div className="col-5 mb-md-3 mb-sm-0 d-block d-lg-none">
                <div
                  className=" text-center aos-item"
                  data-aos="fade-down"
                ></div>
              </div>
            </div>



            <div className="row creative-outcome-rows">
              <div className="col-5 mb-md-3 mb-sm-0 d-block d-lg-none">
                <div className=" text-center aos-item" data-aos="fade-down">
                 
                </div>
              </div>
              <div className="col-7 mb-md-3 mb-sm-0 d-block d-lg-none">
                <div
                  className=" text-center aos-item"
                  data-aos="fade-down"
                > <div className="img-cont">
                    <img src={numberimg4} alt="" />
                    <img src={image4} alt="" />
                  </div>
                  <p>
                    List Your Property <br />
                    Move-in ready properties in our coverage area
                  </p></div>
              </div>
            </div>


            <div className="row creative-outcome-rows">
              <div className="col-7 mb-md-3 mb-sm-0 d-block d-lg-none">
                <div className=" text-center aos-item" data-aos="fade-down">
                  <div className="img-cont">
                    <img src={numberimg5} alt="" />
                    <img src={image5} alt="" />
                  </div>
                  <p>
                    List Your Property <br />
                    Move-in ready properties in our coverage area
                  </p>
                </div>
              </div>
              <div className="col-5 mb-md-3 mb-sm-0 d-block d-lg-none">
                <div
                  className=" text-center aos-item"
                  data-aos="fade-down"
                ></div>
              </div>
            </div>
</div>

          


          {/* </div> */}
        </div>
      </section>

    </>
  );
};
export default CreativeOutcomes;
