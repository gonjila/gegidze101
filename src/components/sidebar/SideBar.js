import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import Pie from "../../assets/images/pie.png";
import Block from "../../assets/images/block.svg";
import Chart from "../../assets/images/chart.svg";
import Layer from "../../assets/images/Layer.svg";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <img src={Logo} alt="Logo" className="mainlogo" />
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <NavLink tag={Link} to={"/Reports"}>
            <img src={Chart} alt="Logo" />
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"/pages"}>
            <img src={Block} alt="Logo" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/Charts"}>
            <img className="custom_image" src={Pie} alt="logo" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            <img src={Layer} alt="Logo" />
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

export default SideBar;
