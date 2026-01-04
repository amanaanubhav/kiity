import React from 'react';
import { ProfessionalLayout } from '@/components/layout/ProfessionalLayout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MOCK_POSTS } from '@/lib/mock-data';

export default function BridgePage() {
    const opportunities = MOCK_POSTS.filter(p => p.context === 'professional');

    return (
        <ProfessionalLayout>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Left Sidebar (Profile Summary) */}
                <div className="hidden md:block col-span-3 space-y-4">
                    <Card className="overflow-hidden border-none shadow-sm pb-4">
                        <div className="h-16 bg-gradient-to-r from-blue-600 to-indigo-600" />
                        <div className="px-4 relative">
                            <div className="size-16 rounded-full border-4 border-white bg-white absolute -top-8 overflow-hidden">
                                <img src="https://i.pravatar.cc/150?u=alex" className="w-full h-full object-cover" />
                            </div>
                            <div className="mt-10">
                                <h3 className="font-semibold text-lg">Alex Chen</h3>
                                <p className="text-xs text-muted-foreground">CSE Student • Web Developer</p>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t px-4 space-y-2">
                            <div className="flex justify-between text-xs font-medium">
                                <span className="text-muted-foreground">Profile views</span>
                                <span className="text-blue-600">42</span>
                            </div>
                            <div className="flex justify-between text-xs font-medium">
                                <span className="text-muted-foreground">Research citations</span>
                                <span className="text-blue-600">2</span>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Main Feed */}
                <div className="col-span-12 md:col-span-6 space-y-4">
                    <Card className="p-4">
                        <div className="flex gap-4">
                            <div className="size-12 rounded-full bg-slate-200" />
                            <div className="border rounded-full flex-1 px-4 flex items-center text-sm font-medium text-muted-foreground hover:bg-accent/50 cursor-pointer">
                                Start a post about research or projects...
                            </div>
                        </div>
                        <div className="flex justify-between mt-4 px-2">
                            <Button variant="ghost" size="sm" className="text-blue-600 gap-2">Research</Button>
                            <Button variant="ghost" size="sm" className="text-green-600 gap-2">Article</Button>
                            <Button variant="ghost" size="sm" className="text-orange-600 gap-2">Event</Button>
                        </div>
                    </Card>

                    {opportunities.map(post => (
                        <Card key={post.id} className="p-4 space-y-3">
                            <div className="flex gap-3">
                                <img src={post.author?.avatar_url} className="size-12 rounded-full" />
                                <div>
                                    <h3 className="font-bold text-sm hover:underline cursor-pointer">{post.author?.full_name}</h3>
                                    <p className="text-xs text-muted-foreground">{post.author?.bio || post.author?.role}</p>
                                    <p className="text-[10px] text-muted-foreground">{post.created_at} • <Badge variant="outline" className="text-[9px] h-4 py-0">Global</Badge></p>
                                </div>
                            </div>
                            <p className="text-sm pt-1">{post.content}</p>

                            {post.is_opportunity && (
                                <div className="bg-blue-50 dark:bg-blue-900/10 p-3 rounded-lg border border-blue-100 dark:border-blue-900/20">
                                    <h4 className="font-semibold text-xs text-blue-800 dark:text-blue-300 mb-1">Applying is fast and easy</h4>
                                    <Button size="sm" className="h-7 text-xs">Apply Now</Button>
                                </div>
                            )}

                            <div className="flex gap-2 pt-2">
                                {post.tags.map(t => <span key={t} className="text-blue-600 text-xs font-medium hover:underline cursor-pointer">#{t}</span>)}
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Right Sidebar (Recommendations) */}
                <div className="hidden md:block col-span-3">
                    <Card className="p-4">
                        <h3 className="font-semibold text-sm mb-4">Recommended for you</h3>
                        {/* Promo content */}
                    </Card>
                </div>
            </div>
        </ProfessionalLayout>
    );
}
