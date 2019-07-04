import React from 'react';

import Wind from './Wind';
import Humidity from './Humidity';
import AirPressure from './AirPressure';

function OtherInfo(props) {
  return (
    <section className="other-info">
      <Wind windSpeed={props.weatherData.windSpeed}/>
      <Humidity humidity={props.weatherData.humidity}/>
      <AirPressure airPressure={props.weatherData.airPressure}/>
    </section>
  );
}

export default OtherInfo;