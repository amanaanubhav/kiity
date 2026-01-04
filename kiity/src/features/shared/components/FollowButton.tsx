import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { UserPlus, UserCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FollowButtonProps {
    isFollowing?: boolean;
    className?: string;
}

export function FollowButton({ isFollowing = false, className }: FollowButtonProps) {
    const [following, setFollowing] = useState(isFollowing);

    return (
        <Button
            variant={following ? "secondary" : "default"}
            size="sm"
            className={cn("gap-2 transition-all", className)}
            onClick={() => setFollowing(!following)}
        >
            {following ? (
                <>
                    <UserCheck className="size-4" />
                    Following
                </>
            ) : (
                <>
                    <UserPlus className="size-4" />
                    Follow
                </>
            )}
        </Button>
    );
}
