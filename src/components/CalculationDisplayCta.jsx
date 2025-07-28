

const CalculationDisplayCta = ({type,amount,info}) => {
  return (

        <div className="row mt-3">
          {/* <div className="row"></div> */}
     <button style={{width:"236px",height:"66px",color:"#000",background:"#fff",margin:"1px 5px"}}>{type}</button>
     <button style={{width:"300px",height:"66px",color:"#000",border:"1px solid #E6FBF8",backgroundColor:"#E6FBF8",fontWeight:'bold',margin:"1px 5px"}}>{amount}</button>
     <button style={{width:"300px",height:"66px",color:"#fff",border:"1px solid #E6FBF8",backgroundColor:"#0D8D7D",fontWeight:'bold',margin:"1px 5px",borderRadius:"12px"}}>{info}</button>
        </div>
  );
};

export default CalculationDisplayCta;
