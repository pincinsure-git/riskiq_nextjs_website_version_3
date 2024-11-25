import React from "react";
import BannerSection from "@/components/contact/BannerSection";
import WriteToUs from "@/components/contact/WriteToUs";
import Map from "@/components/contact/Map";

function contactus() {
  return (
    <>
      <BannerSection title="Contact Us" />
      <WriteToUs
        title="Get In Touch"
        para="Take The First Step & Get Insured Now"
        formTitle="Write to us "
      />
      <Map />
    </>
  );
}

export default contactus;
