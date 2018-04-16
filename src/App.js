import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";

import "./App.css";

import About from './About/About';
import TopNav from "./TopNav/TopNav";
import Contact from "./Contact/Contact";
import Main from "./Main/Main";
import Navigation from "./Navigation/Navigation";
import Returntop from './Returntop/Returntop';
import Search from './Search/Search';
import Spacer from './Spacer/Spacer';
let google_link =
  "https://www.google.com/maps/place/Southern+Home+Realty+Of+North+Alabama/@34.8039379,-86.9744859,17z/data=!3m1!4b1!4m5!3m4!1s0x88628b42b48d156b:0xb2cc28d86e5998c9!8m2!3d34.8039379!4d-86.9722972";

class App extends Component {
  constructor(props) {
	super(props);
	this.mainDiv = React.createRef();
  }

  state = {
    condenseNav: false,
    activePage: "Home",
    dimensions: {
      width: -1,
      height: -1
    },
    scrollTop: null,
    showTop: false
  };
  componentDidMount() {
	 	console.log('this.main', this.mainDiv.current.scrollHeight);

  }

  getScroll(event) {
    let t = this.mainDiv.current.scrollTop;
    this.setState({scrollTop:t});
    if (t > 400) this.setState({ condenseNav: true});
    if (t > 800) this.setState({ showTop:true });
    else if (this.state.condenseNav === true) this.setState({ condenseNav: false});
    else if (t <= 800) this.setState({ showTop:false });
  }

  goToTop = () => {
    console.log('go to top');
    
    this.setState({showTop:false});
    this.mainDiv.current.scrollTop = 0;
  }

  render() {
    return (
      <div onScroll={(event) => this.getScroll(event)}>
		<div
			ref={this.mainDiv} 
			className="main">
          {this.state.condenseNav ? < TopNav /> : null}
          <Navigation animate={this.state.condenseNav} /> 
          <Spacer pos={this.state.scrollTop} />
          <div className="content">
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/search" component={Search} />
              <Route path="/" exact component={Main} />
            </Switch>
          </div>
          <div className="right-social">
            <ButtonGroup vertical>
              <Button
                href="https://www.facebook.com/Southernhomerealty/"
                target="_blank"
              >
                <img
                  className="social-logo"
                  width={24}
                  alt="900x500"
                  src={require("./Assets/facebook.png")}
                />
              </Button>
              <Button
                href="https://www.yelp.com/biz/southern-home-realty-of-north-alabama-athens"
                target="_blank"
              >
                <img
                  className="social-logo"
                  width={24}
                  alt="900x500"
                  src={require("./Assets/yelp.png")}
                />
              </Button>
              <Button href={google_link} target="_blank">
                <img
                  className="social-logo"
                  width={24}
                  alt="900x500"
                  src={require("./Assets/google.png")}
                />
              </Button>
            </ButtonGroup>
            {/* <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
          </div>
        </div>
        <Returntop 
          show={this.state.showTop} 
          goTop={this.goToTop}
          />
      </div>
    );
  }
}

export default App;
