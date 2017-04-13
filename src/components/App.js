import React from 'react';
import 'normalize.css';

import Forecast from './Forecast';
import Current from './Current';

import { fetchData } from '../ApiUtils';
import icons from '../icons';
import { convertIconID } from '../helpers';
import '../css/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: null,
      currentTemp: null,
      currentCondition: null,
      currentID: null,
      forecast: null,
      icons: icons,
    };
  }
  componentWillMount() {
    fetchData().then((data) => {
      this.setState({
        city: data.ipData.city,
        currentTemp: Math.floor(data.weatherData.main.temp),
        currentCondition: data.weatherData.weather[0].main,
        currentID: data.weatherData.weather[0].id,
        forecasts: data.forecastData.list
      })
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
        <div className="current-wrap">
          <Current city={this.state.city} currentTemp={this.state.currentTemp} currentCondition={this.state.currentCondition} currentIconKey={convertIconID(this.state.currentID)} icons={this.state.icons}/>
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
