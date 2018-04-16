import React, { Component } from "react";
import { Panel, PanelHeading, PanelBody } from "react-bootstrap";
import "./Contact.css";

import Map from "../Map/Map";
import { Table } from "react-bootstrap";
let google_link =
"https://www.google.com/maps/place/Southern+Home+Realty+Of+North+Alabama/@34.8039379,-86.9744859,17z/data=!3m1!4b1!4m5!3m4!1s0x88628b42b48d156b:0xb2cc28d86e5998c9!8m2!3d34.8039379!4d-86.9722972";

class Contact extends Component {
  render() {
    return (
      <div className="contact-info">
        <div className="map-container">
          <div className="map-position">
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBUH6vJ8LWHgwpivvlFDDW_pqkX5zlKTbQ&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
        <div className="contact-list">
          <Panel>
            <Panel.Heading>
              <h4>How to Contact Us:</h4>
            </Panel.Heading>
            <Panel.Body>
              <div className="contact-card">
                <ul>
                  <li>
                    <i className="material-icons">home</i>
                    <span><a href={google_link} target="_blank"> 115 N. Jefferson St. Athens, AL 35611</a></span>
                  </li>
                  <li>
                    <i className="material-icons">call</i>
                    <span><a href="tel:+1-256-262-4816">(256) 262-4816</a></span>
                  </li>
                  <li>
                    <i className="material-icons">email</i>
                    <span><a href="mailto:shrrealty@yahoo.com?Subject=Housing%20Inquiry">shrrealty@yahoo.com</a></span>
                  </li>
                  <li>
                    <i className="material-icons">info</i>
                    <span>1 Block Off the Square</span>
                  </li>
                </ul>
              </div>
            </Panel.Body>
          </Panel>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Day</th>
                <th>Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>9:00 AM - 5:00 PM</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>9:00 AM - 5:00 PM</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>9:00 AM - 5:00 PM</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>9:00 AM - 5:00 PM</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>9:00 AM - 5:00 PM</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>10:00 AM - 5:00 PM</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>10:00 AM - 5:00 PM</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Contact;
