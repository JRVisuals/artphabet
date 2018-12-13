

import IContentBlock from './types';

const journalHillsContent: IContentBlock = {
        meta: {
            author: "Charles E. Burchfield",
            title: "Journals, Volume 31",
            type: "Journal",
            pallette: "Late Afternoon in the Hills",
            artist: "Charles E. Burchfield",
        },

        rendering: {
            canvasPixelDimension: {width: 1550, height: 800},
            smallImg: 125,
            largeImg: 200,
            jitter: 3,
            pallette: "burch_hills_blur",
            motifPrefix: "hills_",
            motifPattern: [0, 0, 0, 0, 1],
            motifRotation: 0,
            motifSize: 200,
        },

        timing: {
            shortPause: 150,
            longPause: 250,
            transitionTime: 1500,
        },

        text:
            "A dream – Working someplace to the north of here; \
            a channel like depression in the earth with a few woods; \
            a trolley line took us home at night, in my spare time I painted having brought my materials along; \
            one I sketched was the weird setting sun thru the doorway of a deserted house. \
            Towards evening when everyone seemed getting ready to go home, \
            I noticed in the hot yellow afterglow; bluebirds clinging to an old board fence; \
            they seemed asleep and I was able to pick them off and put them in my pocket. \
            Thunder was heard rumbling; in the gathering gloom I noticed a kite in the sky, \
            then more & more appeared. It seemed as if the boys flying them had lost control \
            of them [as] the strings sagged low over the earth. \
            I was able to gather them all together in my hand. \
            The kites were falling, I gave the string a jerk and stepped back a few paces; \
            they spring up in the air again radiating from my hand; \
            I was considering whether to tie all the strings together for a joke when the six o’clock car whistled.  \
            It seemed as if my duty was to see that all left the place on time, and that I myself, \
            the last to leave had to catch the car in the rain.  \
            Then I remembered that I had left my sketching material on the ground somewhere.  \
            The sketches I had removed from the portfolio and laid in some swamp grass, \
            the portfolio in some bushes.  \
            On finding the latter it was submerged in water a few inches; \
            anxious, I sought the sketches only to find them entirely covered with water.  \
            I lifted them carefully out; \
            the one of the sunset had been soaked and the paint partly transfigured & the back of another.  \
            By this time of course the car was gone & I had the prospects of waiting an hour; \
            but now I saw that a young man from town had his car with him. \
            [Though] I had never asked him, still I asked him to take me home with him. \
            He consented but was waiting for his mother-in-law to come.  \
            The dream broke off here –",
};

const poemStayGold: IContentBlock = {
    meta: {
        author: "Robert Frost",
        title: "Nothing Gold Can Stay",
        type: "Poem",
        pallette: "The Insect Chorus",
        artist: "Charles E. Burchfield",
    },

    rendering: {
        canvasPixelDimension: {width: 849, height: 800},
        smallImg: 250,
        largeImg: 500,
        jitter: 0,
        pallette: "burch_insect_blur",
        motifPrefix: "burch_",
        motifPattern: [4, 5, 6, 6, 6],
        motifRotation: .5,
        motifSize: 400,
    },

    timing: {
        shortPause: 150,
        longPause: 250,
        transitionTime: 1500,
    },

    text:
        "Nature's first green is gold, \
        Her hardest hue to hold. \
        Her early leaf's a flower; \
        But only so an hour. \
        Then leaf subsides to leaf. \
        So Eden sank to grief, \
        So dawn goes down to day. \
        Nothing gold can stay.",
};

const poemColemansBed: IContentBlock = {
    meta: {
        author: "David Whyte",
        title: "Coleman's Bed",
        type: "Poem",
        pallette: "The Insect Chorus",
        artist: "Charles E. Burchfield",
    },

    rendering: {
        canvasPixelDimension: { width: 1550, height: 750},
        smallImg: 150,
        largeImg: 300,
        jitter: 2,
        pallette: "burch_insect_blur",
        motifPrefix: "burch_",
        motifPattern: [0, 4, 1, 5, 3, 4, 5 ],
        motifRotation: .25,
        motifSize: 200,
    },

    timing: {
        shortPause: 150,
        longPause: 250,
        transitionTime: 1500,
    },

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
        will always remember.",
};

const poemPatronSaint: IContentBlock = {
    meta: {
        author: "Justin Karcher",
        title: "The Patron Saint of Kids Who Steal Other Kids’ Candy on Halloween",
        type: "Poem",
        pallette: "The Insect Chorus",
        artist: "Charles E. Burchfield",
    },

    rendering: {
        canvasPixelDimension: { width: 1550, height: 750},
        smallImg: 150,
        largeImg: 300,
        jitter: 2,
        pallette: "burch_insect_blur",
        motifPrefix: "burch_",
        motifPattern: [0, 4, 1, 5, 3, 4, 5 ],
        motifRotation: .25,
        motifSize: 200,
    },

    timing: {
        shortPause: 150,
        longPause: 250,
        transitionTime: 1500,
    },

    text:
        "Little monsters ^\
        or maybe kids wearing masks from Party City ^\
        running through the ruins of bitter cities ^\
        where sometimes there are resurgences, but they never last very long ^\
        ^\
        bitter cities \
        where strollers sit abandoned on the steps of art galleries \
        left behind by new moms \
        terrified of a world without vividness or sweetness \
        so they decide to act \
        plunging into hypnotizing still-life \
        never to be seen or heard from again \
        \
        on quiet nights \
        when you walk by the darkened or covered windows of art galleries \
        you can hear babies laughing \
        swatting at butterflies in impressionistic landscapes \
        or maybe moms are releasing their woes in expressionistic factories \
        if catharsis were a color, what would it be? \
        \
        these kids \
        they can’t wait for Halloween \
        the only day of the year \
        when the living dead shed their bitter skins \
        hang amphetamine lights from dirty windows \
        hand out insignificant candies to kids who feel like they have nothing \
        of course the kids want more, of course they’ll do anything to get more \
        of course they’ll beat up other kids for their sweetness \
        whole lives in plastic bags, whole lives that blow in the wind \
        of course these kids crave the comfort that kills teeth in the end \
        \
        eventually every kid has a bloody nose, maybe some bruised bones \
        eventually moonlit licorice falls from the night sky like electric ropes \
        these kids \
        they rip off their masks and climb up to another world \
        where they hang out with saints holding babies \
        and there are lots of butterflies flying around",
};


// Drop content blocks into a content object for export
const  Content = {

    journal_hills: journalHillsContent,

    poem_staygold: poemStayGold,

    poem_colemansbed: poemColemansBed,

    poem_patronsaint: poemPatronSaint,

};

export default Content;
