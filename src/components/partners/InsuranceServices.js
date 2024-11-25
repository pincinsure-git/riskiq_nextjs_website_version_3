import React from "react";
import { services } from "../shared/data";
import Services from "../shared/Services";

function InsuranceServices() {
  return (
    <Services
      title="Our Insurance Services"
      services={services}
      showSeparator={false}
    />
  );
}

export default InsuranceServices;
