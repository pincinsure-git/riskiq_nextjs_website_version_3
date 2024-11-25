import React from "react";
import { Image } from "react-bootstrap";

function CardCircle() {
  return (
    <>
      <Image
        src="/images/circle.svg"
        alt="circle"
        className="circle-position"
      />
      <Image
        src="/images/circle-xs.svg"
        alt="circle-xs"
        className="circleXS-position"
      />
    </>
  );
}

export default CardCircle;
