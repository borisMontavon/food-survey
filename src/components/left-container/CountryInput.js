import React, { Component } from 'react';
import countries from '../../constants/countries.json';

class CountryInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: 75
    }
  }

  dropdownChanged(e) {
    this.setState({selectedId: e.target.value});
  }
    
  listCountries() {

    return countries.map((item) => 
        <option key={item.id} value={item.code}>{item.value}</option>
    );
  }
  
  render() {
    const list = this.listCountries();

    return (
      <div>
          <label>
              Country
              <select className="text-input" id="country" name="country" value={this.selectedId} defaultValue={''} 
              onChange={this.dropdownChanged.bind(this)} required>
                  <option value='' disabled >Select your country</option>
                  { list }
              </select>
          </label>
      </div>
    )
  }
}

export default CountryInput;