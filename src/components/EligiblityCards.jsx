

const EligiblityCards = ({ icon, description }) => {
  return (
    <div className=" text-center eligiblity-cards" >
      <img src={icon} className=" eligiblity-cards-img"/>
      {/* <p><b dangerouslySetInnerHTML={{ __html: title }} /></p> */}
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};
export default EligiblityCards;
