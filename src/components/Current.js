import React from 'react';
import '../css/Current.css';

class Current extends React.Component {
  render() {
    const altImageCheck = (!this.props.isSun && this.props.currentIconKey === "clear") || (!this.props.isSun && this.props.currentIconKey === "fewClouds");
    return (
      <div className="current-weather">
        <p className="current-temp">
          {this.props.isFahrenheit ? this.props.currentTemp : this.props.currentTempCelcius}&deg;
        </p>
        <p className="current-condition">{this.props.currentCondition}</p>
        <img className="current-icon" src={altImageCheck ? require(`../${this.props.icons[this.props.currentIconKey].alt}`) : require(`../${this.props.icons[this.props.currentIconKey].image}`)} alt={this.props.currentCondition}/>
      </div>
    )
  }
}

export default Current;
