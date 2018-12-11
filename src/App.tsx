import * as React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CanvasContainer from './components/CanvasContainer';
import Captions from './components/Captions';

import IContentBlock from "./content/types";

import Content from './content/StayGold2018';

import './App.css';

class App extends React.Component {

  render() {

    return (
      <Router>
        <div className='App'>
          <Route path="/:id" component={CanvasContent}/>
          <Route exact path="/" component={Menu}/>
        </div>
      </Router>

    );
  };
};


const Menu = () => {
    
  const Listing = Object.keys(Content).map( 
    (contentItem, idx) => {
      return(
        <div>
          <p>
          <strong key={idx}>
            {idx+1}. <Link to={`/${contentItem}`}> {Content[contentItem].meta.title}</Link>
          </strong>
            <br/><span>by {Content[contentItem].meta.author}</span>
            <br/><span>Pallette source <em>{Content[contentItem].meta.pallette}</em> by {Content[contentItem].meta.artist}</span>
          </p>
        </div>
      )
    }
  )

  return(
    <div>
      <h2>Golden Words</h2>
      <h3>A Synesthetic Interpretation of the Dream Journals of Charles E. Burchfield</h3>
      {Listing}
      <hr/>
      Show Captions: <input id="captionsCheckbox" type="checkbox" value="captionsOn"/>
    </div>
  )

};


// @TODO match probably shouldn't be "any"
const CanvasContent = ({ match }: any) => {

  if (!(match.params.id in Content)) {
    return (
      <div>
        <h3>Content Not Found</h3>
        <p style={{color:'red'}}>{match.params.id}</p>
      </div>
    )
  }

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

  const showCaptions = true;

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

//<Captions cwidth={700} showCaptions={true}/>

export default App;

