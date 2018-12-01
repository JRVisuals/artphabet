import Phaser from "phaser";

import * as Helpers from "./Helpers";


export default class MainScene extends Phaser.Scene
{

    constructor ()
    {
        super({ key: 'MainScene', active: true });
    }

    boot () {
        console.log("main boot");
    }

    preload () {
        console.log("main preload");

        const {content, pallette, canvasPixelDimension, smallImg, largeImg, jitter, motifData, shortPause, longPause, transitionTime} = this.game.settings;
        
        this.smallImg = smallImg;
        this.largeImg = largeImg;
        this.jitter = jitter;
        this.motifData = {...motifData, currentIndex:0}; // adding currentIndex here, could probably add it initially

        this.canvasPixelDimension = canvasPixelDimension;

        this.shortPause = shortPause;
        this.longPause = longPause;
        this.transitionTime = transitionTime;

        // create an array of the unique characters in this poem (use uppercase only)
        // @TODO can this be simplified using Set as with motifs below
        const uniqueCharacters = Helpers.getCharacterCodeArray(Helpers.uniqueCharacters(content.toUpperCase()));

        this.load.path = `images/${pallette}/`;
        
        // load the color chits for each of the characters being used and key them on the upper case ascii code for later use
        // note: character image name example "65.png" (where 65 is the ascii code for the cap of that letter)
        uniqueCharacters.map(
            (letter, idx) => {
                this.load.image({ key: letter.toString(), });
            }
        );
        
        // check motif pattern, and load necessary images
        // note: motif image name example "burch_0.png" (where "burch_" is motifData.prefix and "0" is coming from the motifData.pattern array)
        const uniqueMotifItems = [...new Set(motifData.pattern)];
        uniqueMotifItems.map(
            (item, idx) => {
                this.load.image({ key: `${motifData.prefix}${item}`, });
            }
        );

    }

    create () 
    {
        console.log("main create");

        this.content = this.game.settings.content;

        this.charIndex = 0;
        this.inProgress = true;
        this.timeGap = 50;
        this.lastTime = Date.now();
        this.imgX = 0;
        this.imgY = 0;
        this.opacity = 1;
        this.blendMode = 'NORMAL';
        this.rotation = 0;
        
        this.bottomLayer = this.add.container(0, 0);

        
        this.midLayer = this.add.container(0, 0);
        this.midTwoLayer = this.add.container(0, 0);
        this.topLayer = this.add.container(0, 0);
        this.motifLayer = this.add.container(0, 0);
        
        this.midLayer.blendMode = 'SUB';//SUB
        this.midTwoLayer.blendMode = 'NORMAL';

        this.topLayer.blendMode = 'ADD';//ADD

        this.motifLayer.blendMode = 'NORMAL';

        this.vowelCount = 0;
        this.consCount = 0;
        this.upperVowelCount = 0;

        // @TODO probably a better way to communicate w/ caption component - is context available from here?
        this.capElement = document.getElementById('captions');
        this.capElement.innerHTML='';
        this.capMaxChar = 44;
        this.capCurrentChar = 0;
    }

    update ()
    {
        if(this.inProgress){

            const ready = Date.now() > this.lastTime + this.timeGap;
            
            if(ready) {
                this.updateAndPaint();
                if(this.charIndex >= this.content.length) {
                    this.paintComplete();
                }
            }

        }
    }

    updateAndPaint (){
        this.lastTime = Date.now();
        const thisChar = this.content.charAt(this.charIndex);
        this.paintLetter(thisChar);
    }

    paintComplete(){
        this.inProgress = false;
        console.log(`vowels: ${this.vowelCount} consonants:${this.consCount} upperVowels:${this.upperVowelCount}`);
    }


    paintLetter(ltr){

        const charCode = ltr.charCodeAt();
        const letterUpper = ltr.toUpperCase();
        const charCodeUpper = letterUpper.charCodeAt();

        const isUpper = charCode<=90 && charCode>=65;

        const roffX = (10*this.jitter) - Math.floor(Math.random()*(20*this.jitter));
        const roffY = 0; //10 - Math.floor(Math.random()*20);
        const thisLetter = this.add.image(this.imgX+roffX, this.imgY+roffY, charCodeUpper.toString()).setOrigin(0,0);
        
        const isVowel = Helpers.isVowel(ltr);
        const isPunct = Helpers.isPunctuation(ltr);

        this.rotation = 0; //reset rotation

        let motifItem // formerly burchMark
        
        const {prefix, pattern} = this.motifData;
        
        if(isPunct){

            // initially was doing some random motifs specifically based on punctuation type
            // rather than that will want to try basing motifs on a strict pattern so that
            // there will be parity across renders of the same text

            // Randomized Motif Code

            /*
            // 46 = .  39 = '
            if(charCode===46 || charCode===39) { 
                const thisMotif = `${this.motifData.prefix}${Math.floor(Math.random()*4)}`;
            }
            // 44 = ,
            if(charCode===44) { 
                const thisMotif = `${this.motifData.prefix}${Math.floor(Math.random()*3)+3}`;
            }
            */

            // Sequential Motif Code
            const thisMotif = `${prefix}${pattern[this.motifData.currentIndex]}`;

            this.motifData.currentIndex++
            if(this.motifData.currentIndex > pattern.length-1) {
                this.motifData.currentIndex = 0;
            }
            
            console.log(`thisMotif: ${thisMotif}`);

            // Common to Random and Sequential
            motifItem = this.add.image(this.imgX+roffX, this.imgY+roffY, thisMotif).setOrigin(0,0);
                        
            this.motifLayer.add(motifItem);
                
            this.rotation = (-1*this.motifData.rotation)+(Math.random()*(this.motifData.rotation*2));
            thisLetter.opacityEnd = .5*this.opacity;
            this.topLayer.add(thisLetter);
            
        }else{
            if(charCode===32){
                thisLetter.opacityEnd = .75*this.opacity;
                this.midLayer.add(thisLetter);
            }else{

                //thisLetter.opacityEnd = .85*this.opacity;
                //this.bottomLayer.add(thisLetter);
                    
                if(isVowel){
                    thisLetter.opacityEnd = .85*this.opacity;
                    this.bottomLayer.add(thisLetter);
                    this.vowelCount ++;
                }else{
                    thisLetter.opacityEnd = .85*this.opacity;
                    this.bottomLayer.add(thisLetter);
                    this.consCount ++;
                } 
                
            }
        }

        let imgSize = isUpper ? this.largeImg : this.smallImg;
        
        if(isPunct) {
            imgSize = imgSize * 2;
        }

       // if(isUpper & isVowel) { imgSize = imgSize * 4; this.upperVowel++; }

        thisLetter.displayWidth = imgSize;
        thisLetter.displayHeight = imgSize;
        thisLetter.alpha = 0;
        thisLetter.blendMode = this.blendMode;
        
        if(motifItem){
            motifItem.alpha =0;
            motifItem.displayWidth = imgSize;
            motifItem.displayHeight = imgSize;
            motifItem.blendMode = this.blendMode;
        }

        this.add.tween({
            targets: [thisLetter],
            ease: 'Quad.easeOut',
            duration: this.transitionTime,
            delay: 0,
            
            /*
            scaleX : {
                getStart: () => 0,
                getEnd: () => 1
            },
            */
            
            alpha: {
              getStart: () => 0,
              getEnd: () => thisLetter.opacityEnd
            },
            /*
            rotation:{
                getStart: () => 0,
                getEnd: () => this.rotation
            },
            
            onComplete: () => {
              //handle completion
            }
            */
          });

          this.add.tween({
            targets: [motifItem],
            ease: 'Quad.easeOut',
            duration: this.transitionTime,
            delay: 0,
            alpha:{
                getStart: ()=>0,
                getEnd: ()=>1-(thisLetter.opacityEnd*1.75)},

            rotation:{
                getStart: () => 0,
                getEnd: () => this.rotation
            },
            /*
            onComplete: () => {
              //handle completion
            }
            */
          });

        this.imgX += imgSize/2;

        if(this.imgX + imgSize/2 >= this.canvasPixelDimension.width) {
            this.imgX=0;
            this.imgY += imgSize/2;
        }

        if(this.imgY >= this.canvasPixelDimension.height) {
            this.imgX=0; //smallImg*-.5;
            this.imgY=0; //smallImg*-.5;
            this.opacity *= .8;
            this.blendMode = 'NORMAL';
           // this.rotation *= 1.25;
        }

        this.timeGap = Helpers.isPunctuation(ltr)  ? this.longPause : this.shortPause;

        this.charIndex ++;

        this.updateCaption(ltr)

    }


    // @TODO Probably a better way to update the caption using component state?
    updateCaption(ltr) {
        //console.log(ltr)
        this.capElement.innerHTML += ltr;
       
        if(this.capCurrentChar>=this.capMaxChar){
            const trimFirst = this.capElement.innerHTML.substring(1);
            this.capElement.innerHTML = trimFirst;
           // this.capCurrentChar = 0;
        }else{
            this.capCurrentChar++;
        }
    }
}

