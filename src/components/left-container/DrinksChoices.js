import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkboxChange } from '../../actions/config';
import H3Component from '../H3Component';
import drinks from '../../constants/drinks.json';

class DrinksChoices extends Component {

    handleChange(e) {
        const { dispatch } = this.props;

        dispatch(checkboxChange(e.target.name, e.target.value, e.target.checked));
    }

    listDrinks() {
        return drinks.map((item) =>
            <label className="si si-radio" key={item.id} >
                <input type="radio" id={item.id} name="drink" value={item.value} onChange={(e) => this.handleChange(e)} />
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

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}

export default connect(mapDispatchToProps)(DrinksChoices);