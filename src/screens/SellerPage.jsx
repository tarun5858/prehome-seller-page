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
    </>
  );
};
export default SellerPage;
