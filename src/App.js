import React, { Component } from 'react';
import './App.css';

import PhaserContainer from './components/PhaserContainer';
import Captions from './components/Captions';
import Content from './pscripts/Content';


const contentData = Content[0];

// Information about this piece
const {meta} = contentData;
// The actual text content of the piece
const {text} = contentData;
// Various items pertinent to rendering of the piece
const {pallette, canvasPixelDimension, smallImg, largeImg, jitter, motifPrefix, motifPattern, motifRotation} = contentData.rendering;
// More rendering bits, specific to the motif elements
const motifData = {prefix:motifPrefix, pattern:motifPattern, rotation:motifRotation};
// Timing bits
const {shortPause, longPause, transitionTime} = contentData.timing;

class App extends Component {

  render() {

    return (

      <div className='App'>

        <PhaserContainer 
          canvasPixelDimension={canvasPixelDimension}
          content={text}
          pallette={pallette}
          smallImg={smallImg}
          largeImg={largeImg}
          jitter={jitter}
          motifData={motifData}
          shortPause={shortPause}
          longPause={longPause}
          transitionTime={transitionTime}
          />
        
        <div className='ccbox'>
          <Captions cwidth={700}></Captions>
        </div>

      </div>

    );
  }
}

export default App;