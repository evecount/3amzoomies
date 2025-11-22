
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
import { useState } from 'react';

interface WaitlistDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  productTitle: string;
}

export function WaitlistDialog({ isOpen, onOpenChange, productTitle }: WaitlistDialogProps) {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log(`Email submitted for ${productTitle}: ${email}`);
    
    toast({
      title: "You're on the list!",
      description: `We'll notify you at ${email} when "${productTitle}" becomes available.`,
    });
    onOpenChange(false);
    setEmail('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
            <DialogHeader>
            <DialogTitle className="font-headline text-2xl uppercase">Join the Waitlist</DialogTitle>
            <DialogDescription>
                Be the first to know when "{productTitle}" is available. Enter your email below.
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
            </div>
            <DialogFooter>
            <Button type="submit">Notify Me</Button>
            </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
