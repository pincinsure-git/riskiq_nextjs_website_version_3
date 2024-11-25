import React from "react";
import { typesLifeData } from "@/components/shared/data";
import InsuranceTypes from "@/components/shared/insurance/InsuranceTypes";

function Types() {
  return (
    <>
      <InsuranceTypes title="Type of life insurance" data={typesLifeData} />
    </>
  );
}

export default Types;
