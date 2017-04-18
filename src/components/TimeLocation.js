import React from 'react';
import '../css/TimeLocation.css'


class TimeLocation extends React.Component {
  render() {
    return (
      <div className="time-location">
        <p className="time">{this.props.time}</p>
        <p className="current-location"><span className="locate">&#10148;</span>{this.props.city}</p>
      </div>
    )
  }
}

export default TimeLocation;
