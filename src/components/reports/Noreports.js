import React from "react";
import { Col, Row } from "reactstrap";
import noimage from "../../assets/images/noreports.svg";
function Noreports() {
  return (
    <div>
      <Row className="justify-content-center mt-5">
        <Col xs={4}>
          <h2 className="text-center">No reports</h2>
          <p className="text-center">
            {" "}
            Currently you have no data for the reports to be generated. Once you
            start generating traffic through the Balance application the reports
            will be shown.
          </p>
          <img src={noimage} alt="Logo" />
        </Col>
      </Row>
    </div>
  );
}

export default Noreports;
