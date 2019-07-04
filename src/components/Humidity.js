import React from 'react';
import humidityIcon from '../icons/humidity.png';

function Humidity(props) {
  return (
    <div className="humidity-info">
      <div><img src={humidityIcon} alt="humidity"/></div>
      <p>{props.humidity}<span>%</span></p>
      <h2>Humidity</h2>
    </div>
  );
}

export default Humidity;