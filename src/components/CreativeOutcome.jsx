import OutcomesImg from "../assets/img/Frame 1000004596 (1).png"


const CreativeOutcomes = () =>{
    return(
       <section className="prehome-benefit-sec ">
        <div className="container container-lg">
          <div className=" align-items-center">
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
          </div>
        </div>
      </section>
    )
}
export default CreativeOutcomes;
