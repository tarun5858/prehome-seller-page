import SellerpageCards from "../components/CalculatorCard";


const CardSection = () =>{
    return(
        <section className="prehome-benefit-sec">
        <div className="container container-lg">
          <div className=" align-items-center">
            <div className="row">
              <div className="col-12 mb-md-3 mb-sm-0  ">
                <div className=" text-center aos-item" data-aos="fade-down">
                  <h2 className="sec-title-h2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </h2>
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
    )
}
export default CardSection;
