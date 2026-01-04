"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, X, Sparkles, ShieldAlert } from 'lucide-react';
import { MOCK_DATING_PROFILES } from '@/lib/mock-data';
import { MatchCard } from '@/features/dating/components/MatchCard';

export default function MatchPage() {
    const [isOptedIn, setIsOptedIn] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentProfile = MOCK_DATING_PROFILES[currentIndex];

    // --- Opt-In Gatekeeper ---
    if (!isOptedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-500/20 to-purple-600/20">
                <Card className="max-w-md w-full text-center p-6 space-y-6 border-none shadow-2xl bg-background/80 backdrop-blur">
                    <div className="mx-auto size-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white">
                        <Heart className="size-8 fill-current" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-2">Campus Dating</h1>
                        <p className="text-muted-foreground text-sm">Find your study buddy or coffee date.</p>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg text-left text-xs text-yellow-800 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-900/50">
                        <div className="flex gap-2 font-bold mb-1 items-center">
                            <ShieldAlert className="size-4" />
                            Privacy Notice
                        </div>
                        This profile is <span className="font-bold">completely separate</span> from your Professional & Academic identity. Professors and Staff cannot see you here.
                    </div>

                    <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:opacity-90 transition-opacity"
                        onClick={() => setIsOptedIn(true)}
                    >
                        Activate My Dating Profile
                    </Button>
                </Card>
            </div>
        );
    }

    // --- No More Profiles ---
    if (!currentProfile) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="text-center space-y-4">
                    <div className="mx-auto size-20 bg-secondary rounded-full flex items-center justify-center">
                        <Sparkles className="size-10 text-muted-foreground" />
                    </div>
                    <h2 className="text-xl font-semibold">That's everyone!</h2>
                    <p className="text-muted-foreground">Check back later for new people on campus.</p>
                    <Button variant="outline" onClick={() => setCurrentIndex(0)}>Start Over</Button>
                </div>
            </div>
        );
    }

    // --- Swipe Card ---
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-secondary/30">
            <MatchCard
                profile={currentProfile}
                onSwipeLeft={() => setCurrentIndex(prev => prev + 1)}
                onSwipeRight={() => setCurrentIndex(prev => prev + 1)}
            />
        </div>
    );
}
