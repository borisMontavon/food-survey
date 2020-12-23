import React, { Component } from 'react';

class H3Component extends Component {
    render() {
        const { h3Class, h3Text, clueText } = this.props;

        return (
            <>
                <h3 className={h3Class}>{h3Text}<span className="clue">{clueText}</span></h3>
            </>
        )
    }
}

export default H3Component;