import React, { Component } from 'react';
import { connect } from 'react-redux';

class YourMessage extends Component {
    render() {
        const { perfectMeal } = this.props;

        return (
            <>
                <p><strong>Your message :</strong></p>
                <p>{perfectMeal}</p>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { perfectMeal } = state.inputValuesReducer;

    return { perfectMeal };
}

export default connect(mapStateToProps)(YourMessage);