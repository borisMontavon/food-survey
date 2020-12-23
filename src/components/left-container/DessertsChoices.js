import React, { Component } from 'react';
import $ from 'jquery';
import H3Component from '../H3Component';
import desserts from '../../constants/desserts.json';

class DessertsChoices extends Component {

    componentDidMount() {
        window.$ = $;

        $('input[name="dessert"]').on('change', function() {
            if($('input[name="dessert"]:checked').length > 2) {
                this.checked = false;
            }
        });
    }
    
    listDesserts() {

        return desserts.map((item) => 
            <label className="si si-checkbox" key={item.id} >
                <input type="checkbox" id={item.id} name="dessert" value={item.value} />
                <span className="si-label">{item.value}</span>
            </label>
        );
    }

    render() {
        const list = this.listDesserts();

        return (
            <div className="form-section-checkbox-radio">
                <H3Component h3Text="Desserts" clueText="(2 choices max)" />
                { list }
            </div>
        )
    }
}

export default DessertsChoices;