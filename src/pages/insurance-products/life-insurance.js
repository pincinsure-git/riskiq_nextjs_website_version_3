import About from "@/components/insurance/life-insurance/About";
import BannerSection from "@/components/insurance/life-insurance/BannerSection";
import ReasonToBuy from "@/components/insurance/life-insurance/ReasonToBuy";
import Types from "@/components/insurance/life-insurance/Types";
import WhyChoose from "@/components/insurance/life-insurance/WhyChoose";
import React from "react";

function lifeinsurance() {
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

export default lifeinsurance;
