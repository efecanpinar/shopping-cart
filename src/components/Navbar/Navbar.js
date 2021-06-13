import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { CartIcon } from "../icons";

const NavBar = ({ totalItems }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand href="/">Shopping Cart</Navbar.Brand>

        <Nav className="mr-auto" navbar>
          <Nav.Item>
            <Nav.Link href="#">Store</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">About</Nav.Link>
          </Nav.Item>
        </Nav>
        <Navbar bg="dark" variant="dark">
          <Nav.Item>
            <Nav.Link href="#">
              <CartIcon />
              Cart ({totalItems})
            </Nav.Link>
          </Nav.Item>
        </Navbar>
      </Navbar>
    </div>
  );
};

export default NavBar;
