import React, { Component } from 'react'

class Heading extends Component {
    render() {
        
        return (
            <header>
                <h1>Food conoisseur</h1>
                <div className="icon">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
            </header>
        )
    }
}

export default Heading;