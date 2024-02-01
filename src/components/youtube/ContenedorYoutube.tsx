import React from "react";

import Slider from "react-slick";
import useYoutube from "../../hooks/useYoutube";
import CountainYoutube from "./CountainYoutube";
import { ContentYoutube } from "./ContenedorYoutubeStream";

import "./Swiper.css";
import { SampleNextArrow, SamplePrevArrow } from "./arrows/Arrows";

const ContenedorYoutube: React.FC<{}> = () => {
  const { videosDeCoscu } = useYoutube("Coscu");

  const videos2 = videosDeCoscu;
  console.log(videosDeCoscu);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <ContentYoutube>
      <Slider className="mySwiper" {...settings}>
        {videos2.map((item) => (
          <CountainYoutube key={item.id} {...item} />
        ))}
      </Slider>
    </ContentYoutube>
  );
};

export default ContenedorYoutube;
