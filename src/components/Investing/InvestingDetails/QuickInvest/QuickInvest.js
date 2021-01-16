import React, { useState } from "react";
import "./QuickInvest.sass";

const QuickInvest = () => {
  const [percentage, setPercentage] = useState(0);

  const progress = document.querySelector(".progress-done");
  const progressLabel = document.querySelector(".progress-done__label");
  const progressLabelLine = document.querySelector(
    ".progress-done__label-line"
  );

  if (progress) {
    progress.style.width = progress.getAttribute("data-done") + "%";
    progress.style.opacity = 1;
    setTimeout(() => {
      setPercentage(progress.style.width);
      progressLabel.style.marginLeft = progress.style.width;
      progressLabelLine.style.marginLeft = progress.style.width;
    }, 500);
  }

  return (
    <div className="quick-block">
      <div className="row no-gutters">
        <div className="col-12 col-md-8 quick__pic-progress">
          <svg className="quick__pic-progress_label" />
          <svg className="quick__pic-progress-img" />
        </div>
        <div className="col-12 col-md-4 quick__invest-info"></div>
      </div>
      <div className="quick__pic-progress-bar">
        <span className="progress-done__label">{percentage} 달성</span>
        <span className="progress-done__label-line"></span>
        <div className="progress-done" data-done="62"></div>
      </div>
    </div>
  );
};

export default QuickInvest;
