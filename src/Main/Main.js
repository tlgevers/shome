import React, { Component } from "react";
import { Grid, Col, Thumbnail, Row } from "react-bootstrap";
import "./Main.css";

class main extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="body">
        <div className="text-container">
          <p>
            <b>Southern Home Realty Of North Alabama</b>, in Athens, AL, is the
            area's leading real estate agency serving Limestone, Madison &
            Morgan counties & surrounding areas. We specialize in buying &
            selling residential & commercial properties, multi-family homes,
            l& sales & more. For more information, contact Southern Home
            Realty Of North Alabama in Athens!
          </p>
        </div>
        <p>
          {/* <LinkContainer to="/">
					<Button bsStyle="primary">Learn more</Button>
				</LinkContainer> */}
        </p>
        <Grid>
          <Row>
            <Col xs={6} md={3}>
              <Thumbnail
                href="#"
                alt="171x180"
                src={require("../Assets/Athens/city_logo.jpeg")}
              />
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail
                href="#"
                alt="171x180"
                src={require("../Assets/Athens/court.jpg")}
              />
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail
                href="#"
                alt="171x180"
                src={require("../Assets/Athens/downtown.jpg")}
              />
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail
                href="#"
                alt="171x180"
                src={require("../Assets/Athens/athens_front.jpg")}
              />
            </Col>
          </Row>
        </Grid>
        <div className="text-container">
          <p>
            We realize the importance of being knowledgeable, honest,
            trustworthy, dedicated & caring. We are also so proud of our City, County,
            & surrounding areas & we are ready to sre this treasure with you. Whether
            you are technically oriented or just wanting to relax & take life in the
            "slower"lane, we have all you need here in Athens & it's surrounding areas.
            We take pride in knowing the histry of North Alabama & can place you in
            the area that would be perfect for you & your family to enjoy on a daily
            basis. We at Southern Home Realty of North Alabama are here to serve you
            with all your Real Estate needs...
          </p>
        </div>
        <div className="text-container text-container-white">
          Population in 2014: 24,522
          <ul>
            <li><h3>College/University in Athens:</h3></li>
            <li>Athens State University</li>
          </ul>
          <ul>
            <li><h3>Public high schools in Athens:</h3></li>
            <li>Athens High School</li>
            <li>
              Clements High School
            </li>
            <li>East Limestone High School</li>
            <li>Limestone County Area VOC Tech</li>
          </ul>
          <ul>
            <li><h3>Private high schools in Athens:</h3></li>
            <li>
              Athens Bible School
            </li>
            <li>
              Lindsay Lane Christian Academy 
            </li>
            <li>
              Temple Christian Academy
            </li>
            </ul>
            <ul>
            <li><h3>Elementary/middle Schools in Athens:</h3></li>
            <li>
              Owens Elementary School
            </li>
            <li>
              Athens Intermediate School
            </li>
            <li>
              Athens Middle School
            </li>
            <li>
              Julian Newman Elementary School
            </li>
            <li>
              Athens Elementary School
            </li>
            <li>
              James L Cowart Elementary School
            </li>
            <li>
              Johnson Elementary School
            </li>
            <li>
              Brookhill Elementary School
            </li>
            <li>
              Piney Chapel Elementary School
            </li>
            <li>
              Blue Springs Elementary School
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default main;
