import React from 'react';
import { fetchData } from '../ApiUtils';
import '../css/App.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: ""
    };
  }
  componentDidMount() {
    fetchData().then((data) => {
      this.setState({city: data.ipData.city})
    });
  }

  render() {
    return (
      <div className="app-wrapper">
        <h1>{this.state.city}</h1>
      </div>
    );
  }
}

export default App;
