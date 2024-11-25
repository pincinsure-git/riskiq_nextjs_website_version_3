import React from "react";
import { Image } from "react-bootstrap";
import Slider from "react-slick";
import { policiesData } from "@/components/shared/data";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <Image src="/images/icon/next.png" alt="Next" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <Image src="/images/icon/prev.png" alt="Previous" />
    </div>
  );
}

export default function CarouselSection() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="position-relative client-carousel mt-0 policies">
      <Slider {...settings}>
        {policiesData.map((dat, index) => (
          <div key={index}>
            <div className="clients-div p-3">
              <div className="d-flex clients-card">
                <div
                  className="d-flex align-items-center justify-content-center p-4 pt-5 p-md-5"
                  style={{ flex: 1 }}
                >
                  <div>
                    <h5>{dat.name}:</h5>
                    <p className="mt-0">{dat.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
