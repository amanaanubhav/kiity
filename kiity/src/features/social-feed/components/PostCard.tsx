import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, MoreHorizontal } from 'lucide-react';
import { Post } from '@/types/schema';

interface PostCardProps {
    post: Post;
}

export function PostCard({ post }: PostCardProps) {
    return (
        <Card className="border-none shadow-sm ring-1 ring-border/50">
            <CardHeader className="flex flex-row items-center gap-3 p-4 pb-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.author?.avatar_url} className="size-10 rounded-full object-cover" alt={post.author?.full_name} />
                <div className="flex-1">
                    <p className="font-semibold text-sm">{post.author?.full_name}</p>
                    <p className="text-xs text-muted-foreground">{post.author?.role} • {post.created_at}</p>
                </div>
                <Button size="icon" variant="ghost"><MoreHorizontal className="size-4" /></Button>
            </CardHeader>
            <CardContent className="p-4 pt-1 space-y-3">
                <p className="text-sm">{post.content}</p>
                <div className="flex gap-2">
                    {post.tags.map(t => <Badge key={t} variant="secondary" className="text-[10px] bg-secondary/50 font-normal">#{t}</Badge>)}
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
    );
}
