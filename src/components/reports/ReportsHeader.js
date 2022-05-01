import React, { useRef, useState, useEffect, useContext } from "react";
import {
  Col,
  Row,
  // Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button,
} from "reactstrap";

import { reportsContext } from "../../context/reportsCtx";

function ReportsHeader() {
  const projectRef = useRef();
  const gatewayRef = useRef();
  const fromDateRef = useRef();
  const toDateRef = useRef();

  const { setProjects, setGateways, setReports } = useContext(reportsContext);

  const [allProjects, setAllProjects] = useState([]);
  const [allGateways, setAllGateways] = useState([]);

  useEffect(() => {
    fetch(`http://178.63.13.157:8090/mock-api/api/projects`)
      .then((res) => res.json())
      .then((result) => setAllProjects(result.data))
      .catch((err) => console.error("allProjects", err));

    fetch(`http://178.63.13.157:8090/mock-api/api/gateways`)
      .then((res) => res.json())
      .then((result) => setAllGateways(result.data))
      .catch((err) => console.error("allGateways", err));
  }, []);

  const onFormSubmmit = (e) => {
    e.preventDefault();

    const formData = {
      projectId: projectRef.current.value,
      gatewayId: gatewayRef.current.value,
      from: fromDateRef.current.value,
      to: toDateRef.current.value,
    };

    console.log("formData", formData);

    if (projectRef.current.value) {
      setProjects(
        allProjects.filter(
          (project) => project.projectId === projectRef.current.value
        )
      );
    } else {
      setProjects(allProjects);
    }

    if (gatewayRef.current.value) {
      setGateways(
        allProjects.filter(
          (project) => project.gatewayIds === gatewayRef.current.value
        )
      );
    } else {
      setGateways(allGateways);
    }

    fetch(`http://178.63.13.157:8090/mock-api/api/report`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => setReports(result.data))
      .catch((err) => console.error("reports", err));
  };

  return (
    <div>
      <Row>
        <Col xs={4}>
          <h2>Reports</h2>
          <p>Easily generate a report of your transactions</p>
        </Col>
        <Col xs={8}>
          <Row className="justify-content-end">
            <form onSubmit={(e) => onFormSubmmit(e)}>
              <select ref={projectRef} className="mr-2 dropdownheader">
                <option value="">All projects</option>
                {allProjects &&
                  allProjects.map((project) => (
                    <option key={project.projectId} value={project.projectId}>
                      {project.name}
                    </option>
                  ))}
              </select>

              <select ref={gatewayRef} className="mr-2 dropdownheader">
                <option value="">All gateways</option>
                {allGateways &&
                  allGateways.map((gateway) => (
                    <option key={gateway.gatewayId} value={gateway.gatewayId}>
                      {gateway.name}
                    </option>
                  ))}
              </select>

              <input
                type="date"
                placeholder="from date"
                ref={fromDateRef}
                className="mr-2 buttonheader"
              />

              <input
                type="date"
                placeholder="to date"
                ref={toDateRef}
                className="mr-2 buttonheader"
              />

              <button className="mr-2 generatebtn">Generate report</button>
            </form>

            {/* <Dropdown toggle={function noRefCheck() {}} className="mr-2 dropdownheader">
              <DropdownToggle caret>Select project</DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem text>Dropdown Item Text</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown toggle={function noRefCheck() {}} className="mr-2 dropdownheader">
              <DropdownToggle caret>Select gateway</DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem text>Dropdown Item Text</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Button className="mr-2 buttonheader">From date</Button>

            <Button className="mr-2 buttonheader">to date</Button>
            <Button className="mr-2 generatebtn">Generate Report</Button> */}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default ReportsHeader;
