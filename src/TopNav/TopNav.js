import React from "react";
import { Link, withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./TopNav.css";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl,
  Button
} from "react-bootstrap";

const topnav = props => {
  return (
    <Navbar className="navbar-main" fixedTop collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <img
              className="main-logo"
              width={32}
              alt="900x500"
              src={require("../Assets/Athens/house.png")}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/about">
            <NavItem eventKey={4}>About</NavItem>
          </LinkContainer>
          <LinkContainer to="/contact">
            <NavItem eventKey={5}>Contact</NavItem>
          </LinkContainer>
        </Nav>
		{/* <Navbar.Form pullRight>
		<FormGroup>
			<FormControl type="text" placeholder="Search" />
		</FormGroup>{" "}
		<Button
			bsStyle="success"
			bsSize="sm" 
			type="submit">
			<span className="glyphicon glyphicon-search" aria-hidden="true"></span>
		</Button>
		</Navbar.Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(topnav);
