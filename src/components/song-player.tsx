'use client';

import { useState } from 'react';
import { Play, Pause, ListMusic, Lock } from 'lucide-react';
import { Button } from './ui/button';
import type { Song } from '@/lib/data';
import { LyricsDialog } from './lyrics-dialog';

interface SongPlayerProps {
  song: Song;
  isLocked?: boolean;
}

export function SongPlayer({ song, isLocked = false }: SongPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLyricsOpen, setIsLyricsOpen] = useState(false);

  // We don't have an audio context, so this is a dummy toggle.
  // A real implementation would use an Audio element or a library.
  const handlePlayPause = () => {
    if (isLocked) return;
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="flex items-center gap-4 p-2 rounded-md transition-colors hover:bg-secondary/50">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePlayPause}
          aria-label={isPlaying ? 'Pause song' : 'Play song'}
          disabled={isLocked}
          className="w-12 h-12"
        >
          {isLocked ? (
            <Lock className="w-5 h-5 text-muted-foreground" />
          ) : isPlaying ? (
            <Pause className="w-5 h-5 text-primary" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </Button>
        <div className="flex-grow">
          <p className={`font-medium uppercase ${isLocked ? 'text-muted-foreground' : 'text-foreground'}`}>{song.title}</p>
          <p className="text-sm text-muted-foreground">{song.duration}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsLyricsOpen(true)}
          aria-label="View lyrics"
          disabled={isLocked}
        >
          <ListMusic className="w-5 h-5" />
        </Button>
      </div>
      <LyricsDialog
        isOpen={isLyricsOpen}
        onOpenChange={setIsLyricsOpen}
        title={song.title}
        lyrics={song.lyrics}
      />
    </>
  );
}
