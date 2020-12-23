// import React, { Component } from 'react';
// import countries from '../../constants/countries.json';

// class CountryInput extends Component {
    
//     listCountries() {

//         return countries.map((item) => 
//             <option key={item.id} value={item.code}>{item.value}</option>
//         );
//     }
    
//     render() {
//         const list = this.listCountries();

//         return (
//             <div>
//                 <label>
//                     Country
//                     <select className="text-input" id="country" name="country" defaultValue={{ value: "France" }} required>
//                         <option value selected disabled>Select your country</option>
//                         { list }
//                     </select>
//                 </label>
//             </div>
//         )
//     }
// }

// export default CountryInput;

import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

// const options = require('../../constants/options.json');

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

class CountryInput extends React.Component {
  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        styles={customStyles}
      />
    );
  }
}

export default CountryInput;