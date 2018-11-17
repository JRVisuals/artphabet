import React from 'react';
import PropTypes from 'prop-types';

import Letter from './Letter';

const propTypes = {};

const defaultProps = {};

export default class Painting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getLetterElement = (letter, idx) => {

        const charCode = letter.charCodeAt();
        const letterUpper = letter.toUpperCase();
        const charCodeUpper = letterUpper.charCodeAt();

        const isUpper = charCode<=97 && charCode!==32;
        
        const letterElement = <Letter  key={idx} index={idx} isUpper={isUpper} letter={letterUpper} char={charCodeUpper} /> ;
        return letterElement;

    }

    convertToImages = (theString) => {
        console.log(theString);
        const letters = theString.split('');
        const images = letters.map( 
                (letter, idx) => this.getLetterElement(letter, idx)
            )
        return images;
    }

    render() {

        
        const paintingImages = this.convertToImages(this.props.children);
    
        return (
            <div className="painting-container">
        
                {paintingImages}
                
            </div>
        );
    }
}

 Painting.propTypes = propTypes;
 Painting.defaultProps = defaultProps;