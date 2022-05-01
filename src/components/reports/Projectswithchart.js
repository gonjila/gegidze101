import React, { useContext } from "react";
import { Table, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { reportsContext } from "../../context/reportsCtx";
import DoughnutChart from "./DoughnutChart";

function Projectswithchart() {
  const { projects, reports } = useContext(reportsContext);

  const productsPrices = projects.map((project) => {
    let currentAmount = 0;
    reports.map((report) => {
      if (project.projectId === report.projectId) {
        currentAmount += report.amount;
      }
    });
    return currentAmount;
  });

  return (
    <>
      <Row>
        <Col xs={6}>
          <div id="accordion">
            {projects &&
              projects.map((project) => (
                <div className="card" key={project.projectId}>
                  <div
                    className="card-header"
                    id="headingOne"
                    data-toggle="collapse"
                    data-target={`#${project.projectId}`}
                    aria-expanded="true"
                    aria-controls={`${project.projectId}`}
                  >
                    <div className="row justify-content-between">
                      <h5 className="mb-0 ml-4">{project.name}</h5>
                      <h5 className="mr-4">
                        TOTAL:{" "}
                        {reports &&
                          reports
                            .filter(
                              (report) => report.projectId === project.projectId
                            )
                            .reduce(
                              (prev, curr) =>
                                Math.round((prev + curr.amount) * 100) / 100,
                              0
                            )}{" "}
                        USD
                      </h5>
                    </div>
                  </div>

                  <div
                    id={`${project.projectId}`}
                    className="collapse hide"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <Table striped>
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Transaction ID</th>
                            <th>Amount</th>
                          </tr>
                        </thead>

                        {reports &&
                          reports
                            .filter(
                              (report) => project.projectId === report.projectId
                            )
                            .map((filteredReport) => (
                              <tbody key={filteredReport.paymentId}>
                                <tr>
                                  <th scope="row">{filteredReport.created}</th>
                                  <td>a732b</td>
                                  <td>{filteredReport.amount} USD</td>
                                </tr>
                              </tbody>
                            ))}
                      </Table>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </Col>

        <Col xs={6} className="d-flex justify-content-center">
          <Col xs={8}>
            <DoughnutChart
              projects={projects}
              productsPrices={productsPrices}
            />
          </Col>
        </Col>
      </Row>
    </>
  );
}

export default Projectswithchart;
