import React from 'react';

function MainInfo(props) {
  return (
    <section className="main-info">
      <h1>{props.weatherData.temperature}<sup>o</sup></h1>
      <h2>{props.weatherData.condition}</h2>
      <h3>{props.weatherData.city}</h3>
    </section>
  );
}

export default MainInfo;