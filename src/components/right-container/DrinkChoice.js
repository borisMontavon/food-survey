import React, { Component } from 'react';
import { connect } from 'react-redux';

class DrinkChoice extends Component {  
    render() {
        const { drinks } = this.props;

        return (
            <>
                <p><strong>Drink choice :</strong></p>
                <p>{drinks}</p>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { drinks } = state.checkboxValuesReducer;

    return { drinks };
}

export default connect(mapStateToProps)(DrinkChoice);