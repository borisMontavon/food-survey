import React, { Component } from 'react';
import Heading from './components/header/Heading';
import LeftMain from './components/left-container/LeftMain';
import RightMain from './components/right-container/RightMain';
import TopButton from './components/TopButton';
import './intlTelInput/build/css/intlTelInput.css';
import './css/main.css';

class App extends Component {
  render() {
    
    return (
      <>
        <Heading />
        <main>
          <LeftMain />
          <RightMain /> 
        </main>
        <TopButton />
      </>
    )
  }
}

export default App;