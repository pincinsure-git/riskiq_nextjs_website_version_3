import { typesHealthData } from "@/components/shared/data";
import InsuranceTypes from "@/components/shared/insurance/InsuranceTypes";
import React from "react";

function Types() {
  return (
    <>
      <InsuranceTypes title="Type of health insurance" data={typesHealthData} />
    </>
  );
}

export default Types;
