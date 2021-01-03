import React, { Component } from 'react';
import H3Component from '../H3Component';
import PersonalInfo from './PersonalInfo';
import PlatesChoices from './PlatesChoices';
import DessertsChoices from './DessertsChoices';
import DrinkChoice from './DrinkChoice';
import FruitsChoices from './FruitsChoices';
import YourMessage from './YourMessage';

class RightMain extends Component {
    render() {

        return (
            <section className="section-right">
                <H3Component h3Text="Summary" />
                <PersonalInfo />
                <hr className="right_hr" />
                <PlatesChoices />
                <hr className="right_hr" />
                <DessertsChoices />
                <hr className="right_hr" />
                <DrinkChoice />
                <hr className="right_hr" />
                <FruitsChoices />
                <hr className="right_hr" />
                <YourMessage />
            </section>
        )
    }
}

export default RightMain;