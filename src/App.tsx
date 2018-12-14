import * as React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CanvasContainer from './components/CanvasContainer';
import Captions from './components/Captions';

import IContentBlock from "./content/types";

import Content from './content/StayGold2018';

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

  toggleCaptions = this.setState((prevState, props) => {
    return { showCaps: false }
  });

  render() {

    return (
      <Router>
        <div className='App'>
          <Route path="/:id/:captions" component={CanvasContent}/>
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
            {idx+1}. <Link to={`/${contentItem}/0`}> {Content[contentItem].meta.title}</Link>
          </strong>
          
            <br/><span>by {Content[contentItem].meta.author}</span>
            <br/><span>Pallette source <em>{Content[contentItem].meta.pallette}</em> by {Content[contentItem].meta.artist}</span>
            <br/><span className="small">(<Link to={`/${contentItem}/1`}>CAPTIONS</Link>)</span>
          </p>
          
        </div>
      )
    }
  )

  return(
    <div>
      <h2>Golden Words</h2>
      <h3>A Synesthetic Interpretation of the Dream Journals of Charles E. Burchfield<br/>...and other things.</h3>
        {Listing}
  
     
    </div>
  )
// Show Captions: <input id="captionsCheckbox" type="checkbox" value="captionsOn"/>
};


// @TODO match probably shouldn't be "any"
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

//<Captions cwidth={700} showCaptions={true}/>

export default App;

