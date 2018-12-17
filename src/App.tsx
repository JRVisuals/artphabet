import * as React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CanvasContainer from './components/CanvasContainer';
import Captions from './components/Captions';

import IContentBlock from "./content/types";

import Content from './content/StayGold2018';
import Menu from './components/Menu';
import LiveRead from './components/LiveRead'

import './App.css';


const initialState = {
  showCaps: false,
}
type State = Readonly<typeof initialState>

class App extends React.Component {

  constructor(props: any) {
    super(props)

    this.state = initialState;
  }

  render() {

    return (
      <Router>
        <div className='App'>
          <Route
            path="/:id/:captions"
            component={CanvasContent}
          />
          <Route
            exact path="/" 
            render={() => <Menu content={Content} />}
          />
          <Route
            exact path="/live"
            component={LiveReadContent}
          />
        </div>
      </Router>

    );
  };
};



// @TODO match probably shouldn't be "any"
// @TODO this could be an HOC <WithContentHOC>
const CanvasContent = ({ match }: any) => {

  console.log(match);

  if (!(match.params.id in Content)) {
    return (
      <div>
        <h3>Content Not Found</h3>
        <p style={{color:'red'}}>{match.params.id}</p>
      </div>
    )
  }

  const showCaptions: boolean = match.params.captions as boolean;
  const contentData: IContentBlock = Content[match.params.id];


  // Information about this piece
  const {meta} = contentData;
  // The actual text content of the piece
  const {text} = contentData;
  // Various items pertinent to rendering of the piece
  const {pallette, canvasPixelDimension, smallImg, largeImg, jitter, motifPrefix, motifPattern, motifRotation, motifSize} = contentData.rendering;
  // More rendering bits, specific to the motif elements
  const motifData = {prefix: motifPrefix, pattern: motifPattern, rotation: motifRotation, size: motifSize};
  // Timing bits
  const {shortPause, longPause, transitionTime} = contentData.timing;

  return(
    <div>

      <CanvasContainer 
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
              showCaptions={showCaptions}
              />
    
    </div>
  )
  
}

const LiveReadContent = ({ match }: any) => {

  console.log(match);

  /*
  if (!(match.params.id in Content)) {
    return (
      <div>
        <h3>Content Not Found</h3>
        <p style={{color:'red'}}>{match.params.id}</p>
      </div>
    )
  }
  */

  const contentData: IContentBlock = Content.liveRead;


  // Information about this piece
  const {meta} = contentData;
  // The actual text content of the piece
  const {text} = contentData;
  // Various items pertinent to rendering of the piece
  const {pallette, canvasPixelDimension, smallImg, largeImg, jitter, motifPrefix, motifPattern, motifRotation, motifSize} = contentData.rendering;
  // More rendering bits, specific to the motif elements
  const motifData = {prefix: motifPrefix, pattern: motifPattern, rotation: motifRotation, size: motifSize};
  // Timing bits
  const {shortPause, longPause, transitionTime} = contentData.timing;

  return(
    <div>

      <CanvasContainer 
              canvasPixelDimension={canvasPixelDimension}
              content=""
              pallette={pallette}
              smallImg={smallImg}
              largeImg={largeImg}
              jitter={jitter}
              motifData={motifData}
              shortPause={shortPause}
              longPause={longPause}
              transitionTime={transitionTime}
              showCaptions={false}
              />

      <LiveRead showCaptions={true}/>
    
    </div>
  )
  
}

export default App;
