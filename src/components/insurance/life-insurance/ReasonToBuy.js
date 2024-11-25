import React from "react";
import { LGIData } from "@/components/shared/data";
import ReasonToBuySection from "@/components/shared/insurance/ReasonToBuy";

function ReasonToBuy() {
  return (
    <>
      <ReasonToBuySection
        title="Reasons to buy life insurance"
        data={LGIData}
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
