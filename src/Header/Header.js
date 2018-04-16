import React from 'react';
import { Well } from 'react-bootstrap';

import './Header.css';

const header = (props) => {
	return  (
		<Well bsSize="large">
			<h1 className="fancy-title-main">Southern Home Realty of North Alabama</h1>
		</Well>
	)
};

export default header;


