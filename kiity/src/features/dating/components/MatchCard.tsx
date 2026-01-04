import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, X } from 'lucide-react';
import { DatingProfile } from '@/types/schema';

interface MatchCardProps {
    profile: DatingProfile;
    onSwipeLeft: () => void;
    onSwipeRight: () => void;
}

export function MatchCard({ profile, onSwipeLeft, onSwipeRight }: MatchCardProps) {
    return (
        <div className="w-full max-w-sm relative">
            <Card className="overflow-hidden h-[600px] border-none shadow-xl relative group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={profile.images ? profile.images[0] : ''}
                    className="w-full h-full object-cover"
                    alt={profile.user?.full_name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
                    <div className="flex items-end gap-2">
                        <h2 className="text-3xl font-bold">{profile.user?.full_name}</h2>
                        <span className="text-xl opacity-90">21</span>
                    </div>
                    <p className="text-sm opacity-90 line-clamp-2">{profile.bio}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {profile.preferences.slice(0, 3).map(p => (
                            <Badge key={p} variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-none">
                                {p}
                            </Badge>
                        ))}
                    </div>
                </div>
            </Card>

            {/* Actions */}
            <div className="absolute -bottom-20 left-0 right-0 flex justify-center gap-6">
                <Button
                    size="icon"
                    variant="secondary"
                    className="size-14 rounded-full shadow-lg border-2 border-red-100 hover:bg-red-50 hover:text-red-500 transition-colors"
                    onClick={onSwipeLeft}
                >
                    <X className="size-8" />
                </Button>
                <Button
                    size="icon"
                    variant="secondary"
                    className="size-14 rounded-full shadow-lg border-2 border-green-100 hover:bg-green-50 hover:text-green-500 transition-colors"
                    onClick={onSwipeRight}
                >
                    <Heart className="size-8 fill-current" />
                </Button>
            </div>
        </div>
    );
}
