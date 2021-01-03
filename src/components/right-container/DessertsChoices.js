import React, { Component } from 'react';
import { connect } from 'react-redux';

class DessertsChoices extends Component {
    
    listDesserts() {
        const { desserts } = this.props;

        return desserts.map((item) =>
            <p>{item}</p>
        );
    }
    
    render() {
        const list = this.listDesserts();

        return (
            <>
                <p><strong>Desserts choices :</strong></p>
                { list }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { desserts } = state.checkboxValuesReducer;

    return { desserts };
}

export default connect(mapStateToProps)(DessertsChoices);