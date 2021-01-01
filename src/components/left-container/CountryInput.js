import React, { Component } from 'react';
import { connect } from 'react-redux';
import { valueChange } from '../../actions/config';
import countries from '../../constants/countries.json';

class CountryInput extends Component {
    
  handleChange(e) {
    const { dispatch } = this.props;

    dispatch(valueChange(e.target.id, e.target.value));
  }
  
  listCountries() {
    return countries.map((item) => 
      <option key={item.id} value={item.value}>{item.value}</option>
    );
  }
  
  render() {
    const list = this.listCountries();

    return (
      <div>
          <label>
              Country
              <select className="text-input" id="country" name="country" defaultValue={''} 
              onChange={(e) => this.handleChange(e)} required>
                  <option value='' disabled >Select your country</option>
                  { list }
              </select>
          </label>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}

export default connect(mapDispatchToProps)(CountryInput);