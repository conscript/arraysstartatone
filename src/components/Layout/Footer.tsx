import React, { FC } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer: FC = () => (
  <footer>
    <Container className="d-flex flex-column align-items-center">
      <Navbar variant="dark">
        <Navbar.Brand as={Link} to="/"></Navbar.Brand>
      </Navbar>
      <small>
        <i className="far fa-copyright mr-1 d-inline-block" />
        {new Date().getFullYear()} Arrays Start At One. All Rights Reserved.
      </small>
    </Container>
  </footer>
);

export default Footer;
