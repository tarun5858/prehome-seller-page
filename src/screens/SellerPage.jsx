import LandingPage from "../components/LandingPage";
import CardSection from "../components/CardSection";
import VideoSection from "../components/VideoSection";
import TextCards from "../components/TextCards";
import SliderSection from "../components/SliderSection";
import CreativeOutcomes from "../components/CreativeOutcome";
import PropertyOwners from "../components/PropertyOwners";
import EligiblityCardsParent from "../components/EligiblityCardsParent";
import RealResults from "../components/RealResults";
import CalculationDisplayCard from "../components/CalculationDisplayCard";
import FaqDropdown from "../components/FaqDropdown";
import PreFooter from "../components/PreFooter";
import Footer from "../components/Footer";
const SellerPage = () => {
  return (
    <>
      <LandingPage></LandingPage>

      <CardSection></CardSection>

      <VideoSection></VideoSection>

      <TextCards></TextCards>

      <SliderSection></SliderSection>

      <CalculationDisplayCard></CalculationDisplayCard>

      <CreativeOutcomes></CreativeOutcomes>

      <PropertyOwners></PropertyOwners>

      <EligiblityCardsParent></EligiblityCardsParent>
      
      <RealResults></RealResults>

      <FaqDropdown></FaqDropdown>

      <PreFooter></PreFooter>
      
      <Footer></Footer>
    </>
  );
};
export default SellerPage;
