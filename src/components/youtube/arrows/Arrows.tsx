import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Swiper.css";
export function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon
        className="arrrows"
        icon={faChevronRight}
        style={{ ...style }}
      />
    </div>
  );
}

export function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon
        className="arrrows"
        icon={faChevronLeft}
        style={{ ...style }}
      />
    </div>
  );
}
