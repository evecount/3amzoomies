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
      title: "City Sleeps (Preview)",
      duration: "3:45",
      audioSrc: "/audio/placeholder-1.mp3",
      lyrics: `[Verse 1]
The city sleeps, a concrete beast in slumber deep
Streetlights bleed on asphalt streams where secrets sleep
I walk these veins, a lonely ghost in neon rain
Humming a tune of forgotten pain, again and again

[Chorus]
Oh, midnight murmurs, can you hear my soul?
A quiet riot, losing all control
In the static hum, I find my peace
A fleeting moment, a sweet release`,
    },
    {
      id: 2,
      title: "Neon Rain",
      duration: "4:12",
      audioSrc: "/audio/placeholder-2.mp3",
      lyrics: `[Verse 1]
Flickering signs paint the world in electric hues
A million goodbyes in the gloss of rain-slicked shoes
Every drop a memory, every puddle holds a face
Lost in the rhythm of this lonely, hurried place

[Chorus]
And the neon rain keeps falling down on me
Washing away who I used to be
A kaleidoscope of sorrow and of grace
Reflected in this liquid time and space`,
    },
    {
      id: 3,
      title: "Echoes in the Alley",
      duration: "2:58",
      audioSrc: "/audio/placeholder-3.mp3",
      lyrics: `[Verse 1]
A saxophone cries from a window high above
A story of loss, a tale of unrequited love
The shadows dance, long and thin, like specters on the wall
I listen to the echoes in the alley, answering their call

[Chorus]
Just an echo, another echo in the night
A fading whisper in the pale moonlight
A ghost of a melody, a trace of a dream
Carried away on a silent, flowing stream`,
    },
    {
      id: 4,
      title: "Velvet Black",
      duration: "5:02",
      audioSrc: "/audio/placeholder-4.mp3",
      lyrics: `[Verse 1]
Wrapped in the velvet black of a moonless sky
The world disappears, and it's just the stars and I
A quiet conversation, in a language of pure light
Whispering the secrets of the infinite night

[Chorus]
Oh, the velvet black, it holds me close and tight
A sanctuary from the harsh and burning light
Here in the darkness, I can finally see
The shape of my own soul, wild and free`,
    },
  ],
};
