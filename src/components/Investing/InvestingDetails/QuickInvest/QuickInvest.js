import React, { useState } from "react";
import "./QuickInvest.sass";
import heartGray from "./../../../../assets/icons/InvestingDetails/heart-gray.svg";
import bellGray from "./../../../../assets/icons/InvestingDetails/bell-gray.svg";

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
          <div className="quick__pic-progress-bar">
            <span className="progress-done__label">{percentage} 달성</span>
            <span className="progress-done__label-line"></span>
            <div className="progress-done" data-done="45"></div>
          </div>
        </div>
        <div className="col-12 col-md-4 quick__invest-info">
          <p className="quick__invest-info_title">독일 아마존 물류 센터</p>
          <span className="quick__invest-info_subtitles">
            <p className="quick__invest-info_name">모집 금액</p>
            <p className="quick__invest-info_definition">10 억원</p>
          </span>
          <span className="quick__invest-info_subtitles">
            <p className="quick__invest-info_name">투자 만기</p>
            <p className="quick__invest-info_definition">2024년 1월</p>
          </span>
          <span className="quick__invest-info_subtitles">
            <p className="quick__invest-info_name">공동 투자자</p>
            <p className="quick__invest-info_definition-last">
              주택도시기금, 경찰공제회
            </p>
          </span>
          <div className="row">
            <div className="col quick__invest-info_icon-right">
              <img src={heartGray} />
            </div>
            <div className="col  quick__invest-info_icon-left">
              <img src={bellGray} />
            </div>
          </div>
          <span className="quick__invest-info_button-block">
            <button className="quick__invest-info_button">
              빠르게 투자하기
            </button>
          </span>
        </div>
      </div>
      <div className="col-12 col-md-4 quick__invest-info-mobile">
        <p className="quick__invest-info_title">독일 아마존 물류 센터</p>
        <span className="quick__invest-info_subtitles">
          <p className="quick__invest-info_name">모집 금액</p>
          <p className="quick__invest-info_definition">10 억원</p>
        </span>
        <span className="quick__invest-info_subtitles">
          <p className="quick__invest-info_name">투자 만기</p>
          <p className="quick__invest-info_definition">2024년 1월</p>
        </span>
        <span className="quick__invest-info_subtitles">
          <p className="quick__invest-info_name">공동 투자자</p>
          <p className="quick__invest-info_definition-last">
            주택도시기금, 경찰공제회
          </p>
        </span>
        <div className="row">
          <div className="col quick__invest-info_icon-right">
            <img src={heartGray} />
          </div>
          <div className="col  quick__invest-info_icon-left">
            <img src={bellGray} />
          </div>
        </div>
        <span className="quick__invest-info_button-block">
          <button className="quick__invest-info_button">빠르게 투자하기</button>
        </span>
      </div>
    </div>
  );
};

export default QuickInvest;
