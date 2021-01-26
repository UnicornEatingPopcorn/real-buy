import React from "react";
import "./AssetOverview.sass";
import assetOverview from "./../../../../assets/icons/asset-overview.png";
import { CarouselProvider, Dot, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const AssetOverview = () => {
  return (
    <div className="asset-overview__container">
      <div className="row">
        <p className="asset-overview__container-title">자산 개요</p>
      </div>
      <div className="row no-gutters">
        <div className="col-12 col-sm-9 col-md-6">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={150}
            totalSlides={4}
          >
            <div>
              <Slider className="asset-overview__slider">
                <Slide className="asset-overview__slide" index={0}>
                  <img
                    src={assetOverview}
                    alt="asset overview"
                    className="asset-overview__picture"
                  />
                </Slide>
                <Slide className="asset-overview__slide" index={1}>
                  <img
                    src={assetOverview}
                    alt="asset overview"
                    className="asset-overview__picture"
                  />
                </Slide>
                <Slide className="asset-overview__slide" index={2}>
                  <img
                    src={assetOverview}
                    alt="asset overview"
                    className="asset-overview__picture"
                  />
                </Slide>
                <Slide className="asset-overview__slide" index={3}>
                  <img
                    src={assetOverview}
                    alt="asset overview"
                    className="asset-overview__picture"
                  />
                </Slide>
              </Slider>
              <div className="asset-overview__dots">
                <Dot slide={0}></Dot>
                <Dot slide={1}></Dot>
                <Dot slide={2}></Dot>
                <Dot slide={3}></Dot>
              </div>
            </div>
          </CarouselProvider>
        </div>

        <div className="col-12 col-md-5 col-lg-6 asset-overview__info">
          <p className="asset-overview__title">Amazon Logistics Center</p>
          <span className="asset-overview__subtitles">
            <p className="asset-overview__name asset-overview__name-first">
              위치
            </p>
            <p className="asset-overview__definition asset-overview-margin-30">
              Monchered -Rhinahlem 소재 독일 북서부 Noth Rhine-djsdsd 주
              dksjd-dxc 지역
            </p>
          </span>
          <span className="asset-overview__subtitles">
            <p className="asset-overview__name">준공</p>
            <p className="asset-overview__definition asset-overview-margin-35">
              2019년 7월 31일
            </p>
          </span>
          <span className="asset-overview__subtitles">
            <p className="asset-overview__name">임대면적</p>
            <p className="asset-overview__definition-last">
              153.048㎡ (46,307,91평)
            </p>
          </span>
          <span className="asset-overview__subtitles">
            <p className="asset-overview__name">소유권</p>
            <p className="asset-overview__definition asset-overview-margin-25">
              Freehold
            </p>
          </span>
          <span className="asset-overview__subtitles">
            <p className="asset-overview__name">층수</p>
            <p className="asset-overview__definition asset-overview-margin-35">
              3F
            </p>
          </span>
          <span className="asset-overview__subtitles">
            <p className="asset-overview__name">용도</p>
            <p className="asset-overview__definition asset-overview-margin-35">
              Logistics & Office
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AssetOverview;
