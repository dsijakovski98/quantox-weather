import React from 'react';
import sun from '../../assets/icons/sun.svg';

function NoDay() {
    return (
        <div className="widget-noday-container">
            <img src={sun} alt="Sun svg" className="widget-sun"/>
            <h2>No day selected</h2>
        </div>
    )
}

export default NoDay
