import React, { createContext, useEffect, useState } from "react";

export const reportsContext = createContext();

const ReportsContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [gateways, setGateways] = useState([]);
  const [reports, setReports] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const formData = {
    projectId: "",
    gatewayId: "",
    from: "",
    to: "",
  };

  useEffect(() => {
    fetch(`http://178.63.13.157:8090/mock-api/api/projects`)
      .then((res) => res.json())
      .then((result) => setProjects(result.data))
      .catch((err) => {
        console.log(err);
      });

    fetch(`http://178.63.13.157:8090/mock-api/api/gateways`)
      .then((res) => res.json())
      .then((result) => setGateways(result.data))
      .catch((err) => {
        console.log(err);
      });

    fetch(`http://178.63.13.157:8090/mock-api/api/report`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        setReports(result.data);
        return result.data;
      })
      .then((data) =>
        setTotalAmount(
          Math.round(data.reduce((prev, curr) => prev + curr.amount, 0) * 100) /
            100
        )
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <reportsContext.Provider
      value={{
        projects,
        setProjects,
        gateways,
        setGateways,
        reports,
        setReports,
        totalAmount,
      }}
    >
      {children}
    </reportsContext.Provider>
  );
};

export default ReportsContextProvider;
