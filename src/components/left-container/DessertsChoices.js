import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkboxChange } from '../../actions/config';
import $ from 'jquery';
import H3Component from '../H3Component';
import desserts from '../../constants/desserts.json';

class DessertsChoices extends Component {

    componentDidMount() {
        window.$ = $;

        const { dispatch } = this.props;

        $('input[name="dessert"]').on('change', function(e) {
            if($('input[name="dessert"]:checked').length > 2) {
                this.checked = false;
            }

            dispatch(checkboxChange(e.target.name, e.target.value, e.target.checked));
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

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}

export default connect(mapDispatchToProps)(DessertsChoices);