import * as Phaser from 'phaser';

import * as Helpers from '../helpers/Helpers';

import ICanvasSettings from '../components/CanvasContainer/types';


export default class MainScene extends Phaser.Scene
{

    private settings: ICanvasSettings;
    private motifCurrentIndex: number= 0;

    private content: string= '';

    private charIndex: number= 0;
    private inProgress: boolean= true;
    private timeGap: number= 50;
    private lastTime: number= Date.now();
    private imgX: number= 0;
    private imgY: number= 0;
    private opacity:number = 1;
    private rotation:number= 0;
    
    // Layers in Order
    private consonantLayer: Phaser.GameObjects.Container;
    private vowelLayer: Phaser.GameObjects.Container;  
    private spaceLayer: Phaser.GameObjects.Container;     
    private motifBlendLayer: Phaser.GameObjects.Container;
    private motifLayer: Phaser.GameObjects.Container;
        
    // Stats - because why not?
    private vowelCount:number = 0;
    private consCount:number = 0;
    private upperVowelCount:number = 0;

    constructor (settings: ICanvasSettings)
    {
        super({ key: 'MainScene', active: true });
        this.settings = settings;
    }

    boot () {
        console.log("main boot");
    }

    preload () {
        console.log("main preload");

    
        this.motifCurrentIndex= 0;

        // create an array of the unique characters in this poem (use uppercase only)
        // @TODO can this be simplified using Set as with motifs below
        const uniqueCharacters = Helpers.getCharacterCodeArray(Helpers.uniqueCharacters(this.settings.content.toUpperCase()));

        this.load.path = `../images/${this.settings.pallette}/`;
        
        // load the color chits for each of the characters being used and key them on the upper case ascii code for later use
        // note: character image name example "65.png" (where 65 is the ascii code for the cap of that letter)
        uniqueCharacters.map(
            (letter: number, idx: number) => {
                //console.log(letter);
                this.load.image({ key: letter.toString(), });
            }
        );
        
        // check motif pattern, and load necessary images
        // note: motif image name example "burch_0.png" (where "burch_" is motifData.prefix and "0" is coming from the motifData.pattern array)
        const { motifData } = this.settings;
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

        this.content = this.settings.content;

        // Layers in Order
        this.consonantLayer = this.add.container(0, 0);
        this.vowelLayer = this.add.container(0, 0);  
        this.spaceLayer = this.add.container(0, 0);     
        this.motifBlendLayer = this.add.container(0, 0);
        this.motifLayer = this.add.container(0, 0);

        // Layer Blend Modes
        this.consonantLayer.blendMode = Phaser.BlendModes.NORMAL;
        this.vowelLayer.blendMode = Phaser.BlendModes.NORMAL;
        this.spaceLayer.blendMode = Phaser.BlendModes.ADD;

        this.motifBlendLayer.blendMode = Phaser.BlendModes.ADD;
        this.motifLayer.blendMode = Phaser.BlendModes.NORMAL;

        // @TODO probably a better way to communicate w/ caption component - is context available from here?
      //  this.capElement.innerHTML='';

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


    paintLetter(ltr: string){

        // Conditionally update captions, why bother if they're not showing
        if (this.settings.showCaptions) this.updateCaption(ltr);

        // swap the return character for a space
        if(ltr==="^") ltr="-";

        // process the rest....
        
        const charCode = ltr.charCodeAt(0);
        const letterUpper = ltr.toUpperCase();
        const charCodeUpper = letterUpper.charCodeAt(0);

        const isUpper = charCode<=90 && charCode>=65;

        const { jitter } = this.settings;
        const roffX = (10*jitter) - Math.floor(Math.random()*(20*jitter));
        const roffY = (10*jitter) - Math.floor(Math.random()*(20*jitter));
        const thisLetter = this.add.image(this.imgX+roffX, this.imgY+roffY, charCodeUpper.toString()).setOrigin(0,0);
        
        const isVowel = Helpers.isVowel(ltr);
        const isPunct = Helpers.isPunctuation(ltr);

        this.rotation = 0; //reset rotation

        let motifItem: Phaser.GameObjects.Image | undefined; // formerly burchMark
        let letterOpacityEnd: number;
        
        const { motifData } = this.settings
        const {prefix, pattern, } = motifData;
        
        if(isPunct){

            // Sequential Motif Code
            const thisMotif = `${prefix}${pattern[this.motifCurrentIndex]}`;

            this.motifCurrentIndex++
            if(this.motifCurrentIndex > pattern.length-1) {
                this.motifCurrentIndex = 0;
            }
            
            //console.log(`thisMotif: ${thisMotif}`);

            // Common to Random and Sequential
            motifItem = this.add.image(this.imgX+roffX, this.imgY+roffY, thisMotif).setOrigin(0,0);
                        
            this.motifLayer.add(motifItem);
                
            this.rotation = (-1*motifData.rotation)+(Math.random()*(motifData.rotation*2));
            letterOpacityEnd = .75*this.opacity;
            this.motifBlendLayer.add(thisLetter);
            
        }else{
            if(charCode===32){
                letterOpacityEnd = .25*this.opacity;
                this.spaceLayer.add(thisLetter);
            }else{
                    
                if(isVowel){
                    letterOpacityEnd = .85*this.opacity;
                    this.vowelLayer.add(thisLetter);
                    this.vowelCount ++;
                }else{
                    letterOpacityEnd = .85*this.opacity;
                    this.consonantLayer.add(thisLetter);
                    this.consCount ++;
                } 
                
            }
        }

        let imgSize = isUpper ? this.settings.largeImg : this.settings.smallImg;
        
        if(isPunct) {
            imgSize = imgSize * 2;
        }
        

       // if(isUpper & isVowel) { imgSize = imgSize * 4; this.upperVowel++; }

        thisLetter.displayWidth = imgSize;
        thisLetter.displayHeight = imgSize;
        thisLetter.alpha = 0;
        thisLetter.blendMode = Phaser.BlendModes.NORMAL;
        
        if(motifItem){
            motifItem.alpha =0;
            motifItem.displayWidth = motifData.size;
            motifItem.displayHeight = motifData.size;
            motifItem.blendMode = Phaser.BlendModes.NORMAL;
        }

        this.add.tween({
            targets: [thisLetter],
            ease: 'Quad.easeOut',
            duration: this.settings.transitionTime,
            delay: 0,
            
            /*
            scaleX : {
                getStart: () => 0,
                getEnd: () => 1
            },
            */
            
            alpha: {
              getStart: () => 0,
              getEnd: () => letterOpacityEnd
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
            duration: this.settings.transitionTime,
            delay: 0,
            alpha:{
                getStart: ()=>0,
                getEnd: ()=>1-(letterOpacityEnd*1.75)},

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

        if(this.imgX + imgSize/2 >= this.settings.canvasPixelDimension.width) {
            this.imgX=0;
            this.imgY += imgSize/2;
        }

        if(this.imgY + imgSize/2  >= this.settings.canvasPixelDimension.height) {
            this.imgX=0; //smallImg*-.5;
            this.imgY=0; //smallImg*-.5;
            this.opacity *= .8;
        }

        this.timeGap = Helpers.isPunctuation(ltr)  ? this.settings.longPause : this.settings.shortPause;

        this.charIndex ++;

    }


    
    updateCaption(ltr: string) {
    
        this.settings.setCaptionHandler(ltr);
    }
}

