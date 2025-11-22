
'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface WaitlistDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  productTitle: string;
}

const T_SHIRT_SIZES = ['S', 'M', 'L', 'XL', 'XXL'];
const PILLOW_SIZES = ['Standard (20"x26")', 'Queen (20"x30")', 'King (20"x36")'];

export function WaitlistDialog({ isOpen, onOpenChange, productTitle }: WaitlistDialogProps) {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [size, setSize] = useState<string | undefined>(undefined);

  const isTshirt = productTitle.includes('Tee');
  const isPillow = productTitle.includes('Pillow');

  useEffect(() => {
    // Reset size when product changes
    setSize(undefined);
  }, [productTitle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const recipient = 'gwen@evecount.com';
    const subject = `Waitlist Submission for: ${productTitle}`;
    
    let body = `Please add the following email to the waitlist for "${productTitle}":\n\nEmail: ${email}`;
    if (size) {
        body += `\nSize: ${size}`;
    }
    
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    toast({
      title: "Opening your email client...",
      description: `Please send the pre-filled email to join the waitlist for "${productTitle}".`,
    });

    onOpenChange(false);
    setEmail('');
    setSize(undefined);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
            <DialogHeader>
            <DialogTitle className="font-headline text-2xl uppercase">Join the Waitlist</DialogTitle>
            <DialogDescription>
                Be the first to know when "{productTitle}" is available. Enter your details below.
            </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                    Email
                    </Label>
                    <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="col-span-3"
                    placeholder="you@your.domain"
                    />
                </div>
                
                {isTshirt && (
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="size" className="text-right">
                            Size
                        </Label>
                        <Select onValueChange={setSize} required>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select a size" />
                            </SelectTrigger>
                            <SelectContent>
                                {T_SHIRT_SIZES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                )}

                {isPillow && (
                     <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="size" className="text-right">
                            Size
                        </Label>
                        <Select onValueChange={setSize} required>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select a pillow size" />
                            </SelectTrigger>
                            <SelectContent>
                                {PILLOW_SIZES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                )}

            </div>
            <DialogFooter>
                <Button type="submit">Notify Me</Button>
            </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
