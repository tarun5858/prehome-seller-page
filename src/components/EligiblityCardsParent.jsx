import EligiblityCards from "./EligiblityCards";
import calenderIcon from "../assets/img/calendar_clock.png"
import currencyIcon from "../assets/img/currency_rupee_circle.png"
import scene from "../assets/img/scene.png"

const EligiblityCardsParent = () =>{
    return(
        <section className="prehome-benefit-sec">
        <div className="container container-lg">
          <div className=" align-items-center">
            <div className="row">
              <div className="col-12 mb-md-3 mb-sm-0  ">
                <div className=" text-center aos-item" data-aos="fade-down">
                  <h2 className="sec-title-h2 mt-5">
                  Property Eligibility & Terms </h2>
                  <div className="row d-flex  align-items-center justify-content-center">
                    <EligiblityCards icon={scene} description="We accept properties that are <b>move-in ready</b> condition in Gurugram"></EligiblityCards>
                    <EligiblityCards icon={calenderIcon} description="<b>Minimum 2-year</b> rental period"></EligiblityCards>
                    <EligiblityCards icon={currencyIcon} description="We accept properties that are Valued <b>between ₹40 lakhs to ₹2 crores</b>"></EligiblityCards>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default EligiblityCardsParent;
