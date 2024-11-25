import React from "react";
import { RGIData } from "@/components/shared/data";
import ReasonToBuySection from "@/components/shared/insurance/ReasonToBuy";

function ReasonToBuy() {
  return (
    <>
      <ReasonToBuySection
        title="Reasons to buy general insurance"
        data={RGIData}
        backgroundStyle={{ background: "#103F04" }}
        containerStyle={{ marginTop: "70px" }}
        imageSrc="/images/boxes.png"
        imageAlt="boxes"
        listClassName=""
      />
    </>
  );
}

export default ReasonToBuy;
