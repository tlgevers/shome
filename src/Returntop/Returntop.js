import React from 'react';
import { Button } from 'react-bootstrap';
import './Returntop.css';

const returntop = (props) => {
    return props.show ? (
        <div className="return-top">
            <Button bsStyle="primary" onClick={() => props.goTop()}><i className="material-icons">keyboard_arrow_up</i></Button> 
        </div>
    ) : null;
};

export default returntop;