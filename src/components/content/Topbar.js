import React, { useState, useContext } from "react";
import { Navbar, Button, NavbarToggler } from "reactstrap";
import { userContext } from "../../context/userCtx";

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  const { users } = useContext(userContext);

  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3 mb-5 bg-white rounded justify-content-between"
      expand="md"
    >
      <Button className="navbtn" onClick={toggleSidebar}>
        <img src="/images/burger.svg" alt="Logo" />
      </Button>
      <NavbarToggler onClick={toggleTopbar} />
      <div>
        <Button className="mr-2 profilename">JD</Button>
        {users[0] && users[0].firstName} {users[0] && users[0].lastName}
      </div>
    </Navbar>
  );
};

export default Topbar;
