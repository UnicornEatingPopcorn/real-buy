import React from "react";
import "./Structure.sass";
import structure from "./../../../../assets/icons/structure.png";

const Structure = () => {
  return (
    <div className="structure__container">
      <img src={structure} className="structure__image" />
    </div>
  );
};

export default Structure;
