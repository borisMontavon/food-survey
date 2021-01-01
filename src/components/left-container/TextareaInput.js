import React, { Component } from 'react';
import { connect } from 'react-redux';
import { valueChange } from '../../actions/config';
import H3Component from '../H3Component';

class TextareaInput extends Component {
    
    handleChange(e) {
        const { dispatch } = this.props;

        dispatch(valueChange(e.target.id, e.target.value));
    }
    
    render() {
        return (
            <div className="form-section-checkbox-radio">
                <H3Component h3Text="Your ultimate meal text section" />
                <textarea className="input-textarea" id="perfectMeal" name="perfectMeal" placeholder="..." onChange={(e) => this.handleChange(e)}></textarea>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}

export default connect(mapDispatchToProps)(TextareaInput);