import About from "@/components/insurance/health-insurance/About";
import BannerSection from "@/components/insurance/health-insurance/BannerSection";
import ReasonToBuy from "@/components/insurance/health-insurance/ReasonToBuy";
import Types from "@/components/insurance/health-insurance/Types";
import WhyChoose from "@/components/insurance/health-insurance/WhyChoose";
import React from "react";

function healthinsurance() {
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

export default healthinsurance;
