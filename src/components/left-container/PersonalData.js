import React, { Component } from 'react';
import $ from 'jquery';
import '../../../node_modules/jquery-mask-plugin/dist/jquery.mask';
import intlTelInput from 'intl-tel-input';
import H3Component from '../H3Component';
import CountryInput from './CountryInput';
import PhoneInput from './PhoneInput';
import inputs from '../../constants/inputs.json';

class PersonalData extends Component {
    componentDidMount() {
        window.$ = $;

        $('.js-dob').mask('00/00/0000');

        const input = document.querySelector("#telNum");
            intlTelInput(input, {
                // any initialisation options go here
            });
    }

    listInput() {

        return inputs.map((item) =>
            <label key={item.key} >
                {item.label}
                <input className={item.class} type={item.type} id={item.id} name={item.name} placeholder={item.placeholder} required />
            </label>
        );
    }

    render() {
        const list = this.listInput();
        
        return (
            <>
            <H3Component h3Class="firstH3" h3Text="Personal Informations" />
            { list }
            <PhoneInput />
            <CountryInput />
            </>
        )
    }
}

export default PersonalData;