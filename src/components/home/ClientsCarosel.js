import React from "react";
import { Image } from "react-bootstrap";
import Slider from "react-slick";
import { clientsData } from "../shared/data";

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

export default function ClientsCarosel() {
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
    <div className="position-relative client-carousel">
      <Slider {...settings}>
        {clientsData.map((dat, index) => (
          <div key={index}>
            <div className="clients-div p-3">
              <div className="d-flex clients-card">
                <div
                  className="d-flex align-items-center justify-content-center p-4 pt-5 p-md-5"
                  style={{ flex: 1 }}
                >
                  <div className="review">
                    <Image
                      src="/images/rating.png"
                      alt="rating"
                      className="mb-3"
                    />
                    <p className="text-left  mt-0" style={{ color: "#103F04" }}>
                      {dat.description}
                    </p>
                    <h5>
                      {dat.name}, <span>{dat.designation}</span>
                    </h5>
                  </div>
                </div>
                <Image src={dat.image} alt="client" className="client-img" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="quote">
        <div>
          <Image src="/images/quote.png" alt="quote" />
        </div>
      </div>
    </div>
  );
}
