import React, { Component } from "react";
import Self from "../assets/images/Self_Picturex2.jpg";
import { Container, Row, Col } from "../components/Grid";
import Header from "../components/Header"
import "../styles/Style.css";

class Home extends Component {
  render() {
    return (
      <Container>
        <Header title = "About Me"/>
        
        <Row>
          <Col size ="12">
            <figure>
              <img className="float-left pr-4" src={Self} alt="Self" />
            </figure>

            <p>
              Hello, My name is Sam Dratch. I am a recent graduate from Georgia
              tech. I graduated with a bachelors of science in material science
              and engineering (MSE). I am currently taking a coding bootcamp
              offered at Georgia tech to improve my knowledge of coding and open
              up new oppertunities. I plan to also go back and get a masters in
              MSE in fall 2020 to enhance my knowledge on metallurgy. In my free
              time, I enjoy playing video games and watching youtube or twitch
              videos. If you enjoy my profile, please feel free to contact me
              using the "contact me page" or with the linkedin link below.
            </p>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/sam-dratch-27a66579/">
                  Linkedin Profile
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1rHwtdAM3uNlSVZvjl6Z2HtZF05VyPitg/view?usp=sharing">
                  Resume
                </a>
              </li>
              <li>
                <a href="https://github.com/sdratch">Github</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
