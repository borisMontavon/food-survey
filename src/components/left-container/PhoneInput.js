import React, { Component } from 'react';
import { connect } from 'react-redux';
import { valueChange } from '../../actions/config';

class PhoneInput extends Component {

    handleChange(e) {
        const { dispatch } = this.props;

        dispatch(valueChange(e.target.id, e.target.value));
    }

    render() {
        
        return (
            <div>
                <label>
                    Phone number
                    <input className="text-input" type="tel" id="telNum" name="telNum" onChange={(e) => this.handleChange(e)} />
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

export default connect(mapDispatchToProps)(PhoneInput);