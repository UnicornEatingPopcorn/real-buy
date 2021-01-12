import React from "react";
import { CarouselProvider, Dot, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import FirstSlide from "./FirstSlide/FirstSlide";
import SlidePart from "./SlidePart/SlidePart";
import "./InvestmentStatus.sass";

const InvestmentStatus = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={150}
      totalSlides={4}
    >
      <div className="status-container">
        <div className="status__header">
          <span>등급별 투자 현황</span>
          <div className="status__dots">
            <Dot slide={0}></Dot>
            <Dot slide={1}></Dot>
            <Dot slide={2}></Dot>
            <Dot slide={3}></Dot>
          </div>
        </div>
        <Slider>
          <Slide index={0}>
            <FirstSlide />
          </Slide>
          <Slide index={1}>
            <SlidePart index="1" />
          </Slide>
          <Slide index={2}>
            <SlidePart index="2" />
          </Slide>
          <Slide index={3}>
            <SlidePart index="4" />
          </Slide>
        </Slider>
      </div>
    </CarouselProvider>
  );
};

export default InvestmentStatus;
