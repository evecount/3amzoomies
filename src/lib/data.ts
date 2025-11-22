
export interface Song {
  id: number;
  title: string;
  duration: string;
  audioSrc: string;
  lyrics: string;
}

export interface Album {
  title: string;
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
      audioSrc: "/audio/placeholder-1.mp3",
      lyrics: `(Radio static, a smooth jazz intro, and a deep, calm voice)
DJ: "You're listening to Feline FM. The time is 3:00 AM. For our next listener, who's been up all night, here's a track to match that... unique energy."`,
    },
    {
      id: 2,
      title: "Apex Predator, Empty Bowl",
      duration: "3:45",
      audioSrc: "/audio/placeholder-2.mp3",
      lyrics: `[Verse 1]
Top of the food chain, king of this domain
A jungle of carpets, a desert of plains
But the rumble inside is a primal decree
The bowl is a void, mocking me`,
    },
    {
      id: 3,
      title: "Observer of Absurdity",
      duration: "4:12",
      audioSrc: "/audio/placeholder-3.mp3",
      lyrics: `[Verse 1]
The tall one stares at a glowing rectangle, laughing at nothing
The other one talks to a plant, as if it could hear something
They fill my bowl, they clean my mess
But do they understand true happiness? It's a guess.`,
    },
    {
      id: 4,
      title: "Velocity & Void",
      duration: "2:58",
      audioSrc: "/audio/placeholder-4.mp3",
      lyrics: `[Instrumental with frantic energy]
(The sound of claws on a wooden floor, a vase crashing, and a distant, muffled human shouting "What was that?!")`,
    },
    {
      id: 8,
      title: "Ambrosia & Oblivion",
      duration: "4:30",
      audioSrc: "/audio/placeholder-5.mp3",
      lyrics: `[Verse 1]
The can opens, a holy sound
The scent of ocean, all around
For this one moment, nothing's wrong
Just the sweet taste where I belong
...and then it's gone.`,
    },
    {
      id: 9,
      title: "Eternal Dawn (Loop)",
      duration: "5:02",
      audioSrc: "/audio/placeholder-6.mp3",
      lyrics: `[Human Voice, softly]
"It's okay, buddy. We'll do it all again tomorrow."
[Cat's Purr, fading into a synth loop]
Tomorrow... and tomorrow... and tomorrow...`,
    },
    {
      id: 10,
      title: "Conclusion (Feline FM)",
      duration: "1:30",
      audioSrc: "/audio/placeholder-7.mp3",
      lyrics: `(Smooth jazz fades back in)
DJ: "And that brings us to the edge of dawn. The birds are stirring. The world is waking up. But here, in the quiet, we'll keep the night going, just for you. Until next time... stay nocturnal."
(Radio static fades out)`,
    },
  ],
};
