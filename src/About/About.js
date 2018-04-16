import React, { Component } from "react";
import {Media} from 'react-bootstrap';
import Slideshow from "../SlideShow/SlideShow";
import "./About.css";

class about extends Component {
  render() {
    return (
      <div>
        {/* <Slideshow /> */}
        <div className="text-container">
          <p>
            <b>Southern Home Realy of North Alabama</b> is licensed in Alabama &
            Tennessee. We opened in February 2017 & is home to 4 agents. 3 of
            our agents have 15+ years experience & 1 agent has just obtained
            their license. All of our agents belong to the{" "}
            <a href="http://www.alabamarealtors.com/" target="_blank">
              Alabama Association of Realtors{" "}
            </a>
            & the{" "}
            <a href="http://www.athensalabamarealtors.com/" target="_blank">
              {" "}
              Athens Limestone Association of Realtors.{" "}
            </a>
            We specialize in North Alabama & Southern Tennessee.
          </p>
        </div>
        <div className="container-white">
          <h2>Mission Statements</h2>
          <ul>
            <li>Dedicated to Results</li>
            <li>For exceptional service, call Southern Home Realty</li>
            <li>Homework is what we do best</li>
            <li>Making your dreams a reality</li>
            <li>Results that make you move</li>
            <li>
              Move in the right direction, call <b>Southern Home</b>
            </li>
          </ul>
        </div>
        <div className="text-container">
          <Media>
            <Media.Left>
              <img
                width={64}
                height={64}
                src={require('../Assets/Athens/profile-blank.png')}
                alt="thumbnail"
              />
            </Media.Left>
            <Media.Body>
              <Media.Heading>Deborah Corder Heading</Media.Heading>
              <p>
                  Born in Athens Alabama, a Realtor since 2002. Was named 2017 Realtor of the Year by Athens
                  Limestone Association of Realtors. Was 2017 President ALAR & 2016 Vice President. Deborah
                  is active in local & state Associations. She has worked for Remax for 10 years before
                  opening <b>Southern Home Realty of North Alabama</b> with Roger Elmore. She too has many
                  years working with the public, as well as 30 years in dentistry as a dental hygeneist,
                  prior to that as a hairdresser. She realizes the importance of "Actively Listening" to
                  a clients needs & desires.
              </p>
            </Media.Body>
          </Media>
        </div>
        <div className="text-container text-container-white">
          <Media>
            <Media.Left>
              <img
                width={64}
                height={64}
                src={require('../Assets/Athens/profile-blank.png')}
                alt="thumbnail"
              />
            </Media.Left>
            <Media.Body>
              <Media.Heading>Roger Elmore</Media.Heading>
              <p>
                  Born in Athens, Alabama. A Realtor since 2001. He has held numerous positions on both local
                  & state associations. Named Realtor of the year in 2007 & 2016. State Director in 2015 &
                  presented with the Glenn Blackwell Award 2012. Worked with Legacy Home Group & ReMax Legacy
                  for approximately 16 years prior to opening <b>Souther Home Realty.</b> Before that he was
                  Owner & Manager of Sears as well as owner of Roger's Foreign Cars. Roger has served the public
                  for his entire adult life & enjoys continuing to so through Real Estate.
              </p>
            </Media.Body>
          </Media>
        </div>
        <div className="text-container">
          <Media>
            <Media.Left>
              <img
                width={64}
                height={64}
                src={require('../Assets/Athens/profile-blank.png')}
                alt="thumbnail"
              />
            </Media.Left>
            <Media.Body>
              <Media.Heading>Keith Rowe</Media.Heading>
              <p>
                  A native of Athens. He has been licensed since 2017 & is interested in Real Estate development.
                  Keith brings a new & exciting approach to the world of Real Estate.
              </p>
            </Media.Body>
          </Media>
        </div>
        <div className="text-container text-container-white">
          <Media>
            <Media.Left>
              <img
                width={64}
                height={64}
                src={require('../Assets/Athens/profile-blank.png')}
                alt="thumbnail"
              />
            </Media.Left>
            <Media.Body>
              <Media.Heading>Larry Schrimsher</Media.Heading>
              <p>
                  Born & raised in Athens, Larry graduated from Athens High in 1964, then from Calhoun Community
                  College Jr. College. Larry worked with Boeing, then wth Sears in store management. He also
                  worked for 25 years as the South East Sales Manager for a leading Insurance Comppany. He has
                  been a realtor since 2003 & has achieved an ABR certification & is an associate broker.
              </p>
            </Media.Body>
          </Media>
        </div>
      </div>
    );
  }
}

export default about;