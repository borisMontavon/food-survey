import React, { Component } from 'react';
import $ from 'jquery';
import H3Component from '../H3Component';
import drinks from '../../constants/drinks.json';

class DrinksChoices extends Component {

    componentDidMount() {
        window.$ = $;

        $('input[type="radio"]').on('change', function() {
            if($('input[type="radio"]:checked').length > 1) {
                this.checked = false;
            }
        });
    }

    listDrinks() {
        
        return drinks.map((item) =>
            <label className="si si-radio" key={item.id} >
                <input type="radio" id={item.id} name="drink" value={item.value} />
                <span className="si-label">{item.value}</span>
            </label>
        );
    }

    render() {
        const list = this.listDrinks();

        return (
            <div className="form-section-checkbox-radio">
                <H3Component h3Text="Drinks" clueText="(1 choices max)" />
                { list }
            </div>
        )
    }
}

export default DrinksChoices;