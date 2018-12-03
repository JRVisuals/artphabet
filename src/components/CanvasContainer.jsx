import React from "react";
import PropTypes from 'prop-types';
import Phaser from "phaser";

import MainScene from "../pscripts/MainScene"


let config = {
    height: 0,
    parent: 'phaser-container',
    scene: MainScene,
    transparent: true,
    type: Phaser.AUTO,
    width: 0,

    physics: {
        arcade: {
            gravity: { y: 200 }
        },
        default: 'arcade'
    },


};

export default class CanvasContainer extends React.Component {

    componentDidMount(){

        const {canvasPixelDimension, content, pallette, smallImg, largeImg, jitter, motifData, shortPause, longPause, transitionTime} = this.props;
        config.width = canvasPixelDimension.width;
        config.height = canvasPixelDimension.height;

        this.game = new Phaser.Game(config);
        this.game.settings = {content, pallette, canvasPixelDimension, smallImg, largeImg, jitter, motifData, shortPause, longPause, transitionTime};
    }
    
    render(){
        return (
            <div className="phaserContainer" id="phaser-container">
            </div>
        );
    }
    
}