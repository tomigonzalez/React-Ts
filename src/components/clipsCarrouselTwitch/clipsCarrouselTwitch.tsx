import React from "react";

import { SampleNextArrow, SamplePrevArrow } from "../youtube/arrows/Arrows";
import useTwitch from "../../hooks/useTwitch";
import { ContentYoutube } from "../youtube/ContenedorYoutubeStream";
import Slider from "react-slick";
import ClipContenedor from "./ClipContenedor";

const ClipsCarrouselTwitch: React.FC<{}> = () => {
  const { clipsDeCoscu } = useTwitch("Coscu");
  const videos3 = clipsDeCoscu;
  const arrayDeClips = Object.values(videos3);

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
        {arrayDeClips.map((item) => (
          <ClipContenedor key={item.id} {...item} />
        ))}
      </Slider>
    </ContentYoutube>
  );
};

export default ClipsCarrouselTwitch;
