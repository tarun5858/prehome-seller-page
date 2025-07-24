// import aerocirlce from "../assets/img/arrow_circle_down.png"
import OutlineCta from "../components/OutlineCta";
import downarrow from "../assets/img/Vector 455.png";
import homeimage from "../assets/img/2150528567 1.png";
import billgates from "../assets/img/unsplash_6anudmpILw4.png";
import RealResultCta from "./RealResultCta";
const RealResults = () => {
  return (
    <section className=" section-padding-home text-md-start">
      <div className="">
        <div className="container container-lg">
          <div className="row home-text-img-container">
            <div className=" text-center aos-item" data-aos="fade-down">
              <h2 className="sec-title-h2">
                Real Results from Real Property Owners{" "}
              </h2>
            </div>
            <div  className="col-12 col-sm-12 col-md-6 col-lg-6 position-relative"
              style={{ minHeight: "600px" }}
            >
              <img
                src={homeimage} 
                alt="Empty Room"
                style={{
                  width: "280px",
                  borderRadius: "20px",
                  filter: "grayscale(100%)",
                
                  zIndex: 2,
                }}
              />

              <img
                src={downarrow}
                alt="Arrow"
                style={{
                  position: "absolute",
                  top: "50px",
                  left: "46%",
                  width: "100px",
                  zIndex: 3,
                }}
              />

              <img
                src={homeimage} 
                alt="Furnished Room"
                style={{
                  width: "300px",
                  borderRadius: "20px",
                  position: "absolute",
                  top: "145px",
                  left: "30%",
                  zIndex: 3,
                }}
              />

              <img
                src={billgates}
                alt="Owner"
                style={{
                  width: "200px",
                  borderRadius: "20px",
                  position: "absolute",
                  top: "50%",
                  left: "10%",
                  zIndex: 0,
                }}
              />
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex  flex-column">
              <h1 className="real-result-head mt-5">Meet Arun</h1>
              <div className="row">
                <div className="col-lg-12">
                  <RealResultCta text="Final sale: ₹2.6Cr (above market)"></RealResultCta>
                  <RealResultCta text="Total 2-year earnings: ₹10.8L vs ₹7.2L"></RealResultCta>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12">
                  <RealResultCta text="Zero vacancy days"></RealResultCta>
                  <RealResultCta text="Monthly income: ₹30K → ₹45K (+50%)"></RealResultCta>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-12 real-result-p mt-5 ">
                  <p>
                    {" "}
                    Meet Arun from Sector 49, Gurgaon. His 3BHK was earning ₹30K
                    in traditional rent. With Prehome, he earned ₹45K monthly
                    for 24 months, then sold for ₹2.6 Crores - 8% above market
                    rate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RealResults;
