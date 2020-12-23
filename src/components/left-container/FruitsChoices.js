import React, { Component } from 'react';
import $ from 'jquery';
import H3Component from '../H3Component';
import fruits from '../../constants/fruits.json';

class FruitsChoices extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.$ = $;

        $('input[name="fruit"]').on('change', function() {
            if($('input[name="fruit"]:checked').length > 3) {
                this.checked = false;
            }
        });
    }

    listFruits() {
        // const { dispatch } = this.props;
        return fruits.map((item) =>
            <label className="si si-checkbox" key={item.id} >
                <input type="checkbox" id={item.id} name="fruit" value={item.value} />
                <span className="si-label">{item.value}</span>
            </label>
        );
    }

    render() {
        const list = this.listFruits();

        return (
            <div className="form-section-checkbox-radio">
                <H3Component h3Text="Fruits" clueText="(3 choices max)" />
                { list }
            </div>
        )
    }
}

export default FruitsChoices;