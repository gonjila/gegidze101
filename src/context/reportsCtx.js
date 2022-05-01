import React, { createContext, useEffect, useState } from "react";

export const reportsContext = createContext();

const ReportsContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [gateways, setGateways] = useState([]);
  const [reports, setReports] = useState([]);
  const [headerData, setHeaderData] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      Math.round(reports.reduce((prev, curr) => prev + curr.amount, 0) * 100) /
        100
    );
  }, [reports]);

  return (
    <reportsContext.Provider
      value={{
        projects,
        setProjects,
        gateways,
        setGateways,
        reports,
        setReports,
        headerData,
        setHeaderData,
        totalAmount,
      }}
    >
      {children}
    </reportsContext.Provider>
  );
};

export default ReportsContextProvider;
