import React from 'react';
import { convertIconID, whatDayIsIt } from '../helpers';
import '../css/Forecast.css';

class Forecast extends React.Component {
  render() {
    return (
      <div className="day-wrap">
        <div className="day">
          <p>{whatDayIsIt((new Date().getDay() + (this.props.index + 1)) % 7)}</p>
        </div>
        <img className="forecast-icon" src={require(`../${this.props.icons[convertIconID(this.props.forecasts[this.props.index].weather[0].id)].image}`)} alt=""/>
        <div className="temp">
          <span className="high">
            {Math.floor(this.props.forecasts[this.props.index].temp.max)}&deg;
          </span>
          <span className="separator"> | </span>
          <span className="low">
            {Math.floor(this.props.forecasts[this.props.index].temp.min)}&deg;
          </span>
        </div>
      </div>
    )
  }
}

export default Forecast;
