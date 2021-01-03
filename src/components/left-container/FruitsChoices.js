import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkboxChange } from '../../actions/config';
import $ from 'jquery';
import H3Component from '../H3Component';
import fruits from '../../constants/fruits.json';

class FruitsChoices extends Component {

    componentDidMount() {
        window.$ = $;

        const { dispatch } = this.props;

        $('input[name="fruit"]').on('change', function(e) {
            if($('input[name="fruit"]:checked').length > 3) {
                this.checked = false;
            }

            dispatch(checkboxChange(e.target.name, e.target.value, e.target.checked));
        });
    }

    listFruits() {
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

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}

export default connect(mapDispatchToProps)(FruitsChoices);