import React from 'react';
import airPressureIcon from '../icons/air-pressure.png';

function AirPressure(props) {
  return (
    <div className="air-pressure-info">
      <div><img src={airPressureIcon} alt="air pressure"/></div>
      <p>{props.airPressure}<span>hpa</span></p>
      <h2>Air Pressure</h2>
    </div>
  );
}

export default AirPressure;