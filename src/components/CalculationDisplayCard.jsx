import CalculationDisplayCta from "./CalculationDisplayCta";
import logo from "../assets/img/Frame 8.png";

const CalculationDisplayCard = () => {
  return (
    <div className="container d-flex justify-content-center">
    <div className="text-center" style={{ width: "904px",height:"439px", margin: "10px",border:"1px solid #7EB5B0",borderRadius:"12px",display:"flex",flexDirection:"column",justifyContent:'flex-start',alignItems:"center" }}>
<div className="row">
     <button style={{width:"236px",height:"87px",color:"#000",border:"3px solid #E6FBF8",background:"#fff",margin:"5px"}}>Monthly Rent</button>
     <button style={{width:"300px",height:"87px",color:"#000",border:"3px solid #E6FBF8",background:"#fff",margin:"5px"}}> <b>Traditional Rental</b> </button>
     <button style={{width:"300px",height:"87px",color:"#000",border:"3px solid #E6FBF8",background:"#fff",margin:"5px"}}>
        <img src={logo} alt=""  style={{width:"104px",height:"77px"}} /> </button>

</div>
    <CalculationDisplayCta></CalculationDisplayCta>
    <CalculationDisplayCta></CalculationDisplayCta>
    <CalculationDisplayCta></CalculationDisplayCta>
    <CalculationDisplayCta></CalculationDisplayCta>
    </div>
    </div>
  );
};

export default CalculationDisplayCard;
