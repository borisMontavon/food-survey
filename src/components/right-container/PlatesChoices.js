import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlatesChoices extends Component {
    
    listPlates() {
        const { plates } = this.props;

        return plates.map((item) =>
            <p>{item}</p>
        );
    }

    render() {
        const list = this.listPlates();

        return (
            <>
                <p><strong>Plates choices :</strong></p>
                { list }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { plates } = state.checkboxValuesReducer;

    return { plates };
}

export default connect(mapStateToProps)(PlatesChoices);