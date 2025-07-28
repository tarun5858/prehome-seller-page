import { useState } from "react";
import { Link } from "react-router-dom";

const FaqDropdown = () => {
  const faqs = [
    {
      question:
        "What is the security deposit required to rent an apartment with PreHome?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum fugit officiis a molestias libero dignissimos consectetur quod odit. Tempore!",
    },
    {
      question:
        "What is the security deposit required to rent an apartment with PreHome?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum fugit officiis a molestias libero dignissimos consectetur quod odit. Tempore!",
    },
    {
      question:
        "What is the security deposit required to rent an apartment with PreHome?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum fugit officiis a molestias libero dignissimos consectetur quod odit. Tempore!",
    },
    {
      question:
        "What is the security deposit required to rent an apartment with PreHome?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum fugit officiis a molestias libero dignissimos consectetur quod odit. Tempore!",
    },
    {
      question:
        "What is the security deposit required to rent an apartment with PreHome?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum fugit officiis a molestias libero dignissimos consectetur quod odit. Tempore!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleCollapse = (id) => {
    setActiveIndex((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="container mt-5 mb-5">
      
      <div className="faq-text">

       <h2 className="faq-h2">
                 FAQs</h2>
                 <p className="faq-p" >Have questions about Prehome and its services? Find answers to common queries below.</p>
      </div>
      {faqs?.map((faq, index) => (
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 " key={index}>
          <div className="faq-accordion">
            <div className="accordion">
              <div className="accordion-item">
                <h6 className=" accordion-header">
                  <Link
                    className="accordion-button collapsed"
                    aria-expanded={activeIndex === index}
                    to={`#faq${index}`}
                    onClick={() => toggleCollapse(index)}
                  >
                    {faq.question}
                  </Link>
                 
                </h6>

                <div
                  id={`faq${index}`}
                  className={`accordion-collapse  ${
                    activeIndex === index ? "show" : "collapse"
                  }`}
                >
                  <div className="faq-detail accordion-body">
                    {typeof faq.answer === "string" ? (
                      // <p>{faq.answer}</p>
                      <p className="faq-p" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    ) : (
                      faq.answer
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FaqDropdown;
