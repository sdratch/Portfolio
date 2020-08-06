import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import Header from "../components/Header"
import "../styles/Style.css";
class Contact extends Component {
  render() {
    return (
      <Container>
        <Header title = "Contact"/>
        <Row>
          <Col size="12">
            <form>
              <article class="form-group">
                <label>Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="John Smith"
                />
              </article>
              <article class="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Email@gmail.com"
                />
              </article>
              <article class="form-group">
                <label>Message</label>
                <textarea class="form-control" rows="3"></textarea>
              </article>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
