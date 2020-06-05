import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      components: [],
      image_regions: []
    }
  }

  onRegionChange(updated_region) {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div style={{ display: 'flex' }}>
          <div style={{ flexGrow: 1, flexShrink: 1, width: '50%' }}>
            <RegionHandler image={this.state.image} components={this.state.components} onRegionChange={} />
          </div>
          <div style={{ flexGrow: 1, flexShrink: 1, width: '50%', padding: 15 }}>
            
          </div>
        </div>
      </div>
    );
  }
}

const api_data = {
  blood_components: [
    {
      name: 'ESR',
      alternate: '',
      measurement_unit_list: [
        {label: 'mm in 1st hour', conversion_rate: 1}
      ]
    }
  ]
}

export default App;
