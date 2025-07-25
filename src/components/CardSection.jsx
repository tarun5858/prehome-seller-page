import SellerpageCards from "../components/CalculatorCard";
import CustomOutlineCta from "./OutlineCta";
import aerocirlce from "../assets/img/arrow_circle_down.png"

const CardSection = () =>{
    return(
        <section className="prehome-benefit-sec">
        <div className="container container-lg">
          <div className=" align-items-center">
            <div className="row">
              <div className="col-12 mb-md-3 mb-sm-0  ">
                <div className=" text-center aos-item" data-aos="fade-down">
                  <h2 className="sec-title-h2">
                  If These Sound Familiar, Prehome Can Help </h2>
                  <div className="row d-flex justify-content-between">
                    <SellerpageCards></SellerpageCards>
                    <SellerpageCards></SellerpageCards>
                    <SellerpageCards></SellerpageCards>
                  </div>

                  <CustomOutlineCta src={aerocirlce} text="See How It Works" className="landingpage-cta mt-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default CardSection;
