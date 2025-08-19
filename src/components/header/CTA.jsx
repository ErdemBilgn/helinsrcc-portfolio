import React from "react";
import CV from "/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        CV'mi İndirin
      </a>
      <a href="#contact" className="btn btn-primary">
        Bana Ulaşın
      </a>
    </div>
  );
};

export default CTA;
