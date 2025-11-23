
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ScrollArea } from './ui/scroll-area';

interface LyricsDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  title: string;
  lyrics: string;
}

export function LyricsDialog({ isOpen, onOpenChange, title, lyrics }: LyricsDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="font-semibold text-3xl uppercase">{title}</DialogTitle>
          <DialogDescription>Lyrics</DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-6">
            <div className="whitespace-pre-wrap text-foreground/80 leading-relaxed">
            {lyrics}
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
