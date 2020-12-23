import React, { Component } from 'react';
import $ from 'jquery';
import PersonalData from'./PersonalData';
import PlatesChoices from './PlatesChoices';
import DessertsChoices from './DessertsChoices';
import DrinkChoices from './DrinksChoices';
import FruitsChoices from './FruitsChoices';
import TextareaInput from './TextareaInput';
import ButtonSubmit from './ButtonSubmit';

class LeftMain extends Component {
    componentDidMount() {
        window.$ = $;

        // $('input[name="fruits"]').on('change', function(evt) {
        //     if($('input[name="fruits"]:checked').length > 3) {
        //         this.checked = false;
        //     }
        // });
	
        // $('input[name="foodPlate"]').on('change', function(evt) {
        //     if($('input[name="foodPlate"]:checked').length > 2) {
        //         this.checked = false;
        //     }
        // });
        
        // $('input[name="desserts"]').on('change', function(evt) {
        //     if($('input[name="desserts"]:checked').length > 2) {
        //         this.checked = false;
        //     }
        // });
    }
    
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