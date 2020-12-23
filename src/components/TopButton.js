import React, { Component } from 'react';
import $ from 'jquery';

class TopButton extends Component {
    componentDidMount() {
        window.$ = $;

        $(window).on('scroll', function() {
            const height = $(window).scrollTop();
                if (height > 200) {
                    $('#top-button').addClass("fade");
                } else {
                    $('#top-button').removeClass("fade");
                }
        });
        
        $('#top-button').on('click', function(event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    }

    render() {
        
        return (
            <>
                <button id="top-button" title="Back to top">
                    <i className="fas fa-chevron-up"></i>
                </button>
            </>
        )
    }
}

export default TopButton; 