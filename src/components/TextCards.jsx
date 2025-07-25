import aerocirlce from "../assets/img/arrow_circle_down.png"

import CustomOutlineCta from "./OutlineCta";


const TextCards = () =>{
    return(
       <section className=" section-padding-home text-md-start">
        <div className="">
          <div className="container container-lg">
            <div className="row home-text-img-container">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-column align-items-between justify-content-between">
                <h1 className="seller-head">
                  Join A Growing Network <br />
                  of Owners Earning More, Worrying Less
                </h1>
                <div className="mt-5">
                  {/* <OutlineCta  text="See How It Works" ></OutlineCta> */}
                  <CustomOutlineCta src={aerocirlce} text="See How It Works" className="landingpage-cta d-flex justify-content-evenly" />

                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex  flex-column justify-content-between">
                <div className="row">
                  <div className="col-lg-6">
                    <h1 className="seller-green-head">98%</h1>
                    <p className="seller-p">
                      Completion Rate, <br />
                      <b>Buyers complete purchase</b>
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <h1 className="seller-green-head">24 Days</h1>
                    <p className="seller-p">
                      Average,
                      <b>
                        Tenant- <br /> buyer matching <br /> time
                      </b>{" "}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <h1 className="seller-green-head">Zero</h1>
                    <p className="seller-p">
                   <b> Legal Issues</b> , Clean documentation <br />record
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <h1 className="seller-green-head">6.8%</h1>
                    <p className="seller-p">
                    Average Yield vs <br /><b>3.4% traditional <br /> renting</b> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default TextCards;
