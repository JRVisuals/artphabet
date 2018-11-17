import React, { Component } from 'react';
import './App.css';

import PhaserContainer from './components/PhaserContainer';
import Captions from './components/Captions';

let poems = [];
// @TODO Load these up from external data. Add UI to pick which one(s) to run and (optionally)loop, or to run all and loop.
// 0 Robert Frost, Nothing Gold Can Stay
poems.push( {
  canvasPixelDimension:{width:400, height:500},
  smallImg:100,
  largeImg:200,
  jitter:0,
  pallette: "burch_insect_blur",
  text:
"Nature's first green is gold, \
Her hardest hue to hold. \
Her early leaf's a flower; \
But only so an hour. \
Then leaf subsides to leaf. \
So Eden sank to grief, \
So dawn goes down to day. \
Nothing gold can stay.",            
  }
)

// 1 David Whyte, Coleman's Bed
poems.push( {
  canvasPixelDimension:{width:1400, height:750},
  smallImg:150,
  largeImg:300,
  jitter:1,
  pallette: "burch_insect_blur",
  text:
"Make a nesting now, a place to which \
the birds can come, think of Kevin's \
prayerful palm holding the blackbird's egg \
and be the one, looking out from this place \
who warms interior forms into light. \
Feel the way the cliff at your back \
gives shelter to your outward view \
and then bring in from those horizons \
all discordant elements that seek a home. \
\
Be taught now, among the trees and rocks, \
how the discarded is woven into shelter, \
learn the way things hidden and unspoken \
slowly proclaim their voice in the world. \
Find that far inward symmetry \
to all outward appearances, apprentice \
yourself to yourself, begin to welcome back \
all you sent away, be a new annunciation, \
make yourself a door through which \
to be hospitable, even to the stranger in you. \
\
See with every turning day, \
how each season makes a child \
of you again, wants you to become \
a seeker after rainfall and birdsong, \
watch now, how it weathers you \
to a testing in the tried and true, \
admonishes you with each falling leaf, \
to be courageous, to be something \
that has come through, to be the last thing \
you want to see before you leave the world. \
\
Above all, be alone with it all, \
a hiving off, a corner of silence \
amidst the noise, refuse to talk, \
even to yourself, and stay in this place \
until the current of the story \
is strong enough to float you out. \
\
Ghost then, to where others \
in this place have come before, \
under the hazel, by the ruined chapel, \
below the cave where Coleman slept, \
become the source that makes \
the river flow, and then the sea \
beyond. Live in this place \
as you were meant to and then, \
surprised by your abilities, \
become the ancestor of it all, \
the quiet, robust and blessed Saint \
that your future happiness \
will always remember."            
  }
)


const poem = poems[1];
const {text, pallette, canvasPixelDimension, smallImg, largeImg, jitter} = poem;

class App extends Component {
  render() {
    return (
      <div className='App'>

        <PhaserContainer 
          canvasPixelDimension={canvasPixelDimension}
          content={text}
          pallette={pallette}
          smallImg={smallImg}
          largeImg={largeImg}
          jitter={jitter}
          />
        
        <div className='ccbox'>
        <Captions cwidth={700}></Captions>
        </div>
      </div>
    );
  }
}

export default App;