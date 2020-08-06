import React, { Component } from "react";
import { Container, Row } from "../components/Grid";
import "../styles/Style.css";
import Borger from "../assets/images/borger.PNG";
import Weather from "../assets/images/WeatherDashboard.png";
import Flex from "../assets/images/FlexCity.PNG";
import Day from "../assets/images/DayPlanner.png";
import Food from "../assets/images/FoodForecaster.PNG";

class Portfolio extends Component {
  render() {
    return (
      <Container>
        <Row>
          <header class="col">
            <h1 class="ml-3">Portfolio</h1>

            <hr />
          </header>
        </Row>
        
        <Row Port>
          <article class="col mb4">
            <figure class="card" style={{ width: "300px;" }}>
              <img
                src={Food}
                class="card-img-top"
                alt="Link to food forecaster"
              />
              <h4 class="imageText card-text">
                <a href="https://sdratch.github.io/food-forecaster/">
                  Food Forecaster
                </a>
              </h4>
            </figure>
          </article>

          <article class="col mb-4">
            <figure class="card" style={{ width: "300px;" }}>
              <img
                src={Weather}
                class="card-img-top"
                alt="Link to weather dashboard"
              />
              <h4 class="imageText card-text">
                <a href="https://sdratch.github.io/HW6-Weather-Dashboard/">
                  Weather Dashboard
                </a>
              </h4>
            </figure>
          </article>

          <article class="col mb-4">
            <figure class="card" style={{ width: "300px;" }}>
              <img src={Day} class="card-img-top" alt="Link to day planner" />
              <h4 class="imageText card-text">
                <a href="https://sdratch.github.io/Hw5-Day-Planner/">
                  Day Planner
                </a>
              </h4>
            </figure>
          </article>

          <article class="col mb-4">
            <figure class="card" style={{ width: "300px;" }}>
              <img src={Borger} class="card-img-top" alt="Link to borger" />
              <h4 class="imageText card-text">
                <a href="https://pure-caverns-67601.herokuapp.com/">
                  Borger Eater
                </a>
              </h4>
            </figure>
          </article>

          <article class="col mb-4">
            <figure class="card" style={{ width: "300px;" }}>
              <img src={Flex} class="card-img-top" alt="Link toflex" />
              <h4 class="imageText card-text">
                <a href="https://blooming-coast-09812.herokuapp.com/">
                  Flex City
                </a>
              </h4>
            </figure>
          </article>
        </Row>
      </Container>
    );
  }
}

export default Portfolio;
