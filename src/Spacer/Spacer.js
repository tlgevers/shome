import React from 'react';
import './Spacer.css';

const spacer = (props) => {
    let x = {
        backgroundPositionX: props.pos 
    } 
    return (
        <div className="spacer-container">
            <div className="spacer" style={x}></div>
            <div className="frames" />
        </div>
    )
}
export default spacer;