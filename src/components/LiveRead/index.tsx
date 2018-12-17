import * as React from 'react';
import SpeechToText from 'speech-to-text';

import * as Phaser from 'phaser';

import ILiveReadSettings from './types';

import MainScene from '../../phaserScenes/MainScene';

import Captions from '../Captions';

const initialState = {
        error: '',
        interimText: '',
        finalisedText: [],
        listening: false,
        caption: '',
}
type State = Readonly<typeof initialState>


class LiveRead extends React.Component < ILiveReadSettings, object> {

    readonly state: State = initialState;
    private listener: any;
    
    constructor(props: any) {
        super(props)
        this.state = initialState;
      }

  componentDidMount() {
    const onAnythingSaid = (text:string) => {
      this.setState({ interimText: text });
    };

    const onEndEvent = () => {
      if (this.state.listening) {
        this.startListening();
      }
    };

    const onFinalised = (text:string) => {
      this.setState({
        finalisedText: [text, ...this.state.finalisedText],
        interimText: '',
        caption: text,
      });
    };

    try {
      this.listener = new SpeechToText(onFinalised, onEndEvent, onAnythingSaid);
    } catch (error) {
      this.setState({ error: error.message });
    }

    this.startListening();

  }

  startListening = () => {
    try {
      this.listener.startListening();
      this.setState({ listening: true });
    } catch (err) {
      console.log('yoyoy');
      console.log(err);
    }
  };

  stopListening = () => {
    this.listener.stopListening();
    this.setState({ listening: false });
  };

  render() {
    const { error, interimText, finalisedText, listening, caption } = this.state;
    
    let content;
    let captionDisplay: string = '';

    if (error) {
        captionDisplay = error;
      content = (
        <div>{error}</div>
      );
    } else {
        captionDisplay = caption;
      content = (
        <div>
            <h4>
                Status: {listening ? 'listening...' : 'finished listening'}
            </h4>
          <p>
                Current utterances: {interimText}
        </p>
        
                    <p>Finalised Text</p>
                  <ul>
                  {finalisedText.map((str, index) => {
                    return (
                      <li key={index}>{str}</li>
                    );
                  })}
                  </ul>
          </div>
      );
    }

    const cwidth = 1400;

    const captionBlock = this.props.showCaptions == true ?  <Captions cwidth={cwidth} capText={captionDisplay}/>: <div/>;

    return (
        <div>
            {captionBlock}
        </div>
    );
  }
}

export default LiveRead;