import VideoPlayer from "../components/VideoPlayer";
import LargeCustomCta from "./LargeCustomCta";
const VideoSection = () =>{
    return(
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
            <LargeCustomCta text="Get My Property Assesed" className="Landing-page-cta"></LargeCustomCta>
        </div>
      </section>
    )
}
export default VideoSection;
