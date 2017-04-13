import React from 'react';
import { convertIconID, whatDayIsIt } from '../helpers';
import '../css/Forecast.css';

class Forecast extends React.Component {
  render() {
    return (
      <div className="day-wrap">
        <div className="day">
          <h4>{whatDayIsIt((new Date().getDay() + (this.props.index + 1)) % 7)}</h4>
        </div>
        <div className="temp">
          <span className="high">
            {Math.floor(this.props.forecasts[this.props.index].temp.max)}&deg;
          </span>
          <span className="separator"> | </span>
          <span className="low">
            {Math.floor(this.props.forecasts[this.props.index].temp.min)}&deg;
          </span>
          <img className="forcast-icon" src={require(`../${this.props.icons[convertIconID(this.props.forecasts[this.props.index].weather[0].id)].image}`)} alt=""/>
        </div>
      </div>
    )
  }
}

export default Forecast;
