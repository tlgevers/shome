import React, { Component } from "react";
import { Link } from "react-router-dom";
import History from '../History/History';
import { withRouter } from 'react-router-dom';
import "./Navigation.css";

const navigation = (props) => {
  let classImg = [];
  if (props) {
    console.log('navigation props', props.location.pathname);
  }
  if (props.condenseNav) classImg = ["img-container", "img-container-condense"];
  else classImg = ["img-container"];
  return (
    <div className="top-navigation">
      <div className="main-title">
        <div className="roof-top" />
        <div className="title-first">Southern Home</div>
        <div className="title-second">Realty</div>
        <div className="title-third">of</div>
        <div className="title-fourth">North Alabama</div>
      </div>
      <h1 className="">Southern Home Realty of North Alabama</h1>
      <div className={classImg.join(" ")} />
      <div className="raised" />
      <div className="list-container">
        <ul>
          {props.location.pathname === "/" ? null 
          :
          <li>
            <i className="material-icons">home</i> 
            <Link to="/">
              &nbsp;Home
            </Link>
          </li>
          }
          {props.location.pathname === "/about" ? null
          :
          <li>
            <i className="material-icons">&#xE88F;</i>
            <Link to="/about">
              &nbsp;About
            </Link>
          </li>
          }
          {props.location.pathname === "/search" ? null :
          <li>
            <i className="material-icons">&#xE7EE;</i> 
            <Link to="/search">
            &nbsp;Search
            </Link>
          </li>
          }
          {props.location.pathname === "/contact" ? null :
          <li>
            <i className="material-icons">&#xE0B0;</i>
            <Link to="/contact">
              &nbsp;Contact
            </Link>
          </li>
          }
        </ul>
      </div>
      <div>
        <History animate={props.animate} className="active-page" />
      </div>
    </div>
  );
};

export default withRouter(navigation);