import React, { Component } from 'react';
import { connect } from 'react-redux';

class FruitsChoices extends Component {
    
    listFruits() {
        const { fruits } = this.props;

        return fruits.map((item) => 
            <p>{item}</p>
        );
    }
    
    render() {
        const list = this.listFruits();

        return (
            <>
                <p><strong>Fruits choices :</strong></p>
                { list } 
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { fruits } = state.checkboxValuesReducer;

    return { fruits };
}

export default connect(mapStateToProps)(FruitsChoices);