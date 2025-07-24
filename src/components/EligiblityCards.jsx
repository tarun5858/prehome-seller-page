

const EligiblityCards = ({ icon, description }) => {
  return (
    <div className="text-center" style={{ width: "400px",height:"302px", margin: "10px",border:"1px solid #7EB5B0",borderRadius:"12px",display:"flex",flexDirection:"column",justifyContent:'space-evenly',alignItems:"center" }}>
      <img src={icon} style={{ height: "100px",width:"100px", marginBottom: "7%" }} />
      {/* <p><b dangerouslySetInnerHTML={{ __html: title }} /></p> */}
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default EligiblityCards;
