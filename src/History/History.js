import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./History.css";
import AnimateOnChange from "react-animate-on-change";

class history extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.location.pathname === nextProps.location.pathname) return false;
    return true;
  }

  render () {
  let current = "";
  if (this.props.location.pathname === "/about") current = "About";
  if (this.props.location.pathname === "/") current = "Home"; 
  if (this.props.location.pathname === "/contact") current = "Contact";
  if (this.props.location.pathname === "/search") current = "Search";
  if (current !== "") {
    console.log('current true', this.props);
    
  }
    return (
      <div>
        <AnimateOnChange
        baseClassName="active-page" 
        animationClassName="active-page-changed"
        animate={!this.props.animate}
        >
        {current}
        </AnimateOnChange>
    </div>
    )
  };
};

export default withRouter(history);