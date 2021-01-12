import React from "react";
import "./ReturnCount.sass";

const ReturnCount = ({ returnAmount }) => {
  return (
    <div className="return-count-container">
      {returnAmount.map((amount, index) => {
        return (
          <div className="return-block" key={index}>
            <div className="return-block">
              <p className="return-block__title">{amount.title}</p>
              {amount.subtitle && (
                <p className="return-block__subtitle">{amount.subtitle}</p>
              )}
            </div>
            <p className="return-block__amount">{amount.amount}</p>
            {index !== 2 && <span className="return-block-divider"></span>}
          </div>
        );
      })}
    </div>
  );
};

export default ReturnCount;
