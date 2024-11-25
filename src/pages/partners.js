import React from "react";
import BannerSection from "@/components/partners/BannerSection";
import InsuranceServices from "@/components/partners/InsuranceServices";
import OurPartners from "@/components/partners/OurPartners";
import GetInTouch from "@/components/partners/GetInTouch";
import JoinUs from "@/components/career/JoinUs";

function partners() {
  return (
    <>
      <BannerSection />
      <OurPartners />
      <InsuranceServices />
      <GetInTouch />
    </>
  );
}

export default partners;
