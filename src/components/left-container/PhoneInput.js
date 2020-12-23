import React, { Component } from 'react';

class PhoneInput extends Component {
    render() {
        
        return (
            <div>
                <label>
                    Phone number
                    <input className="text-input" type="tel" id="telNum" name="telNum" />
                </label>
            </div>
        )
    }
}

export default PhoneInput;