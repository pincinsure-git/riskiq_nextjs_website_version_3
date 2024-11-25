import { typesData } from "@/components/shared/data";
import InsuranceTypes from "@/components/shared/insurance/InsuranceTypes";
import React from "react";

function Types() {
  return (
    <>
      <InsuranceTypes title="Type of general insurance" data={typesData} />
    </>
  );
}

export default Types;
