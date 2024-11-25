import React from "react";
import { services } from "../shared/data";
import Services from "../shared/Services";

function OurServices() {

  return (
    <Services
      title="OUR SERVICES"
      services={services}
    />
  );
}

export default OurServices;
