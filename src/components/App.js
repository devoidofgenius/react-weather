import React from 'react';
import 'normalize.css';

import Forecast from './Forecast';
import Current from './Current';
import TimeLocation from './TimeLocation';
import ScaleToggle from './ScaleToggle';

import { fetchData } from '../ApiUtils';
import icons from '../icons';
import { convertIconID, convertToCelcius } from '../helpers';
import '../css/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      icons: icons,
      // time: (new Date()).toLocaleTimeString()
    };
    this.toggleTemp = this.toggleTemp.bind(this);
  }

  componentWillMount() {

    fetchData().then((data) => {
      this.setState({
        city: data.ipData.city,
        currentTemp: Math.floor(data.weatherData.main.temp),
        currentCondition: data.weatherData.weather[0].main,
        currentID: data.weatherData.weather[0].id,
        forecasts: data.forecastData.list,
        isFahrenheit: data.weatherData.sys.country === "US" ? true : false,
        dt: data.weatherData.dt,
        todaySunrise: data.weatherData.sys.sunrise,
        todaySunset: data.weatherData.sys.sunset,
        isSun: data.weatherData.dt > data.weatherData.sys.sunrise && data.weatherData.dt < data.weatherData.sys.sunset ? true : false
      })
    })

  }


  // componentDidMount() {
  //   setInterval(this.updateTime.bind(this), 1000);
  // }
  //
  // updateTime() {
  //   this.setState({ time: (new Date()).toLocaleTimeString() });
  // }

  toggleTemp() {
    this.setState({
      isFahrenheit: this.state.isFahrenheit ? false : true
    });
  }

  render() {

    if (!this.state.currentID) {
      return(
        <p>Loading...</p>
      )
    }
    function getTime(unixTimeStamp) {
      const date = new Date(unixTimeStamp * 1000);
      const hrs = date.getHours();
      const mins = `0${date.getMinutes()}`;
      const suffix = hrs >= 12 ? "PM" : "AM";
      return `${(hrs + 11) % 12 + 1}:${mins.substr(-2)} ${suffix}`
    }
    return (
      <div className="app-wrapper">
        <ScaleToggle isFahrenheit={this.state.isFahrenheit} toggleTemp={this.toggleTemp} />
        <TimeLocation time={getTime(this.state.dt)} city={this.state.city} />
        <div className="current-wrap">
          <Current isFahrenheit={this.state.isFahrenheit} isSun={this.state.isSun} city={this.state.city} currentTemp={this.state.currentTemp} currentTempCelcius={convertToCelcius(this.state.currentTemp)} currentCondition={this.state.currentCondition} currentIconKey={convertIconID(this.state.currentID)} icons={this.state.icons}/>
        </div>
        <div className="forecast-wrap">
          <div className="forecast">
            {
              Object
                .keys(this.state.forecasts)
                .map((key, index) => <Forecast key={key} index={index} forecasts={this.state.forecasts} icons={this.state.icons} isFahrenheit={this.state.isFahrenheit} />)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
