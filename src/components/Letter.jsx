import React from "react"
import PropTypes from 'prop-types';

const propTypes = {
    char: PropTypes.string,
    isUpper: PropTypes.boolean,
};

const defaultProps = {
    char: null,
    isUpper: false,
};

export default class Letter extends React.Component {

constructor(props) {
    super(props);
    this.state = {show:false};
}

  componentDidMount () {

    const charTime = 50;
    //const charTime = this.props.char === 32 ? 200 : 50;
    this.timeoutId = setTimeout(function () {
        this.setState({show: true});
    }.bind(this), charTime*this.props.index);
  } 

  render (){

    const {char, isUpper} = this.props;

    const currentTheme = 'burch_insect_chorus';

    const letterImage = `images/${currentTheme}/${char}.png`;
    const imageClass = isUpper ? "big" : "little";
    
    return (
        <div className="image-container">
            <img className = {this.state.show ? `${imageClass}-show` : `${imageClass}-hide`} alt={`letter-${char}`} src = {letterImage} />
        </div>    
    );
  }

}


Letter.propTypes = propTypes;
Letter.defaultProps = defaultProps;