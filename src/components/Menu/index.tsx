import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

interface IProps {
    content: any,
};


export default class Captions extends React.Component < IProps, object> {

    render() {

        const Content = this.props.content;

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
  }
};
