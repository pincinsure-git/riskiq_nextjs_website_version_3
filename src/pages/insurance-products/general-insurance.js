import About from "@/components/insurance/general-insurance/About";
import BannerSection from "@/components/insurance/general-insurance/BannerSection";
import ReasonToBuy from "@/components/insurance/general-insurance/ReasonToBuy";
import Types from "@/components/insurance/general-insurance/Types";
import WhyChoose from "@/components/insurance/general-insurance/WhyChoose";
import React from "react";

function generalinsurance() {
  return (
    <>
      <BannerSection />
      <About />
      <Types />
      <ReasonToBuy />
      <WhyChoose />
    </>
  );
}

export default generalinsurance;
