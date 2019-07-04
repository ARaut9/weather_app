import React from 'react';
import windIcon from '../icons/wind.png';

function Wind(props) {
  return (
    <div className="wind-info">
        <div><img src={windIcon} alt="wind"/></div>
        <p>{props.windSpeed}<span>km/h</span></p>
        <h2>Wind</h2>
    </div>
  );
}

export default Wind;