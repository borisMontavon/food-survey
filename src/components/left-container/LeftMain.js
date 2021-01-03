import React, { Component } from 'react';
import PersonalData from'./PersonalData';
import PlatesChoices from './PlatesChoices';
import DessertsChoices from './DessertsChoices';
import DrinkChoices from './DrinksChoices';
import FruitsChoices from './FruitsChoices';
import TextareaInput from './TextareaInput';
import ButtonSubmit from './ButtonSubmit';

class LeftMain extends Component {
    render() {
        
        return (
            <section className="section-left">
                <form>
                    <PersonalData /> 
                    <hr />
                    <PlatesChoices />
                    <hr />
                    <DessertsChoices />
                    <hr />
                    <DrinkChoices />
                    <hr />
                    <FruitsChoices />
                    <hr />
                    <TextareaInput />
                    <ButtonSubmit />  
                </form>
            </section>
        )
    }
}

export default LeftMain;