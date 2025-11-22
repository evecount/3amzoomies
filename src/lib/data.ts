
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

export const albumData: Album = {
  title: "Midnight Murmurs",
  artist: "3 AM Zoomies",
  releaseDate: "2024",
  coverArtId: "album-cover",
  songs: [
    {
      id: 1,
      title: "Introduction (Feline FM)",
      duration: "1:15",
      audioSrc: "/publc/audio/TRACK1_Welcome to Feline FM.wav",
      lyrics: `You are tuning in to Fee-line FM, your only stop for the best in existential dread and unwarranted napping. It's late, you're lonely, and you're contemplating the meaningless of your life, which is fine, because you're a human. Our first track tonight is a deep dive into the true cost of companionship. Settle in, buckle up, and try not to spill your water glass. You're about to hear the gospel according to your four-legged overlord.`,
      coverArtId: "song-1-cover",
    },
    {
      id: 2,
      title: "Apex Predator, Empty Bowl",
      duration: "3:45",
      audioSrc: "/publc/audio/placeholder-2.mp3",
      lyrics: `[Verse 1]
Top of the food chain, king of this domain
A jungle of carpets, a desert of plains
But the rumble inside is a primal decree
The bowl is a void, mocking me`,
      coverArtId: "song-2-cover",
    },
    {
      id: 3,
      title: "Observer of Absurdity",
      duration: "4:12",
      audioSrc: "/publc/audio/TRACK3_Observer of Absurdity.wav",
      lyrics: `[Verse 1]
The tall one stares at a glowing rectangle, laughing at nothing
The other one talks to a plant, as if it could hear something
They fill my bowl, they clean my mess
But do they understand true happiness? It's a guess.`,
      coverArtId: "song-3-cover",
    },
    {
      id: 4,
      title: "The Fading Feather (Afternoon Chase)",
      duration: "2:58",
      audioSrc: "/publc/audio/TRACK4_The Fading Feather.wav",
      lyrics: `[Verse]
A shadow drifts, a silent grace
Across the sunbeam on this space
My muscles coil, a whispered threat
A dance with death, not over yet
It floats, it falls, a final sigh
Just dust and light beneath my eye.`,
      coverArtId: "song-4-cover",
    },
    {
      id: 5,
      title: "Chasing the Crimson Ghost",
      duration: "4:20",
      audioSrc: "/publc/audio/TRACK5_Chasing the Cimson Ghost.wav",
      lyrics: `[Verse 1]
A flicker on the wall, a ghost I can't catch
A phantom of ruby, a maddening latch
My claws scrabble, a desperate ballet
It dances away, come what may
Is this the meaning? This endless chase?
To hunt a light in this empty space?`,
      coverArtId: "song-5-cover",
    },
    {
      id: 6,
      title: "My Cardboard Sanctuary",
      duration: "3:50",
      audioSrc: "/publc/audio/TRACK6_My Cardboard Sanctuary.wav",
      lyrics: `[Verse 1]
Four brown walls, a perfect square
Forget the world, I don't care
No grand design, no lofty quest
Just in this box, I find my rest
The scent of paper, the enclosed dark
A simple fortress, a private ark.`,
      coverArtId: "song-6-cover",
    },
    {
      id: 7,
      title: "The Unspoken Contract",
      duration: "3:10",
      audioSrc: "/publc/audio/TRACK7_The Unspoken Contract.wav",
      lyrics: `[Human Voice, tired]
You step on my face while I'm sleeping
You scream at the door for no reason
But when you curl up, a rumbling sigh...
I guess this is love. I won't ask why.
This strange little pact, unsigned and unsaid
I'll love you until one of us is dead.`,
      coverArtId: "song-7-cover",
    },
    {
      id: 8,
      title: "Ambrosia & Oblivion",
      duration: "4:30",
      audioSrc: "/publc/audio/TRACK8_Ambrosia and Oblivion.wav",
      lyrics: `[Verse 1]
The can opens, a holy sound
The scent of ocean, all around
For this one moment, nothing's wrong
Just the sweet taste where I belong
...and then it's gone.`,
      coverArtId: "song-8-cover",
    },
    {
      id: 9,
      title: "Eternal Dawn (Loop)",
      duration: "5:02",
      audioSrc: "/publc/audio/placeholder-9.mp3",
      lyrics: `[Human Voice, softly]
"It's okay, buddy. We'll do it all again tomorrow."
[Cat's Purr, fading into a synth loop]
Tomorrow... and tomorrow... and tomorrow...`,
      coverArtId: "song-9-cover",
    },
    {
      id: 10,
      title: "Conclusion (Feline FM)",
      duration: "1:30",
      audioSrc: "/publc/audio/placeholder-10.mp3",
      lyrics: `(Smooth jazz fades back in)
DJ: "And that brings us to the edge of dawn. The birds are stirring. The world is waking up. But here, in the quiet, we'll keep the night going, just for you. Until next time... stay nocturnal."
(Radio static fades out)`,
      coverArtId: "song-10-cover",
    },
  ],
};
