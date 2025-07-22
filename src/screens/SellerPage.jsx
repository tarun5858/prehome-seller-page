import OutlineCta from "../components/OutlineCta";
import GreenFilledCta from "../components/GreenFilledCta";
import bannerImg from "../assets/img/image 1.png"
import SellerpageCards from "../components/CalculatorCard";
import VideoPlayer from "../components/VideoPlayer";
const SellerPage = () =>{
    return(
        <>
  <section className=" section-padding-home text-md-start">
        <div className="">
          <div className="container container-lg">
            <div className="row home-text-img-container">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-column align-items-between">
                <div className="pe-lg-3 ">
                  <h6>&nbsp;</h6>
                  <h1 className="fs-lg-seller">India's First Guaranteed <br />Rent-to-Own Platform</h1>
                 </div>

                  <p className="sub-head-home">
                  <b> We match your property with qualified families</b>, guarantee your monthly rent, and handle everything in between.
                  </p>
                <div className="  d-flex ">
              <GreenFilledCta style={{fontSize:"20px",fontWeight:"bold"}} text="Get My Property Assesed" />
              <OutlineCta text="See How It Works" />
            </div>
           
                  {/* <LargeBlueCta text="Join our waitlist"></LargeBlueCta> */}
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
               <img src={bannerImg} alt="" width="100%" height="100%" /> 
              </div>
            </div>
          </div>
        </div>
      </section>      
      
       <section className="prehome-benefit-sec">
        <div className="container container-lg">
          <div className=" align-items-center">
            <div className="row">
              <div className="col-12 mb-md-3 mb-sm-0  ">
                <div className=" text-center aos-item" data-aos="fade-down">
                  <h2 className="sec-title-h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</h2>
                  <div className="row d-flex justify-content-between">
                    <SellerpageCards></SellerpageCards>
                    <SellerpageCards></SellerpageCards>
                    <SellerpageCards></SellerpageCards>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" section-padding text-md-start">
        <div className="container container-lg">
          <div
            className="section-title text-center aos-item"
            data-aos="flip-left"
          >
            {/* <h2 className="text-center">An alternate path to homeownership</h2> */}
          </div>
          <div className="row my-5">
            <div className="col-12 d-flex justify-content-center text-center">
              <VideoPlayer></VideoPlayer>
            </div>
          </div>
        </div>
              <div className="cta-parent">
                <GreenFilledCta text="Get My Property Assessment"></GreenFilledCta>
              </div>
      </section>
      
        </>
    )
}
export default SellerPage;