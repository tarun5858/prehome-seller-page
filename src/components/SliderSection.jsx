import SellerSlider from "../components/Slider";


const SliderSection = () =>{
    return(
         <section className="prehome-benefit-sec">
        <div className="container container-lg">
          <div className=" align-items-center">
            <div className="row">
              <div className="col-12 mb-md-3 mb-sm-0  ">
                <div className=" text-center aos-item" data-aos="fade-down">
                  <h2 className="sec-title-h2">
                    Calculate Your Potential Returns
                  </h2>
                  <div className="row d-flex justify-content-center">
                     
                   <SellerSlider title="Estimated Value of  Your Property"></SellerSlider>
                  </div>
                  <div className="row d-flex justify-content-center mt-5">
                     
                   <SellerSlider title="Current Monthly Rent"></SellerSlider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default SliderSection;
