import PageLink from "../PageLink";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { primaryLinks } from "../../shared/data/links";
import "./Header.scss";
import { map } from "lodash";

interface HeaderProps {
  dark: boolean;
}

const Header = (props: HeaderProps) => (
  <header>
    <Container>
      <Navbar expand="lg" variant={props.dark ? "dark" : "light"}>
        <Navbar.Brand as={Link} to="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navigation" />
        <Navbar.Collapse id="main-navigation">
          <Nav className="mr-auto text-center">
            {map(primaryLinks, PageLink)}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
);

export default Header;
