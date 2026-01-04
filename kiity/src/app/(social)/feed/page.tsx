import React from 'react';
import { SocialLayout } from '@/components/layout/SocialLayout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MOCK_POSTS } from '@/lib/mock-data';
import { Heart, MessageCircle, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
                    <Card key={post.id} className="border-none shadow-sm ring-1 ring-border/50">
                        <CardHeader className="flex flex-row items-center gap-3 p-4 pb-2">
                            <img src={post.author?.avatar_url} className="size-10 rounded-full object-cover" />
                            <div className="flex-1">
                                <p className="font-semibold text-sm">{post.author?.full_name}</p>
                                <p className="text-xs text-muted-foreground">{post.author?.role} • {post.created_at}</p>
                            </div>
                            <Button size="icon" variant="ghost"><MoreHorizontal className="size-4" /></Button>
                        </CardHeader>
                        <CardContent className="p-4 pt-1 space-y-3">
                            <p className="text-sm">{post.content}</p>
                            <div className="flex gap-2">
                                {post.tags.map(t => <Badge key={t} variant="soft" className="text-[10px]">#{t}</Badge>)}
                            </div>

                            <div className="flex items-center gap-6 pt-3 border-t">
                                <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-red-500 transition-colors">
                                    <Heart className="size-4" />
                                    <span>Like</span>
                                </button>
                                <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                                    <MessageCircle className="size-4" />
                                    <span>Comment</span>
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </SocialLayout>
    );
}
