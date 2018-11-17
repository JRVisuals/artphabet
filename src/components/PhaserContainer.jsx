import React from "react";
import PropTypes from 'prop-types';
import Phaser from "phaser";

import MainScene from "../pscripts/MainScene"


let config = {
    parent: 'phaser-container',
    type: Phaser.AUTO,
    width: 0,
    height: 0,
    transparent: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: MainScene,

};

export default class PhaserContainer extends React.Component {


    componentDidMount(){

        const {canvasPixelDimension, content, pallette, smallImg, largeImg, jitter, motifData} = this.props;

        config.width = canvasPixelDimension.width;
        config.height = canvasPixelDimension.height;
        this.game = new Phaser.Game(config);
        this.game.settings = {content, pallette, canvasPixelDimension, smallImg, largeImg, jitter, motifData};
    }
    
    render(){
        return (
            <div className="phaserContainer" id="phaser-container">
            </div>
        );
    }
    
}