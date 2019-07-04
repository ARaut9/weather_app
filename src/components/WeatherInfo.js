import React from 'react';
import MainInfo from './MainInfo';
import OtherInfo from './OtherInfo';
import errorIcon from '../icons/error.png';

class WeatherInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {
        temperature: null,
        condition: null,
        city: null,
        windSpeed: null,
        humidity: null,
        airPressure: null
      },
      requestSuccessful: true
    }
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    this.fetchWeatherData('Mumbai');
  }

  fetchWeatherData(location) {
    let scope = this;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=ace869be131c169c64e7bc427753e37a`, 
      { mode: 'cors'} )
    .then(
      function(response) {
        return response.json();
      }
    )
    .then(
      function(response) {
        scope.setState({
          weatherData: {
            temperature: response.main.temp,
            condition: response.weather[0].main,
            city: response.name,
            windSpeed: response.wind.speed,
            humidity: response.main.humidity,
            airPressure: response.main.pressure
          },
          requestSuccessful: true
        });
      }
    )
    .catch(
      function(error) {
        console.log(error);
        scope.setState({
          requestSuccessful: false
        })
      }
    );
  }

  submitHandler(e) {
    e.preventDefault();
    const cityInput = document.querySelector('#city');
    let cityName = this.capitalize(cityInput.value);
    this.fetchWeatherData(cityName);
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  render() {
    if(this.state.requestSuccessful) { 
      return (
        <div className="container">
          <form onSubmit={this.submitHandler}>
            <input type="text" id="city"/>
            <input type="submit" value="Submit"/>
          </form>

          <MainInfo weatherData={this.state.weatherData}/>
          <OtherInfo weatherData={this.state.weatherData}/>
        </div>
      );
    } else { 
      return (
        <div className="container">
          <form onSubmit={this.submitHandler}>
            <input type="text" id="city"/>
            <input type="submit" value="Submit"/>
          </form>

          <div id="error">
            <p id="error-msg">Location Not Found</p>
            <div><img src={errorIcon} alt=""/></div>
          </div>
        </div>
      );
    }
  }
}

export default WeatherInfo;