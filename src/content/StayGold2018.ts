

import IContentBlock from './types';

const liveReadTest: IContentBlock = {
    meta: {
        author: "Your Name Here",
        title: "Unknown",
        type: "Live Read",
        pallette: "The Insect Chorus (1917)",
        artist: "Charles E. Burchfield",
    },

    rendering: {
        canvasPixelDimension: { width: 1850, height: 1100},
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
        shortPause: 100,
        longPause: 350,
        transitionTime: 2000,
        
    },

    text:"",
};

const journal_volume31: IContentBlock = {
        meta: {
            author: "Charles E. Burchfield",
            title: "Journals, Volume 31",
            type: "Journal",
            pallette: "Late Afternoon in the Hills (1939-41)",
            artist: "Charles E. Burchfield",
        },

        rendering: {
            canvasPixelDimension: { width: 1850, height: 1100},
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
            longPause: 300,
            transitionTime: 10000,
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
            I was considering whether to tie all the strings together for a joke when the six o’clock car whistled. \
            It seemed as if my duty was to see that all left the place on time, and that I myself, \
            the last to leave had to catch the car in the rain. \
            Then I remembered that I had left my sketching material on the ground somewhere. \
            The sketches I had removed from the portfolio and laid in some swamp grass, \
            the portfolio in some bushes. \
            On finding the latter it was submerged in water a few inches; \
            anxious, I sought the sketches only to find them entirely covered with water. \
            I lifted them carefully out; \
            the one of the sunset had been soaked and the paint partly transfigured & the back of another. \
            By this time of course the car was gone & I had the prospects of waiting an hour; \
            but now I saw that a young man from town had his car with him. \
            [Though] I had never asked him, still I asked him to take me home with him. \
            He consented but was waiting for his mother-in-law to come. \
            The dream broke off here –",
};

const journal_volume38: IContentBlock = {
    meta: {
        author: "Charles E. Burchfield",
        title: "Journals, Volume 38",
        type: "Journal",
        pallette: "Insects at Twilight (1917)",
        artist: "Charles E. Burchfield",
    },

    rendering: {
        canvasPixelDimension: { width: 1850, height: 1100},
        smallImg: 120,
        largeImg: 250,
        jitter: 1,
        pallette: "butch_karcher_blur",
        motifPrefix: "karcher_",
        motifPattern: [3,4,1,3,4,2,],
        motifRotation: .25,
        motifSize: 300,
    },

    timing: {
        shortPause: 100,
        longPause: 300,
        transitionTime: 5000,
    },

    text:
        "Another dream last night – \
        a glimpse into that legendary world of mine which tantalizes me and fills me with sadness because I can never really experience it - unless perhaps through madness. \
        I was making a drawing of a peculiar ramshackle wooden structure that seemed like a market place; \
        I had been drawing all night and now as I was finishing, dawn was breaking. \
        I wish I could somehow describe, even for myself, the strange supernatural aspect of this dawn – it seemed as if it were some wonderful dawn experience of my earlier life when I was somehow freer and more innocent. \
        Human life commenced to stir – men were hurrying to work. I saw Paddy Lyons. \
         \
        The scene changes, \
        I am on that kind of a street that always hovers at the edges of towns, to the southeast. \
        I saw a wonderful old wreck of a house, and next to it a peculiar circular frame that turned on a central axis. \
        On it were hung long roller-towels, which it seemed had just been washed by some laundry girls who were laughing and working in a shed next to it. \
        Their method of drying clothes was to whirl them in the sunshine on this apparatus. \
        It was going now, the glaring white towels fluttering formed a striking contrast to the weather blackened old house. \
        Beyond the latter was a tall structure of brick, seemingly some sort of memorial building. \
        The hour was almost noon and just as the sun reached the meridian and commenced to pass it, \
        one part of the architecture after another leaped suddenly out of the shadow in rapid succession, \
        and the result was one of bewildering beauty.  I watched it fascinated. \
        ",
};

const poemStayGold: IContentBlock = {
    meta: {
        author: "Robert Frost",
        title: "Nothing Gold Can Stay",
        type: "Poem",
        pallette: "The Insect Chorus (1917)",
        artist: "Charles E. Burchfield",
    },

    rendering: {
        canvasPixelDimension: {width: 900, height: 900},
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
        shortPause: 200,
        longPause: 500,
        transitionTime: 4000,
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
        pallette: "The Insect Chorus (1917)",
        artist: "Charles E. Burchfield",
    },

    rendering: {
        canvasPixelDimension: { width: 1850, height: 1100},
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
        shortPause: 100,
        longPause: 350,
        transitionTime: 2000,
        
    },

    text:
        "Make a nesting now, a place to which the birds can come, think of Kevin's prayerful palm holding the blackbird's egg and be the one, \
        looking out from this place who warms interior forms into light. \
        Feel the way the cliff at your back gives shelter to your outward view and then bring in from those horizons all discordant elements that seek a home. \
         \
         \
        Be taught now, \
        among the trees and rocks, \
        how the discarded is woven into shelter, \
        learn the way things hidden and unspoken slowly proclaim their voice in the world. \
        Find that far inward symmetry to all outward appearances, \
        apprentice yourself to yourself, \
        begin to welcome back all you sent away, \
        be a new annunciation, \
        make yourself a door through which to be hospitable, \
        even to the stranger in you. \
         \
        \
        See with every turning day, \
        how each season makes a child of you again, \
        wants you to become a seeker after rainfall and birdsong, \
        watch now, how it weathers you to a testing in the tried and true, \
        admonishes you with each falling leaf, \
        to be courageous, \
        to be something that has come through, \
        to be the last thing you want to see before you leave the world. \
         \
         \
        Above all, \
        be alone with it all, \
        a hiving off, \
        a corner of silence amidst the noise, refuse to talk, \
        even to yourself, \
        and stay in this place until the current of the story is strong enough to float you out. \
         \
         \
        Ghost then, \
        to where others in this place have come before, \
        under the hazel, \
        by the ruined chapel, \
        below the cave where Coleman slept, \
        become the source that makes the river flow, \
        and then the sea beyond. \
        Live in this place as you were meant to and then, \
        surprised by your abilities, \
        become the ancestor of it all, \
        the quiet, \
        robust and blessed Saint that your future happiness will always remember.",
};

const poemPatronSaint: IContentBlock = {
    meta: {
        author: "Justin Karcher",
        title: "The Patron Saint of Kids Who Steal Other Kids’ Candy on Halloween",
        type: "Poem",
        pallette: "Insects at Twilight (1917)",
        artist: "Charles E. Burchfield",
    },

    rendering: {
        canvasPixelDimension: { width: 1850, height: 1100},
        smallImg: 100,
        largeImg: 250,
        jitter: 5,
        pallette: "butch_karcher_blur",
        motifPrefix: "karcher_",
        motifPattern: [0, 3, 1, 4, 2, 3, 4],
        motifRotation: .25,
        motifSize: 200,
    },

    timing: {
        shortPause: 40,
        longPause: 40,
        transitionTime: 2000,
    },

    text:
        "Little monsters ^\
        or maybe kids wearing masks from Party City ^\
        running through the ruins of bitter cities ^\
        where sometimes there are resurgences, but they never last very long ^\
         ^\
        bitter cities ^\
        where strollers sit abandoned on the steps of art galleries ^\
        left behind by new moms ^\
        terrified of a world without vividness or sweetness ^\
        so they decide to act ^\
        plunging into hypnotizing still-life ^\
        never to be seen or heard from again ^\
        ^\
        on quiet nights ^\
        when you walk by the darkened or covered windows of art galleries ^\
        you can hear babies laughing ^\
        swatting at butterflies in impressionistic landscapes ^\
        or maybe moms are releasing their woes in expressionistic factories ^\
        if catharsis were a color, what would it be? ^\
        ^\
        these kids ^\
        they can’t wait for Halloween ^\
        the only day of the year ^\
        when the living dead shed their bitter skins ^\
        hang amphetamine lights from dirty windows ^\
        hand out insignificant candies to kids who feel like they have nothing ^\
        of course the kids want more, of course they’ll do anything to get more ^\
        of course they’ll beat up other kids for their sweetness ^\
        whole lives in plastic bags, whole lives that blow in the wind ^\
        of course these kids crave the comfort that kills teeth in the end ^\
        ^\
        eventually every kid has a bloody nose, maybe some bruised bones ^\
        eventually moonlit licorice falls from the night sky like electric ropes ^\
        these kids ^\
        they rip off their masks and climb up to another world ^\
        where they hang out with saints holding babies ^\
        and there are lots of butterflies flying around ^\
        ",
};


const poemHowl: IContentBlock = {
    meta: {
        author: "ALLEN GINSBERG",
        title: "HOWL",
        type: "Poem",
        pallette: "Insects at Twilight (1917)",
        artist: "Charles E. Burchfield",
    },

    rendering: {
        canvasPixelDimension: { width: 1300, height: 800},
        smallImg: 100,
        largeImg: 250,
        jitter: .5,
        pallette: "butch_karcher_blur",
        motifPrefix: "karcher_",
        motifPattern: [0, 3, 1, 4, 2, 3, 4],
        motifRotation: .25,
        motifSize: 200,
    },

    timing: {
        shortPause: 40,
        longPause: 40,
        transitionTime: 2000,
    },

    text:
        "I saw the best minds of my generation destroyed by madness, starving hysterical naked, \
        dragging themselves through the negro streets at dawn looking for an angry fix,\
        angelheaded hipsters burning for the ancient heavenly connection to the starry dynamo in the machinery of night,\
        who poverty and tatters and hollow-eyed and high sat up smoking in the supernatural darkness of cold-water flats floating across the tops of cities contemplating jazz,\
        who bared their brains to Heaven under the El and saw Mohammedan angels staggering on tenement roofs illuminated,\
        who passed through universities with radiant cool eyes hallucinating Arkansas and Blake-light tragedy among the scholars of war,\
        who were expelled from the academies for crazy & publishing obscene odes on the windows of the skull,\
        who cowered in unshaven rooms in underwear, burning their money in wastebaskets and listening to the Terror through the wall,\
        who got busted in their pubic beards returning through Laredo with a belt of marijuana for New York,\
        who ate fire in paint hotels or drank turpentine in Paradise Alley, death, or purgatoried their torsos night after night\
        with dreams, with drugs, with waking nightmares, alcohol and cock and endless balls,\
        incomparable blind streets of shuddering cloud and lightning in the mind leaping toward poles of Canada & Paterson, illuminating all the motionless world of Time between,\
        Peyote solidities of halls, backyard green tree cemetery dawns, wine drunkenness over the rooftops, storefront boroughs of teahead joyride neon blinking traffic light, sun and moon and tree vibrations in the roaring winter dusks of Brooklyn, ashcan rantings and kind king light of mind,\
        who chained themselves to subways for the endless ride from Battery to holy Bronx on benzedrine until the noise of wheels and children brought them down shuddering mouth-wracked and battered bleak of brain all drained of brilliance in the drear light of Zoo,\
        who sank all night in submarine light of Bickford’s floated out and sat through the stale beer afternoon in desolate Fugazzi’s, listening to the crack of doom on the hydrogen jukebox,\
        who talked continuously seventy hours from park to pad to bar to Bellevue to museum to the Brooklyn Bridge,\
        a lost battalion of platonic conversationalists jumping down the stoops off fire escapes off windowsills off Empire State out of the moon,\
        yacketayakking screaming vomiting whispering facts and memories and anecdotes and eyeball kicks and shocks of hospitals and jails and wars,\
        whole intellects disgorged in total recall for seven days and nights with brilliant eyes, meat for the Synagogue cast on the pavement,\
        who vanished into nowhere Zen New Jersey leaving a trail of ambiguous picture postcards of Atlantic City Hall,\
        suffering Eastern sweats and Tangerian bone-grindings and migraines of China under junk-withdrawal in Newark’s bleak furnished room,\
        who wandered around and around at midnight in the railroad yard wondering where to go, and went, leaving no broken hearts,\
        who lit cigarettes in boxcars boxcars boxcars racketing through snow toward lonesome farms in grandfather night,\
        who studied Plotinus Poe St. John of the Cross telepathy and bop kabbalah because the cosmos instinctively vibrated at their feet in Kansas,\
        who loned it through the streets of Idaho seeking visionary indian angels who were visionary indian angels,\
        who thought they were only mad when Baltimore gleamed in supernatural ecstasy,\
        who jumped in limousines with the Chinaman of Oklahoma on the impulse of winter midnight streetlight smalltown rain,\
        who lounged hungry and lonesome through Houston seeking jazz or sex or soup, and followed the brilliant Spaniard to converse about America and Eternity, a hopeless task, and so took ship to Africa,\
        who disappeared into the volcanoes of Mexico leaving behind nothing but the shadow of dungarees and the lava and ash of poetry scattered in fireplace Chicago,\
        who reappeared on the West Coast investigating the FBI in beards and shorts with big pacifist eyes sexy in their dark skin passing out incomprehensible leaflets,\
        who burned cigarette holes in their arms protesting the narcotic tobacco haze of Capitalism,\
        who distributed Supercommunist pamphlets in Union Square weeping and undressing while the sirens of Los Alamos wailed them down, and wailed down Wall, and the Staten Island ferry also wailed,\
        who broke down crying in white gymnasiums naked and trembling before the machinery of other skeletons,\
        who bit detectives in the neck and shrieked with delight in policecars for committing no crime but their own wild cooking pederasty and intoxication,\
        who howled on their knees in the subway and were dragged off the roof waving genitals and manuscripts,\
        who let themselves be fucked in the ass by saintly motorcyclists, and screamed with joy,\
        who blew and were blown by those human seraphim, the sailors, caresses of Atlantic and Caribbean love,\
        who balled in the morning in the evenings in rosegardens and the grass of public parks and cemeteries scattering their semen freely to whomever come who may,\
        who hiccuped endlessly trying to giggle but wound up with a sob behind a partition in a Turkish Bath when the blond & naked angel came to pierce them with a sword,\
        who lost their loveboys to the three old shrews of fate the one eyed shrew of the heterosexual dollar the one eyed shrew that winks out of the womb and the one eyed shrew that does nothing but sit on her ass and snip the intellectual golden threads of the craftsman’s loom,\
        who copulated ecstatic and insatiate with a bottle of beer a sweetheart a package of cigarettes a candle and fell off the bed, and continued along the floor and down the hall and ended fainting on the wall with a vision of ultimate cunt and come eluding the last gyzym of consciousness,\
        who sweetened the snatches of a million girls trembling in the sunset, and were red eyed in the morning but prepared to sweeten the snatch of the sunrise, flashing buttocks under barns and naked in the lake,\
        who went out whoring through Colorado in myriad stolen night-cars, N.C., secret hero of these poems, cocksman and Adonis of Denver—joy to the memory of his innumerable lays of girls in empty lots & diner backyards, moviehouses’ rickety rows, on mountaintops in caves or with gaunt waitresses in familiar roadside lonely petticoat upliftings & especially secret gas-station solipsisms of johns, & hometown alleys too,\
        who faded out in vast sordid movies, were shifted in dreams, woke on a sudden Manhattan, and picked themselves up out of basements hung-over with heartless Tokay and horrors of Third Avenue iron dreams & stumbled to unemployment offices,\
        who walked all night with their shoes full of blood on the snowbank docks waiting for a door in the East River to open to a room full of steam-heat and opium,\
        who created great suicidal dramas on the apartment cliff-banks of the Hudson under the wartime blue floodlight of the moon & their heads shall be crowned with laurel in oblivion,\
        who ate the lamb stew of the imagination or digested the crab at the muddy bottom of the rivers of Bowery,\
        who wept at the romance of the streets with their pushcarts full of onions and bad music,\
        who sat in boxes breathing in the darkness under the bridge, and rose up to build harpsichords in their lofts,\
        who coughed on the sixth floor of Harlem crowned with flame under the tubercular sky surrounded by orange crates of theology,\
        who scribbled all night rocking and rolling over lofty incantations which in the yellow morning were stanzas of gibberish,\
        who cooked rotten animals lung heart feet tail borsht & tortillas dreaming of the pure vegetable kingdom,\
        who plunged themselves under meat trucks looking for an egg,\
        who threw their watches off the roof to cast their ballot for Eternity outside of Time, & alarm clocks fell on their heads every day for the next decade,\
        who cut their wrists three times successively unsuccessfully, gave up and were forced to open antique stores where they thought they were growing old and cried,\
        who were burned alive in their innocent flannel suits on Madison Avenue amid blasts of leaden verse & the tanked-up clatter of the iron regiments of fashion & the nitroglycerine shrieks of the fairies of advertising & the mustard gas of sinister intelligent editors, or were run down by the drunken taxicabs of Absolute Reality,\
        who jumped off the Brooklyn Bridge this actually happened and walked away unknown and forgotten into the ghostly daze of Chinatown soup alleyways & firetrucks, not even one free beer,\
        who sang out of their windows in despair, fell out of the subway window, jumped in the filthy Passaic, leaped on negroes, cried all over the street, danced on broken wineglasses barefoot smashed phonograph records of nostalgic European 1930s German jazz finished the whiskey and threw up groaning into the bloody toilet, moans in their ears and the blast of colossal steamwhistles,\
        who barreled down the highways of the past journeying to each other’s hotrod-Golgotha jail-solitude watch or Birmingham jazz incarnation,\
        who drove crosscountry seventytwo hours to find out if I had a vision or you had a vision or he had a vision to find out Eternity,\
        who journeyed to Denver, who died in Denver, who came back to Denver & waited in vain, who watched over Denver & brooded & loned in Denver and finally went away to find out the Time, & now Denver is lonesome for her heroes,\
        who fell on their knees in hopeless cathedrals praying for each other’s salvation and light and breasts, until the soul illuminated its hair for a second,\
        who crashed through their minds in jail waiting for impossible criminals with golden heads and the charm of reality in their hearts who sang sweet blues to Alcatraz,\
        who retired to Mexico to cultivate a habit, or Rocky Mount to tender Buddha or Tangiers to boys or Southern Pacific to the black locomotive or Harvard to Narcissus to Woodlawn to the daisychain or grave,\
        who demanded sanity trials accusing the radio of hypnotism & were left with their insanity & their hands & a hung jury,\
        who threw potato salad at CCNY lecturers on Dadaism and subsequently presented themselves on the granite steps of the madhouse with shaven heads and harlequin speech of suicide, demanding instantaneous lobotomy,\
        and who were given instead the concrete void of insulin Metrazol electricity hydrotherapy psychotherapy occupational therapy pingpong & amnesia,\
        who in humorless protest overturned only one symbolic pingpong table, resting briefly in catatonia,\
        returning years later truly bald except for a wig of blood, and tears and fingers, to the visible madman doom of the wards of the madtowns of the East,\
        Pilgrim State’s Rockland’s and Greystone’s foetid halls, bickering with the echoes of the soul, rocking and rolling in the midnight solitude-bench dolmen-realms of love, dream of life a nightmare, bodies turned to stone as heavy as the moon,\
        with mother finally ******, and the last fantastic book flung out of the tenement window, and the last door closed at 4 A.M. and the last telephone slammed at the wall in reply and the last furnished room emptied down to the last piece of mental furniture, a yellow paper rose twisted on a wire hanger in the closet, and even that imaginary, nothing but a hopeful little bit of hallucination—\
        ah, Carl, while you are not safe I am not safe, and now you’re really in the total animal soup of time—\
        and who therefore ran through the icy streets obsessed with a sudden flash of the alchemy of the use of the ellipsis catalogue a variable measure and the vibrating plane,\
        who dreamt and made incarnate gaps in Time & Space through images juxtaposed, and trapped the archangel of the soul between 2 visual images and joined the elemental verbs and set the noun and dash of consciousness together jumping with sensation of Pater Omnipotens Aeterna Deus\
        to recreate the syntax and measure of poor human prose and stand before you speechless and intelligent and shaking with shame, rejected yet confessing out the soul to conform to the rhythm of thought in his naked and endless head,\
        the madman bum and angel beat in Time, unknown, yet putting down here what might be left to say in time come after death,\
        and rose reincarnate in the ghostly clothes of jazz in the goldhorn shadow of the band and blew the suffering of America’s naked mind for love into an eli eli lamma lamma sabacthani saxophone cry that shivered the cities down to the last radio\
        with the absolute heart of the poem of life butchered out of their own bodies good to eat a thousand years. ^\
        ",
};


// Drop content blocks into a content object for export
const  Content = {

    liveRead: liveReadTest,

    journal_hills: journal_volume31,

    journal_vol38: journal_volume38,

    poem_staygold: poemStayGold,

    poem_colemansbed: poemColemansBed,

    poem_patronsaint: poemPatronSaint,

    poem_howl: poemHowl,

};

export default Content;

