import React, { Component } from 'react';
import H3Component from '../H3Component';

class TextareaInput extends Component {
    render() {

        return (
            <div className="form-section-checkbox-radio">
                <H3Component h3Text="Your ultimate meal text section" />
                <textarea className="input-textarea" name="perfect-meal" placeholder="..."></textarea>
            </div>
        )
    }
}

export default TextareaInput;