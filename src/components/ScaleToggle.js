import React from 'react';
import '../css/ScaleToggle.css';

class ScaleToggle extends React.Component {

  toggleTemp() {
    this.setState({
      isFahrenheit: this.state.isFahrenheit ? false : true
    });
  }

  render() {
    return (
      <label id="toggle">
        <input type="checkbox" checked={this.props.isFahrenheit ? false : true} onClick={this.props.toggleTemp} />
        <span id="custom">
          <span id="circle"></span>
        </span>
      </label>
    )
  }
}

export default ScaleToggle;
