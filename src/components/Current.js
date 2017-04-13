import React from 'react';
import '../css/Current.css';

class Current extends React.Component {
  render() {
    return (
      <div className="current-weather">
        <img className="current-icon" src={require(`../${this.props.icons[this.props.currentIconKey].image}`)} alt={this.props.currentCondition}/>
        <h1 className="current-temp">{this.props.currentTemp}&deg;</h1>
        <h2 className="current-condition">{this.props.currentCondition}</h2>
        <h3 className="current-location"><span className="locate">&#10148;</span>{this.props.city}</h3>
      </div>
    )
  }
}

export default Current;
