import * as React from 'react';
import * as Phaser from 'phaser';

import ICanvasSettings from './types';
import MainScene from '../../phaserScenes/MainScene';

import Captions from '../Captions';

import './styles.css';


const initialState = {
    caption: 'Caption Testing Via State',
}
type State = Readonly<typeof initialState>


export default class CanvasContainer extends React.Component< ICanvasSettings, object> {

    readonly state: State = initialState;
    private capMaxChar:number = 88;
    private capCurrentChar:number = 0;
    private captionString: string = '';

    constructor(props: ICanvasSettings) {
        super(props)
    
        this.state = initialState;
        this.setCaption = this.setCaption.bind(this);
      }



    setCaption  (str:String){

        if(str==="^") {
            this.captionString="";
            str="";
            this.capCurrentChar = 0;
        }

        this.captionString += str;
        if(this.capCurrentChar>=this.capMaxChar){
            const trimFirst = this.captionString.substring(1);
            this.captionString = trimFirst;
           // this.capCurrentChar = 0;
        }else{
            this.capCurrentChar++;
        }


        this.setState((prevState, props) => {
            return { caption: this.captionString }
        });
    }

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
            showCaptions,
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
            transitionTime,
            showCaptions,
            setCaptionHandler: this.setCaption,
        }

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
        
        const cwidth = 1000;
        const caption = this.state.caption;

        console.log(`this.props.showCaptions: ${this.props.showCaptions}`)
        const captionBlock = this.props.showCaptions == true ? <Captions cwidth={cwidth} capText={this.state.caption}/> : <div/>;

        return (

            <div>
                <div className="spacer"/>
                <div className="phaserContainer" id="phaser-container"/>
                {captionBlock}
            </div>
        
        );
    }
    
}