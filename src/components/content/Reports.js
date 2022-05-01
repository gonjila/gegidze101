import React, { useContext } from "react";
import { reportsContext } from "../../context/reportsCtx";
import NoReports from "../reports/NoReports";
import Allprojects from "../reports/Allprojects";
// import Noreports from "../reports/Noreports";
import Projectswithchart from "../reports/Projectswithchart";
import ReportsHeader from "../reports/ReportsHeader";
import SingleProjectAndGateway from "../reports/SingleProjectAndGateway";

function Reports() {
  const { projects, gateways, reports, headerData } = useContext(
    reportsContext
  );

  console.log(projects, gateways, reports, headerData);

  if (reports.length < 1) {
    return (
      <div>
        <ReportsHeader />
        {/* sawyisi gverdi */}
        <NoReports />
      </div>
    );
  } else if (headerData.projectId === "" && headerData.gatewayId === "") {
    return (
      <div>
        <ReportsHeader />
        {/* ყველა project / ყველა gateway */}
        <Allprojects />
      </div>
    );
  } else if (headerData.projectId === "" && headerData.gatewayId) {
    return (
      <div>
        <ReportsHeader />
        {/* ყველა პროექტი / კონკრეტული კარიბჭე */}
        <Projectswithchart />
      </div>
    );
  } else if (headerData.projectId && headerData.gatewayId === "") {
    return (
      <div>
        <ReportsHeader />
        {/* კონკრეტული პროექტი / ყველა კარიბჭე */}
        <Projectswithchart />
      </div>
    );
  } else if (headerData.projectId && headerData.gatewayId) {
    return (
      <div>
        <ReportsHeader />
        {/* კონკრეტული პროექტი / კონკრეტული კარიბჭე */}
        <SingleProjectAndGateway />
      </div>
    );
  }

  return (
    <div>
      <p>Simething</p>
    </div>
  );
}

export default Reports;
