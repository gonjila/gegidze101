import React, { useContext } from "react";
import { reportsContext } from "../../context/reportsCtx";
import NoReports from "../reports/NoReports";
import Allprojects from "../reports/Allprojects";
import Projectswithchart from "../reports/Projectswithchart";
import ReportsHeader from "../reports/ReportsHeader";
import SingleProjectAndGateway from "../reports/SingleProjectAndGateway";

function Reports() {
  const { reports, headerData } = useContext(reportsContext);

  if (reports.length < 1) {
    return (
      <div>
        {/* საწყისი გვერდი */}
        <ReportsHeader />
        <NoReports />
      </div>
    );
  } else if (headerData.projectId === "" && headerData.gatewayId === "") {
    return (
      <div>
        {/* ყველა project / ყველა gateway */}
        <ReportsHeader />
        <Allprojects />
      </div>
    );
  } else if (headerData.projectId === "" && headerData.gatewayId) {
    return (
      <div>
        {/* ყველა პროექტი / კონკრეტული gateway */}
        <ReportsHeader />
        <Projectswithchart />
      </div>
    );
  } else if (headerData.projectId && headerData.gatewayId === "") {
    return (
      <div>
        {/* კონკრეტული პროექტი / ყველა gateway */}
        <ReportsHeader />
        <Projectswithchart />
      </div>
    );
  }

  return (
    <div>
      {/* კონკრეტული პროექტი / კონკრეტული gateway */}
      <ReportsHeader />
      <SingleProjectAndGateway />
    </div>
  );
}

export default Reports;
