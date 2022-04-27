import React from "react";
import Allprojects from "../reports/Allprojects";
import Noreports from "../reports/Noreports";
import Projectswithchart from "../reports/Projectswithchart";
import ReportsHeader from "../reports/ReportsHeader";

function Reports() {
  return (
    <div>
      <ReportsHeader />
      {/* <Noreports/> */}
      {/* <Allprojects/> */}
      <Projectswithchart />
    </div>
  );
}

export default Reports;
