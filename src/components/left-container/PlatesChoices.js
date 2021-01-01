import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkboxChange } from '../../actions/config';
import $ from 'jquery';
import H3Component from '../H3Component';
import plates from '../../constants/plates.json';

class PlatesChoices extends Component {
    
    componentDidMount() {
        window.$ = $;

        const { dispatch } = this.props;

        $('input[name="plate"]').on('change', function(e) {
            if($('input[name="plate"]:checked').length > 2) {
                this.checked = false;
            }

            dispatch(checkboxChange(e.target.name, e.target.value, e.target.checked));
        });
    }

    listPlates() {
        return plates.map((item) =>
            <label className="si si-checkbox" key={item.id} >
                <input type="checkbox" id={item.id} name="plate" value={item.value} />
                <span className="si-label">{item.value}</span>
            </label>
        );
    }
    
    render() {
        const list = this.listPlates();
        
        return (
            <div className="form-section-checkbox-radio">
                <H3Component h3Text="Plates" clueText="(2 choices max)" />
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

export default connect(mapDispatchToProps)(PlatesChoices);