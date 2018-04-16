import React from 'react';
import './SlideShow.css';

import { Carousel } from 'react-bootstrap'; 

const slideshow = (props) => {
	return (
		<Carousel>
			<Carousel.Item>
				<div className="img-house" />
				<Carousel.Caption>
					<h3 className="fancy-title">Southern Home Realty of North Alabama</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<div className="img-sh" />
				<Carousel.Caption>
					<h3 className="fancy-title">Southern Home Realty of North Alabama</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<div className="img-historic" />
				<Carousel.Caption>
					<h3 className="fancy-title">Southern Home Realty of North Alabama</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}

export default slideshow;
