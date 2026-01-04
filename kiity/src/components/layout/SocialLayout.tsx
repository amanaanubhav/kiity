"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, User, MessageCircle, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function SocialLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-background flex justify-center">
            {/* Desktop Sidebar (Left) */}
            <aside className="hidden lg:flex w-64 flex-col fixed left-[max(0px,calc(50%-600px))] h-screen border-r p-4">
                <div className="mb-8 px-4">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Kitty Social</h1>
                </div>

                <nav className="space-y-1 flex-1">
                    <Link href="/feed/personal">
                        <Button variant={pathname.includes('/personal') ? "secondary" : "ghost"} className="w-full justify-start gap-3">
                            <Home className="size-5" />
                            Personal Feed
                        </Button>
                    </Link>
                    <Link href="/feed/explore">
                        <Button variant={pathname.includes('/explore') ? "secondary" : "ghost"} className="w-full justify-start gap-3">
                            <Compass className="size-5" />
                            Explore Campus
                        </Button>
                    </Link>
                    <Link href="/u/me">
                        <Button variant="ghost" className="w-full justify-start gap-3">
                            <User className="size-5" />
                            My Profile
                        </Button>
                    </Link>
                </nav>

                <div className="pt-4 border-t">
                    <Button variant="outline" className="w-full gap-2">
                        <LogOut className="size-4" /> Sign Out
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="w-full max-w-2xl lg:ml-64 py-4 px-4 pb-20 lg:pb-4">
                {children}
            </main>

            {/* Mobile Bottom Nav */}
            <nav className="fixed bottom-0 left-0 right-0 h-16 bg-background border-t lg:hidden flex items-center justify-around z-50">
                <Link href="/feed/personal" className={cn("p-2", pathname.includes('personal') ? "text-primary" : "text-muted-foreground")}>
                    <Home className="size-6" />
                </Link>
                <Link href="/feed/explore" className={cn("p-2", pathname.includes('explore') ? "text-primary" : "text-muted-foreground")}>
                    <Compass className="size-6" />
                </Link>
                <Link href="/u/me" className={cn("p-2", pathname.includes('u/') ? "text-primary" : "text-muted-foreground")}>
                    <User className="size-6" />
                </Link>
            </nav>
        </div>
    );
}
