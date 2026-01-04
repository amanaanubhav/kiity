import React from 'react';
import { SocialLayout } from '@/components/layout/SocialLayout';
import { Card } from '@/components/ui/card';
import { MOCK_POSTS } from '@/lib/mock-data';
import { PostCard } from '@/features/social-feed/components/PostCard';

export default async function FeedPage({ params }: { params: Promise<{ type?: string }> }) {
    // Logic to filter based on 'personal' vs 'explore' would be here.
    // For now we show all mock posts.

    return (
        <SocialLayout>
            <div className="space-y-4">
                {/* New Post Input */}
                <Card className="p-4 flex gap-4 items-start shadow-sm">
                    <div className="size-10 rounded-full bg-primary/10 shrink-0" />
                    <div className="flex-1">
                        <div className="bg-secondary/50 rounded-full h-10 flex items-center px-4 text-sm text-muted-foreground cursor-text hover:bg-secondary transition-colors">
                            What's happening on campus?
                        </div>
                    </div>
                </Card>

                {/* Feed */}
                {MOCK_POSTS.filter(p => p.context === 'social').map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </SocialLayout>
    );
}
