import React from 'react';
import 'normalize.css';

import Forecast from './Forecast';
import Current from './Current';
import TimeLocation from './TimeLocation';

import { fetchData } from '../ApiUtils';
import icons from '../icons';
import { convertIconID, convertToCelcius } from '../helpers';
import '../css/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      icons: icons,
      time: (new Date()).toLocaleTimeString(),
      isFahrenheit: true
    };
    this.toggleTemp = this.toggleTemp.bind(this);
  }

  componentWillMount() {

    const forecastTemps = [];
    const forecastTempsCelcius = [];
    const forecastIcons = [];

    fetchData().then((data) => {
      this.setState({
        city: data.ipData.city,
        currentTemp: Math.floor(data.weatherData.main.temp),
        currentTempCelcius: convertToCelcius(data.weatherData.main.temp),
        currentCondition: data.weatherData.weather[0].main,
        currentID: data.weatherData.weather[0].id,
        forecasts: data.forecastData.list
      })

      data.forecastData.list.map(data => {
        forecastTemps.push({
          high: data.temp.max,
          low: data.temp.min
        })
        forecastTempsCelcius.push({
          high: convertToCelcius(data.temp.max),
          low: convertToCelcius(data.temp.min)
        })
        forecastIcons.push(data.weather[0].id)
      });

    })

    this.setState({ forecastTemps, forecastTempsCelcius, forecastIcons });

  }

  componentDidMount() {
    setInterval(this.updateTime.bind(this), 1000);
  }

  updateTime() {
    this.setState({ time: (new Date()).toLocaleTimeString() });
  }

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

    // const iconKey = convertIconID(this.state.currentID);

    return (
      <div className="app-wrapper">
        <label id="toggle">
        	<input type="checkbox" onClick={this.toggleTemp} />
        	<span id="custom">
        		<span id="circle"></span>
        	</span>
        </label>
        <TimeLocation time={this.state.time} city={this.state.city} />
        <div className="current-wrap">
          <Current isFahrenheit={this.state.isFahrenheit} city={this.state.city} currentTemp={this.state.currentTemp} currentTempCelcius={this.state.currentTempCelcius} currentCondition={this.state.currentCondition} currentIconKey={convertIconID(this.state.currentID)} icons={this.state.icons}/>
        </div>
        <div className="forecast-wrap">
          <div className="forecast">
            {
              Object
                .keys(this.state.forecasts)
                .map((key, index) => <Forecast key={key} index={index} forecasts={this.state.forecasts} icons={this.state.icons} />)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
