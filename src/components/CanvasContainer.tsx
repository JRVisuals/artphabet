import * as React from "react";

import * as Phaser from "phaser";

import MainScene from "../pscripts/MainScene";

export default class CanvasContainer extends React.Component< CanvasSettings, object> {

    componentDidMount() {

        const {
            canvasPixelDimension,
            content,
            pallette,
            smallImg,
            largeImg,
            jitter,
            motifData,
            shortPause,
            longPause,
            transitionTime,
        } = this.props;
        
        // could just be const settings = {...this.props}

        // Need to pass these through to the main scene so that the game object has access to them
        const settings = {canvasPixelDimension,
            content,
            pallette,
            smallImg,
            largeImg,
            jitter,
            motifData,
            shortPause,
            longPause,
            transitionTime,}

        const config = {
            height: 0,
            parent: "phaser-container",
            scene: new MainScene(settings),
            transparent: true,
            type: Phaser.CANVAS,
            width: 0,
        
            physics: {
                arcade: {
                    gravity: { y: 200 }
                },
                default: "arcade",
            },
        
        };

        config.width = settings.canvasPixelDimension.width;
        config.height = settings.canvasPixelDimension.height;

       const game = new Phaser.Game(config);

    }

    render(){
        return (
            <div className="phaserContainer" id="phaser-container"/>
        );
    }
    
}