

import ImageTextCards from "./ImageTextCards";
import logo from "../assets/img/Frame 8.png";
import icon1 from "../assets/img/Icon.png";
import icon5 from "../assets/img/Icon-1.png";
import icon6 from "../assets/img/Icon-2.png";
import icon3 from "../assets/img/Icon-3.png";
import icon4 from "../assets/img/Icon-4.png";
import icon2 from "../assets/img/Icon-5.png";

const PropertyOwners = () => {
  const cards = [
    {
      icon: icon1,
      title: "Higher Guaranteed Returns",
      description:
        "Earn 6.5–10% annual returns vs <br />2–3% traditional rental, with payment guarantee",
    },
    {
      icon: icon2,
      title: "Reinvestment Opportunities",
      description:
        "Scale your portfolio using our platform for consistent high returns",
    },
    {
      icon: icon3,
      title: "Guaranteed Exit Strategy",
      description:
        "Pre-determined sale price removes market uncertainty and agent fees",
    },
    {
      icon: icon4,
      title: "Zero Landlord Hassles",
      description:
        "We handle tenant screening, rent collection, maintenance coordination, and all paperwork",
    },
    {
      icon: icon5,
      title: "Long-term Committed Tenants",
      description:
        "Families with homeownership goals take better care of properties and stay longer",
    },
    {
      icon: icon6,
      title: "Social Impact",
      description:
        "Help deserving Indian families achieve their homeownership dreams",
    },
  ];

  return (
    <section className="prehome-benefit-sec text-center py-5">
      <div className="container">
        <h2 className="sec-title-h2 mb-5">
          Why Property Owners Choose Prehome
        </h2>

        <div className="d-flex justify-content-center mb-4">
          <ImageTextCards {...cards[3]} />
        </div>

        <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
          <div className="d-flex flex-column gap-4">
            <ImageTextCards {...cards[0]} />
            <ImageTextCards {...cards[1]} />
          </div>

          <div style={{ width: "160px", height: "160px", margin: "20px" }}>
            <img
              src={logo}
              alt="Prehome Logo"
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div className="d-flex flex-column gap-4">
            <ImageTextCards {...cards[4]} />
            <ImageTextCards {...cards[5]} />
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <ImageTextCards {...cards[2]} />
        </div>
      </div>
    </section>
  );
};

export default PropertyOwners;
