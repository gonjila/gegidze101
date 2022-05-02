import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <img src="/images/logo.svg" alt="Logo" className="mainlogo" />
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <NavLink tag={Link} to={"/Reports"}>
            <img src="/images/chart.svg" alt="Logo" />
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"/pages"}>
            <img src="/images/block.svg" alt="Logo" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/Charts"}>
            <img className="custom_image" src="/images/pie.png" alt="logo" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            <img src="/images/Layer.svg" alt="Logo" />
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

export default SideBar;
