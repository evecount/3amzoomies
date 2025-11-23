
'use client';

import { createContext, useContext, useState, useRef, useCallback, useEffect } from 'react';
import type { Song } from '@/lib/data';

interface AudioPlayerContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  isLoading: boolean;
  playSong: (song: Song, playlist?: Song[]) => void;
  pause: () => void;
  playNext: () => void;
  playPrev: () => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | null>(null);

export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error('useAudioPlayer must be used within an AudioProvider');
  }
  return context;
};

interface AudioProviderProps {
    children: React.ReactNode;
}

export function AudioProvider({ children }: AudioProviderProps) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // This effect runs only on the client
    audioRef.current = new Audio();
    const audio = audioRef.current;

    const handleEnded = () => playNext();
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handleError = () => {
        setIsLoading(false);
        console.error("Error loading audio source:", audio.error);
    }

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);


    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.pause();
    };
  }, []);

  const playSong = useCallback((song: Song, newPlaylist?: Song[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (newPlaylist) {
        setPlaylist(newPlaylist);
    }
    
    if (currentSong?.id === song.id) {
        if (audio.paused) {
            audio.play().catch(e => console.error("Error playing audio:", e));
        } else {
            audio.pause();
        }
    } else {
        setCurrentSong(song);
        audio.src = song.audioSrc;
        audio.load();
        audio.play().catch(e => console.error("Error playing audio:", e));
    }
  }, [currentSong]);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
    }
  }, []);

  const playNext = useCallback(() => {
    if (playlist.length === 0) return;
    const currentIndex = playlist.findIndex(s => s.id === currentSong?.id);
    if (currentIndex > -1 && currentIndex < playlist.length - 1) {
      playSong(playlist[currentIndex + 1], playlist);
    } else {
        // Loop to start
        playSong(playlist[0], playlist);
    }
  }, [playlist, currentSong, playSong]);

  const playPrev = useCallback(() => {
    if (playlist.length === 0) return;
    const currentIndex = playlist.findIndex(s => s.id === currentSong?.id);
    if (currentIndex > 0) {
      playSong(playlist[currentIndex - 1], playlist);
    } else {
        // Go to end of playlist
        playSong(playlist[playlist.length-1], playlist);
    }
  }, [playlist, currentSong, playSong]);

  const value = {
    currentSong,
    isPlaying,
    isLoading,
    playSong,
    pause,
    playNext,
    playPrev,
  };

  return (
    <AudioPlayerContext.Provider value={value}>
      {children}
    </AudioPlayerContext.Provider>
  );
}
