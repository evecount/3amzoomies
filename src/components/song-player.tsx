'use client';

import { Play, Pause, ListMusic, Lock, Loader } from 'lucide-react';
import { Button } from './ui/button';
import type { Song } from '@/lib/data';
import { LyricsDialog } from './lyrics-dialog';
import { useAudioPlayer } from '@/hooks/use-audio-player';
import { useState } from 'react';

interface SongPlayerProps {
  song: Song;
  isLocked?: boolean;
  showLyricsButton?: boolean;
  playlist?: Song[];
}

export function SongPlayer({ song, isLocked = false, showLyricsButton = true, playlist }: SongPlayerProps) {
  const { playSong, pause, currentSong, isPlaying, isLoading } = useAudioPlayer();
  const [isLyricsOpen, setIsLyricsOpen] = useState(false);

  const thisSongIsPlaying = isPlaying && currentSong?.id === song.id;
  const thisSongIsLoading = isLoading && currentSong?.id === song.id;

  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLocked) return;

    if (thisSongIsPlaying) {
      pause();
    } else {
      playSong(song, playlist);
    }
  };

  return (
    <>
      <div className="flex items-center gap-4 p-2 rounded-md transition-colors w-full">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePlayPause}
          aria-label={thisSongIsPlaying ? 'Pause song' : 'Play song'}
          disabled={isLocked}
          className="w-12 h-12"
        >
          {isLocked ? (
            <Lock className="w-5 h-5 text-muted-foreground" />
          ) : thisSongIsLoading ? (
            <Loader className="w-5 h-5 animate-spin" />
          ) : thisSongIsPlaying ? (
            <Pause className="w-5 h-5 text-primary" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </Button>
        <div className="flex-grow text-left">
          <p className={`font-medium uppercase ${isLocked ? 'text-muted-foreground' : 'text-foreground'}`}>{song.title}</p>
          <p className="text-sm text-muted-foreground">{song.duration}</p>
        </div>
        {showLyricsButton && (
            <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
                e.stopPropagation();
                setIsLyricsOpen(true)
            }}
            aria-label="View lyrics"
            disabled={isLocked}
            >
            <ListMusic className="w-5 h-5" />
            </Button>
        )}
      </div>
      {showLyricsButton && (
        <LyricsDialog
            isOpen={isLyricsOpen}
            onOpenChange={setIsLyricsOpen}
            title={song.title}
            lyrics={song.lyrics}
        />
      )}
    </>
  );
}
