import CalculationDisplayCta from "./CalculationDisplayCta";
import logo from "../assets/img/Frame 8.png";
import LargeCustomCta from "./LargeCustomCta";
const CalculationDisplayCard = () => {
  return (
    <>
    <div className="container d-flex justify-content-center align-items-center flex-column">
    <div className="text-center" style={{ width: "904px",height:"460px", margin: "10px",border:"1px solid #7EB5B0",borderRadius:"12px",display:"flex",flexDirection:"column",justifyContent:'flex-start',alignItems:"center" }}>
<div className="row">
     <button style={{width:"236px",height:"87px",color:"#000",background:"#fff",margin:"5px"}}></button>
     <button style={{width:"300px",height:"87px",color:"#000",background:"#fff",margin:"5px",fontSize:"24px",fontWeight:"bold"}}> <b>Traditional Rental</b> </button>
     <button style={{width:"300px",height:"87px",color:"#000",background:"#fff",margin:"5px"}}>
        <img src={logo} alt=""  style={{width:"105px",height:"90px"}} /> </button>

</div>
    <CalculationDisplayCta type="Monthly Rent" amount="₹25,000" info="₹60,000 (guaranteed)"></CalculationDisplayCta>
    <CalculationDisplayCta type="Annual Return" amount="2.0%" info="6.5%"></CalculationDisplayCta>
    <CalculationDisplayCta type="Vacancy Risk" amount="High" info="Zero"></CalculationDisplayCta>
    <CalculationDisplayCta type="Maintenance" amount="Your responsibility" info="Managed by us"></CalculationDisplayCta>
    </div>


                <LargeCustomCta text="Get My Property Assesed" className="Landing-page-cta mt-5"></LargeCustomCta>
    </div>
                </>
  );
};

export default CalculationDisplayCard;
