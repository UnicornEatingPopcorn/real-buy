import React from "react";
import { CarouselProvider, Dot, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";
import FourthSlide from "./FourthSlide";

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
            <SecondSlide />
          </Slide>
          <Slide index={2}>
            <ThirdSlide />
          </Slide>
          <Slide index={3}>
            <FourthSlide />
          </Slide>
        </Slider>
      </div>
    </CarouselProvider>
  );
};

export default InvestmentStatus;
