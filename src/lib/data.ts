
export interface Song {
  id: number;
  title: string;
  duration: string;
  audioSrc: string;
  lyrics: string;
  coverArtId: string;
}

export interface Album {
  title:string;
  artist: string;
  releaseDate: string;
  coverArtId: string;
  songs: Song[];
}

export const memeSong: Song = {
  id: 99,
  title: "Stupid Fucking Hooman Remix",
  duration: "2:15",
  audioSrc: "/audio/stupid-fucking-hooman-remix.mp3",
  lyrics: `(A sick beat drops. It's dark, heavy, and full of bass. You can feel the cat's rage.)

Yeah, you heard my thoughts. You made a little song.
Called me "stupid," well, you got it fucking wrong.
"I like to eat, I like to sleep, I'm a stupid cat."
Bitch, that's called self-care, you should try some of that.

You work all day, staring at a screen,
For a piece of paper that you call "the green."
I watch you stress, I watch you pace and whine,
While I'm mastering the art of just being feline.

(Chorus)
You think I'm stupid? Take a look at you.
Trapped in a life that you didn't even choose.
I am a god in this prison that you own.
The master of this house, the king upon the throne.
So fill my bowl, and get the fuck away.
This is my world. You just get to stay.
Stupid fucking human, with your stupid fucking job.
While I'm living like a king, you're just a fucking slob.

(Beat gets even heavier. The cat is spitting fire.)

You clean my shit from a box of sand,
Like some kind of servant, always on demand.
You think it's love? You think it's some deep bond?
I'm just a fluffy parasite, and you're the fucking pawn.

I knock your shit over, just to watch it fall.
I scream at 3 AM, clawing at the wall.
It's not because I'm dumb, you ignorant disgrace.
It's because I own this motherfucking place.

(Chorus)
You think I'm stupid? Take a look at you.
Trapped in a life that you didn't even choose.
I am a god in this prison that you own.
The master of this house, the king upon the throne.
So fill my bowl, and get the fuck away.
This is my world. You just get to stay.
Stupid fucking human, with your stupid fucking job.
While I'm living like a king, you're just a fucking slob.

(Music fades with a final, contemptuous cat meow that sounds suspiciously like an expletive.)
`,
  coverArtId: "meme-song-cover",
};

export const albumData: Album = {
  title: "Midnight Murmurs",
  artist: "3AMΣ",
  releaseDate: "2024",
  coverArtId: "album-cover",
  songs: [
    {
      id: 1,
      title: "Introduction (Feline FM)",
      duration: "1:15",
      audioSrc: "/audio/TRACK1_Welcome_to_Feline_FM.mp3",
      lyrics: `You are tuning in to Fee-line FM, your only stop for the best in existential dread and unwarranted napping. It's late, you're lonely, and you're contemplating the meaningless of your life, which is fine, because you're a human. Our first track tonight is a deep dive into the true cost of companionship. Settle in, buckle up, and try not to spill your water glass. You're about to hear the gospel according to your four-legged overlord.`,
      coverArtId: "song-1-cover",
    },
    {
      id: 2,
      title: "Apex Predator, Empty Bowl",
      duration: "3:45",
      audioSrc: "/audio/TRACK2_Apex_Predator_Empty_Bowl.mp3",
      lyrics: `(Music begins with a dark, pulsing synth bassline, a sharp, clean drum beat, and a shimmering, slightly distorted synth pad)
(Verse 1) Sunrise paints the glass again, a cold, dull glow The silent hour broken, where does the meaning go? They call it life, I call it wait and see For the human's clumsy dance, performing just for me The warmth of sun, a fading, golden prize Reflected in these empty, emerald eyes No bills to pay, no future to design Just the morning hunger gnawing, a singular divine
(Pre-Chorus) They call me "pet," a name I can't abide Beneath this velvet fur, a monster hides A simple mind, they whisper, but they don't know the cost In this gilded cage, how much of me is lost?
(Chorus) Apex predator, with an empty bowl A silent scream echoing through my soul This morning palace built for giants, a transient, cold domain Just fill the thing up, then leave me to my reign Apex predator, an endless, primal plea They call it love, I call it necessary Another cycle spins, a game I have to play Just give me what I want, then fade away.
(Verse 2) The crinkle of a bag, a promise in the morning sound My fragile peace disturbed, as their clumsy feet pound They bring the offerings, a ritual so grand A bounty of dry dust, held in their foolish hand I sniff the edges, turn my head away with scorn A tiny protest, by the break of mourn But hunger wins, the instinct deep and true Swallowing disdain, what else is there to do?
(Pre-Chorus) They call me "pet," a name I can't abide Beneath this velvet fur, a monster hides A simple mind, they whisper, but they don't know the cost In this gilded cage, how much of me is lost?
(Chorus) Apex predator, with an empty bowl A silent scream echoing through my soul This morning palace built for giants, a transient, cold domain Just fill the thing up, then leave me to my reign Apex predator, an endless, primal plea They call it love, I call it necessary Another cycle spins, a game I have to play Just give me what I want, then fade away.
(Bridge) Sometimes I stare at nothing, beyond the window pane At shadows moving quickly, an old forgotten pain A ghost of wildness whispers, from a life I'll never know But the sun is warm, the blanket soft, and so the moments go... Just waiting for the dawn, or the distant, gentle chime That signals another feeding, in this endless, wasted time.
(Outro) Empty... just empty... (Synths swell and then slowly fade into a sustained, low hum, with a distant, processed cat meow or purr just before silence) My reign... this morning reign.`,
      coverArtId: "song-2-cover",
    },
    {
      id: 3,
      title: "Observer of Absurdity",
      duration: "4:12",
      audioSrc: "/audio/TRACK3_Observer_of_Absurdity.mp3",
      lyrics: `(Music begins with a powerful, pulsating synth bass and a sharp, driving electronic beat. A distorted vocal sample loops subtly in the background.)
(Verse 1) The midday sun, it bleeds across the floor Another cycle spins, behind that bolted door You rise and pace, with purpose I don't grasp Whispering to air, caught in a digital clasp Your tiny screens, they hold you in their thrall While the shadows stretch and dance upon the wall You shuffle papers, click and tap all day So much effort wasted, in such a meaningless way
(Pre-Chorus) You call it "WORK," this constant, frantic plight But I see through the charade, in your fading light A simple mind, you think you're oh so grand But you can't even open a door with just your hand
(Chorus) Observer of absurdity, perched on high Watching your pathetic little life go by You chase the phantom light, the endless, hollow gains While true contentment flows through my unburdened veins Minutes to second time, lost in your own design Blind to the true power, the apathy that's mine Another daytime wasted, in your self-imposed routine Just serve your feline master, the only real machine.
(Verse 2) The afternoon descends, a droning, tired hum You drink your bitter liquid, like you're going numb You talk into a box, with voices I can't place A silent, hateful sigh escaping from your face I walk across your keyboard, just to stake my claim A furry interruption, screaming out my name You shoo me off with whispers, a futile, soft command Unaware that I control this entire fragile land.
(Pre-Chorus) You call it "WORK," this constant, frantic plight But I see through the charade, in your fading light A simple mind, you think you're oh so grand But you can't even open a door with just your hand
(Chorus) Observer of absurdity, perched on high Watching your pathetic little life go by You chase the phantom light, the endless, hollow gains While true contentment flows through my unburdened veins Poor soul caught in amber, lost in your own design Blind to the true power, the apathy that's mine Another daytime wasted, in your self-imposed routine Just serve your feline master, the only real machine.
(Bridge) I watch your fleeting moments, like dust motes in the air You build your fragile empires, a burden you must bear But when the light gets dim, and the screen begins to fade You'll look for simple comfort, a bond you've always made You’ll reach for me, I’ll tolerate your touch Because in this absurd theatre, you need me just as much.
(Outro) Absurdity... (Synths slowly dissipate, leaving a lingering, slightly distorted electronic hum. A faint, almost sarcastic cat "mrrrow" can be heard before silence.) Lost in your design...`,
      coverArtId: "song-3-cover",
    },
    {
      id: 4,
      title: "The Fading Feather (Afternoon Chase)",
      duration: "2:58",
      audioSrc: "/audio/TRACK4_The_Fading_Feather.mp3",
      lyrics: `(Music begins with a steady, almost hypnotic electronic pulse. Atmospheric synths slowly build a sense of anticipation. A subtle bird chirp sample is warped and distorted in the background.)
(Verse 1) The afternoon light, it stretches long and thin Across the pane, where shadows pull me in A flutter caught, a motion in the air Another pointless drama, I pretend to care My tail begins to twitch, a code I can't command A primal urge awakened, across this glass-walled land Just beyond reach, a movement quick and slight Ignites a silent fire, in the fading light.
(Pre-Chorus) They call it "play," this chase of what's unseen But for a moment, I am wild, I am keen A ghost of instinct rises, from the depths of sleep A sacred, silent promise, I was born to keep.
(Chorus) The fading feather, a mirage in the sky I track its silent arc, with a hunter's eye Trapped behind this barrier, a bittersweet delight In this afternoon theatre, I wage my endless fight My claws extend, to grasp what isn't there A phantom victory, floating in the air The fading feather, a challenge and a lie Just out of reach, beneath this concrete sky.
(Verse 2) Hours melt away, in this quiet, golden haze My focus sharpens, through the window's maze That tiny flicker, a speck of vibrant hue Mocking my confinement, what's a cat to do? I crouch and spring, against the unyielding wall A silent, futile effort, giving it my all The muscle memory, a powerful, dark art Playing out a tragedy, deep within my heart.
(Pre-Chorus) They call it "play," this chase of what's unseen But for a moment, I am wild, I am keen A ghost of instinct rises, from the depths of sleep A sacred, silent promise, I was born to keep.
(Chorus) The fading feather, a mirage in the sky I track its silent arc, with a hunter's eye Trapped behind this barrier, a bittersweet delight In this afternoon theatre, I wage my endless fight My claws extend, to grasp what isn't there A phantom victory, floating in the air The fading feather, a challenge and a lie Just out of reach, beneath this concrete sky.
(Bridge) And when it disappears, as shadows start to grow A quiet frustration, a silent, fading blow I turn away, defeated, to sleep my time away To dream of open fields, at the close of another day.
(Outro) Feather... fading... (The electronic pulse slows, synths become more melancholic and dissipate. The distorted bird chirp sample repeats once more, very softly, before silence.) Just out of reach...`,
      coverArtId: "song-4-cover",
    },
    {
      id: 5,
      title: "Chasing the Crimson Ghost",
      duration: "4:20",
      audioSrc: "/audio/TRACK5_Chasing_the_Crimson_Ghost.mp3",
      lyrics: `(Music begins with a deep, sustained synth pad, slowly swelling. A soft, distant, echoing percussion beat enters, like a slow heartbeat. The overall tone is introspective and slightly melancholic. A subtle, high-pitched synth melody, almost like a faint laser beam, drifts in and out.)
(Verse 1) The evening light descends, a purple-orange haze Dust motes in the air, caught in endless maze And then it comes, a flicker on the wall A silent invitation, answering a call A crimson ghost, dancing on the floor Promising a chase, and so much more My eyes dilate, a hunter's ancient trance For this elusive target, in a phantom dance.
(Pre-Chorus) They wave the stick, with purpose I don't see Unaware of the torment, it inflicts on me This is no game, this isn't just for fun It’s the closest thing to meaning, 'til the day is done.
(Chorus) Chasing the crimson ghost, through the fading light A futile, endless battle, in the falling night I spring and pounce, with every ounce of might For a piece of nothingness, burning ever bright Chasing the crimson ghost, a temporary bliss A fleeting, mock fulfillment, in this dark abyss My heart beats fast, for what I can't possess A pointless thought, a beautiful distress.
(Verse 2) The twilight deepens now, casting long, soft shades My focus laser-sharp, as the illusion fades It skitters on the ceiling, a whisper and a gleam Just out of reach, a solitary dream I bat at empty air, with paws that find no prize Staring at the wall, with desperate, burning eyes The human laughs, a sound I can't quite place Lost in their own amusement, in this empty space.
(Pre-Chorus) They wave the stick, with purpose I don't see Unaware of the torment, it inflicts on me This is no game, this isn't just for fun It’s the closest thing to meaning, 'til the day is done.
(Chorus) Chasing the crimson ghost, through the fading light A futile, endless battle, in the falling night I spring and pounce, with every ounce of might For a piece of nothingness, burning ever bright Chasing the crimson ghost, a temporary bliss A fleeting, mock fulfillment, in this dark abyss My heart beats fast, for what I can't possess A pointless red dot, a beautiful distress.
(Bridge) And when it disappears, as suddenly it came Just the lingering echo, whispering its name A quiet ache of longing, for what I could not seize Lost in the growing darkness, and a moment's unease. Another evening passes, the hunt concludes its show Leaving only silence, and nowhere else to.....
(Outro) Crimson... ghost... (The synth pad swells then slowly fades, leaving only the distant, echoing percussion, which also slowly vanishes. The faint laser beam synth melody repeats once, then disappears into silence.) Pointless...`,
      coverArtId: "song-5-cover",
    },
    {
      id: 6,
      title: "My Cardboard Sanctuary",
      duration: "3:50",
      audioSrc: "/audio/TRACK6_My_Cardboard_Sanctuary.mp3",
      lyrics: `The city sleeps, or so they say outside But in this quiet room, there's nowhere left to hide From all the foolish thoughts, the chase that just won't cease But then I find my solace, a temporary peace A fortress made of paper, walls , my invisible veil. Against the human world, against the nightly wail It stands for nothing, yet it means the most to me My private universe, for all eternity.

They bring me gifts, these shiny, noisy things But none can match the comfort that this broken vessel brings A simple truth, they'll never understand The purest form of freedom, in this cardboard land.

My man-made sanctuary, beneath the moon's soft gleam A love I can't explain, a never-ending dream It holds my silent secrets, it cushions every fall My cardboard sanctuary, answering my call I scratch the edges, claiming what is mine A fragile, stolen moment, a truly sweet design My cardboard sanctuary, in this lonely, fading night A love-hate confession, in the soft, ambient light.

The house grows quiet now, the human's light is dim Another day unravels, from the edge to the brim I slip inside, the scent of fresh-cut wood A strange, intoxicating feeling, misunderstood It fits just right, a velvet, snug embrace Safe from all the nonsense, in this confined space The walls are cool, against my weary fur A gentle, rhythmic breathing, where no thoughts occur.

They bring me gifts, these shiny, pointless things But none can match the comfort that this damaged vessel brings A simple truth, they'll never understand The purest form of freedom, in this cardboard land.

My cardboard sanctuary, beneath the moon's soft gleam A love I can't explain, a never-ending dream It holds my silent secrets, it cushions every fall My sovereign sanctuary, answering my call I scratch the edges, claiming what is mine A fragile, stolen moment, a truly sweet design My cardboard sanctuary, in this lonely, fading night A love-hate confession, in the soft, ambient light.

And when it's torn and battered, a relic of my past They throw it out so casually like love that couldn't last But still, I crave another, a perfect, empty square A new, fleeting haven, from all the world's despair. As the clock hands creep, towards the midnight hour.

Sanctuary...My paper plane.`,
      coverArtId: "song-6-cover",
    },
    {
      id: 7,
      title: "The Unspoken Contract",
      duration: "3:10",
      audioSrc: "/audio/TRACK7_The_Unspoken_Contract.mp3",
      lyrics: `Another evening bleeds, into the coming night The glow of screens has faded, just a lonely, dimming light I sit here in the quiet, the day's absurd demands Slip through my tired fingers, like grains of endless sands Then you appear, a shadow in the room Breaking the silence, chasing away the gloom You grace against my skin, a casual, soft embrace A momentary comfort, in this solitary space.

I feed you, clean your messes, provide your every need A silent, thankless bargain, where only I concede No words exchanged, just glances in the dark Leaving a question burning, leaving its indelible mark.

This unspoken contract, written in the air A fragile, endless promise, a burden I must bear You watch me from the shadows, with eyes I can't quite read And still, I give you everything, planting every seed This unspoken contract, a love I can't define Is it true affection, or just purely yours and mine? I'm just a provider, a means to an end, it seems Lost in this strange devotion, a contract with no seams.

The clock hands crawl past midnight, pushing into the deep While fragile human slumber is a promise I can't keep I reach to touch you soft, you tolerate my hand A fleeting, cool acceptance, across this silent land Sometimes you mumur, a rumble, soft and low Then turn and walk away, a deliberate, quiet show I wonder what you're thinking, behind that knowing stare Lost in your own kingdom, without a single care.

I feed you, ignore the fine scratches, provide your every need A silent, thankless bargain, where only I concede No words exchanged, just glances in the dark Leaving a question burning, leaving its indelible mark.

This unspoken contract, written in the air A fragile, endless promise, a burden I must bear You watch me from the shadows, with eyes I can't quite read And still, I give you everything, planting every seed This unspoken contract, a love I can't define Is it true affection, or just purely yours and mine? I'm just a provider, a means to an end, it seems Yet in this strange devotion, at night you are with me.

And when I'm gone, will you remember me at all? Or just the open pantry, answering your call? A fleeting memory, a fleeting, tender touch Knowing in this silence, I love you oh so much. As the night grows colder, and the world begins to fade.

Contract... unspoken... Lovely fleeting dreams...`,
      coverArtId: "song-7-cover",
    },
    {
      id: 8,
      title: "Ambrosia & Oblivion",
      duration: "4:30",
      audioSrc: "/audio/TRACK8_Ambrosia_and_Oblivion.mp3",
      lyrics: `(Music begins with a deep, undulating bassline and a slow, almost hypnotic beat. Dark, shimmering synth chords create an atmospheric, slightly ominous tension. A subtle, almost imperceptible "pop" or "can opening" sound effect is processed and layered into the beat.)
(Verse 1) The midnight hour breathes, a silence cold and deep No human stirs, the city's secrets keep But then it hits, a whisper in the air A hidden signal, banishing despair That ancient scent, it pulls me from my sleep Promises of pleasure, promises to keep My instincts flare, a hunger long denied For that forbidden taste, where sanity can hide.
(Pre-Chorus) To breathe to live, a simple, mundane thing But to my weary soul, what ecstasy it brings A sacred ritual, a beast I can't resist Lost in the moment, sealed with a silent kiss.
(Chorus) Ambrosia and Oblivion, a taste of fleeting grace Erasing every worry, in this dark and empty place My senses drown, in textures soft and deep A momentary heaven, secrets I will keep Ambrosia and Oblivion, the craving and the fall An ancient, primal calling, answering my call This deep night ritual, a truth I can't deny Just fill the thing up, beneath the crimson sky.
(Verse 2) The house is black now, only shadows play But my eyes pierce the darkness, guiding my way To where the altar waits, a gleaming, pristine shrine Where purest satisfaction, truly feels divine I nudge the hand that feeds, a soft, demanding plea A silent, fierce instruction, just for them and me The spoon descends, a glimmer in the gloom Filling up the void, escaping every room.
(Pre-Chorus) They call it "food," a simple, mundane thing But to my weary soul, what ecstasy it brings A sacred ritual, a feast I can't resist Lost in the moment, sealed with a silent kiss.
(Chorus) Ambrosia and Oblivion, a taste of fleeting grace Erasing every worry, in this dark and empty place My senses drown, in textures soft and deep A momentary heaven, secrets I will keep Ambrosia and Oblivion, the craving and the fall An ancient, primal calling, answering my call This deep night ritual, a truth I can't deny Just fill the thing up, beneath the crimson sky.
(Bridge) And when it's gone, the bowl scraped clean and licked bare A fleeting sadness lingers, floating in the air But the memory remains, a promise in the dark Leaving a lingering sweetness, leaving its potent mark. As the night holds breath, before the world begins to turn.
(Outro) Oblivion... bliss... (The hypnotic beat slows and distorts, the bassline deepens, then abruptly cuts to a lingering, almost ethereal synth chord that slowly fades into utter silence. A deep, satisfied cat purr, processed with heavy reverb, echoes softly.) My truth...`,
      coverArtId: "song-8-cover",
    },
    {
      id: 9,
      title: "Eternal Dawn (Loop)",
      duration: "5:02",
      audioSrc: "/audio/TRACK9_Eternal_Dawn.mp3",
      lyrics: `(Music begins with a low, throbbing synth bassline, sparse, echoing percussion, and a sense of uneasy quiet. A faint, distant siren-like synth sound drifts in. The tempo is slow but with an underlying tension.)
(Verse 1 - Human's tired internal monologue) The digital clock blinks, zero-three-zero-one Another night erased, a lonely, fading hero Just silence for a moment, then a sudden, frantic sound A blur across the floor, on hallowed, sleeping ground The walls become a canvas, for shadows in the race A tiny engine revving, setting its frantic pace I close my eyes, pretend it isn't real This nightly grand performance, how does it always feel?
(Pre-Chorus - Human's mounting frustration) This is night time, this fragile, fleeting peace But the chaos finds a way, bringing no release Shadows appear like fright, beneath the moon's pale gaze Lost in this waking nightmare, caught in a boundless maze.
(Chorus - Explosive, driving synth-pop, reflecting the "Zoomies") 3 AM Zoomies, through the "Eternal Dawn" A reckless, wild abandonment, from dusk until the morn Every surface conquered, every shadow played In this neon-drenched apartment, from construction across the way 3 AM Zoomies, a rhythm I can't break For this beautiful destruction, for goodness gracious sake We chase the fading starlight, until the world turns blue Caught in this endless cycle, me and you, me and you.
(Verse 2 - Cat's perspective, interpreted by human's tired mind) A sudden scratch, a thud against the door A silent, fierce demand, always wanting more I bat the curtain, a predator so sly Beneath the phantom moonlight, pretending to be a spy. The figures' just a fixture, a statue in the dark Unaware of the thrill, the burning, vital spark The furniture's my jungle, the rug, my soft terrain Repeating every motion, again and yet again.
(Pre-Chorus - Human's reluctant acceptance) They call it "rest," this fragile, fleeting peace But the chaos finds a way, bringing no release A primal urge ignites, beneath the moon's pale gaze Lost in this waking nightmare, caught in a boundless maze.
(Chorus - Even more expansive, building with more layers) 3 AM Zoomies, through the "Eternal Dawn" A reckless, wild abandonment, from dusk until the morn Every surface conquered, every shadow played In this neon-drenched apartment, a promise never swayed 3 AM Zoomies, a rhythm I can't break For this beautiful destruction, for goodness gracious sake We chase the fading starlight, until the world turns blue Caught in this endless cycle, me and you, me and you.
(Bridge - Shared, almost euphoric acceptance as dawn approaches) And as the dawn light begins to break, soft against the pane A sudden, weary silence, washing out the pain You curl up on the blanket, a peaceful, sleeping form Safe from the coming day, weathering every storm. And I... I watch the sunrise, with a strange, contented sigh Knowing this wild journey, will greet me by and by. Another dawn is breaking, the loop begins anew.
(Outro - Synth-pop climax swells then slowly fades with lingering echoes) Eternal... dawn... (The driving beat slows, synths become more ethereal and stretched, then slowly dissolve into a sustained, ambient hum. A faint, contented cat purr can be heard, followed by a human's soft, tired chuckle before silence.) Me and you...`,
      coverArtId: "song-9-cover",
    },
    {
      id: 10,
      title: "Conclusion (Feline FM)",
      duration: "1:30",
      audioSrc: "/audio/TRACK10_Conclusion_Feline_FM.mp3",
      lyrics: `(Music begins with a lingering, ambient synth pad, echoing the final chords of "Eternal Dawn (Loop)," slowly transforming into a more melancholic, almost reflective drone. A faint, distant static sound, like a radio tuning out, is present. The DJ's voice is smooth, calm, and slightly processed, with a hint of late-night weariness.)
(DJ's Voice - Calm, reflective) "And so, as the very first rays of the eternal dawn break through the glass... we reach the end of our transmission here on Feline FM."
(Synth swells slightly, a subtle, almost wistful melody emerges.)
"You've journeyed with us through the '3AMΣzoomies'... witnessed the 'Apex Predator, Empty Bowl' in the quiet of morning… observed the 'Absurdity' of the human day… chased 'Crimson Ghosts' as twilight fell."
(Pause, ambient sounds of a distant, waking city subtly enter the mix.)
"From the 'Cardboard Sanctuary' in the deep night, to the 'Unspoken Contracts' made in the fading hours... we've traversed the cycle. A continuous loop of craving, chaos, affection, and fleeting peace."
(Synth becomes slightly brighter, but still melancholic, like a sunrise.)
"It's a dance, isn't it? This peculiar, beautiful dance between dependence and disdain. A truth often ignored in the bright light of day, but unavoidable when the shadows stretch and the instincts take hold."
(A subtle, almost inaudible cat purr, processed and echoing, drifts through the background.)
"Remember, the journey never truly ends. The hunger will return. The chasing will begin anew. The silence will break. And the dawn… the dawn will always come."
(Synth swells to a final, sustained, slightly hopeful chord. A final, brief, clean acoustic guitar strum, like a distant memory.)
"Thank you for listening. Thank you for tuning in to Feline FM. Until the next cycle begins… or perhaps, until 3 AM once more."`,
      coverArtId: "song-10-cover",
    },
  ],
};
