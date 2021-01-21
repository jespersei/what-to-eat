import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import './App.css';
import ButtonAppBar from './components/app_bar/ButtonAppBar';
import ImageCard from './components/image_card/ImageCard';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ButtonAppBar></ButtonAppBar>
        <ImageCard></ImageCard>
      </div>
    )
  }
}

export default App;