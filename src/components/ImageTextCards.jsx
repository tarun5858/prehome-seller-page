

const ImageTextCards = ({ icon, title, description }) => {
  return (
    <div className="text-center" style={{ width: "310px", margin: "10px" }}>
      <img src={icon} alt={title} style={{ height: "82px",width:"82px", marginBottom: "10px" }} />
      <p><b dangerouslySetInnerHTML={{ __html: title }} /></p>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default ImageTextCards;
