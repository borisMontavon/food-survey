import React, { Component } from 'react';
import { connect } from 'react-redux';

class PersonalInfo extends Component {
    render() {
        const { fName, lName, dOfBirth, eMail, telNum, country } = this.props;

        return (
            <>
                <p><strong>Personal Informations :</strong></p>
                <p>First Name : {fName}</p>
                <p>Last Name : {lName}</p>
                <p>Date of Birth : {dOfBirth}</p>
                <p>Mail : {eMail}</p>
                <p>Phone number : {telNum}</p>
                <p>Country : {country}</p>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { fName, lName, dOfBirth, eMail, telNum, country } = state.inputValuesReducer;

    return { fName, lName, dOfBirth, eMail, telNum, country };
}

export default connect(mapStateToProps)(PersonalInfo);