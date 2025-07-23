import OutcomesImg from "../assets/img/Frame 1000004596 (1).png"
import ImageTextCards from "./ImageTextCards";

const PropertyOwners = () =>{
    return(
       <section className="prehome-benefit-sec ">
        <div className="container container-lg">
          <div className=" align-items-center">
     
                  <div className=" text-center aos-item" data-aos="fade-down">
                  <h2 className="sec-title-h2">
                    Why Property Owners Choose Prehome
                  </h2>
                  </div>
            <div className="row">
              <ImageTextCards ></ImageTextCards>
              <ImageTextCards ></ImageTextCards>
              <ImageTextCards ></ImageTextCards>
            </div>
          </div>
        </div>
      </section>
    )
}
export default PropertyOwners;
