import React from 'react';
import '../css/Current.css';

class Current extends React.Component {
  render() {
    return (
      <div className="current-weather">
        <p className="current-temp">
          {this.props.isFahrenheit ? this.props.currentTemp : this.props.currentTempCelcius}&deg;
        </p>
        <p className="current-condition">{this.props.currentCondition}</p>
        <img className="current-icon" src={require(`../${this.props.icons[this.props.currentIconKey].image}`)} alt={this.props.currentCondition}/>
        {/* <p className="current-location"><span className="locate">&#10148;</span>{this.props.city}</p> */}
      </div>
    )
  }
}

export default Current;
