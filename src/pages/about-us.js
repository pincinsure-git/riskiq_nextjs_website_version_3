import AboutUs from "@/components/about/AboutUs";
import BannerSection from "@/components/about/BannerSection";
import CounterSection from "@/components/about/CounterSection";
import LeadershipSection from "@/components/about/LeadershipSection";
import OurServices from "@/components/about/OurServices";
import VisionMission from "@/components/about/VisionMission";
import WhoWeAre from "@/components/about/WhoWeAre";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import React from "react";

function aboutus() {
  return (
    <>
      <BannerSection />
      <WhoWeAre />
      <AboutUs />
      <LeadershipSection />
      <WhyChooseUs />
      <CounterSection />
      <OurServices />
      <VisionMission />
    </>
  );
}

export default aboutus;
