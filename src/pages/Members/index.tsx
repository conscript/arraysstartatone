import Layout from "components/Layout";
import { Container } from "react-bootstrap";
import React from "react";

const Members = () => {
  return (
    <Layout>
      <Container>
        <h1>Members</h1>
        <ul>
          <li>Conscript</li>
          <li>Clover</li>
          <li>Akuma</li>
          <li>ThisChris</li>
          <li>B-Rad</li>
        </ul>
      </Container>
    </Layout>
  );
};

export default Members;
