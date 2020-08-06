import React, { Component } from "react";
import { Container, Row } from "../components/Grid";
import Header from "../components/Header"
import Cards from "../components/Cards"
import "../styles/Style.css";
import projects from "../projects.json"

class Portfolio extends Component {
 
  render() {
    return (
      <Container>
        <Header title = "Portfolio"/>
        <Row Port>
        {projects.map(project =>(
          <Cards key = {project.id} name = {project.name} href = {project.href} image = {project.image}/>
        ))}
        </Row>
      </Container>
    );
  }
}

export default Portfolio;
