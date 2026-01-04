"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, ShoppingBag, MessageCircle, User, Bell, Briefcase, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// --- Navigation Config ---
const NAV_ITEMS = [
    { label: 'Feed', href: '/feed', icon: Home },
    { label: 'Market', href: '/marketplace', icon: ShoppingBag },
    { label: 'Bridge', href: '/professional', icon: Briefcase },
    { label: 'Dating', href: '/match', icon: Heart },
    { label: 'Profile', href: '/u/me', icon: User },
];

function Header() {
    return (
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b bg-background/95 px-4 backdrop-blur md:hidden">
            <div className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-primary/20" /> {/* Logo Placeholder */}
                <span className="text-lg font-bold tracking-tight">Kiity</span>
            </div>
            <Button variant="ghost" size="icon">
                <Bell className="size-5" />
            </Button>
        </header>
    );
}

function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden w-64 flex-col border-r bg-card md:flex h-screen sticky top-0">
            <div className="flex h-14 items-center border-b px-6">
                <span className="text-lg font-bold tracking-tight text-primary">Kiity</span>
            </div>
            <nav className="flex-1 space-y-1 p-4">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                                isActive ? "bg-primary/10 text-primary hover:bg-primary/15" : "text-muted-foreground"
                            )}
                        >
                            <item.icon className="size-4" />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>
            <div className="p-4 border-t">
                <div className="flex items-center gap-3 rounded-lg bg-secondary/50 p-3">
                    <div className="size-8 rounded-full bg-primary/20" />
                    <div className="flex flex-col text-xs">
                        <span className="font-medium">Alex Chen</span>
                        <span className="text-muted-foreground">@alex_1234</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}

function BottomNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center border-t bg-background/95 backdrop-blur md:hidden px-4 justify-around">
            {NAV_ITEMS.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex flex-col items-center justify-center gap-1",
                            isActive ? "text-primary" : "text-muted-foreground"
                        )}
                    >
                        <item.icon className={cn("size-6", isActive && "fill-current")} strokeWidth={isActive ? 2.5 : 2} />
                        <span className="text-[10px] font-medium">{item.label}</span>
                    </Link>
                )
            })}
        </nav>
    );
}

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-background text-foreground">
            <Sidebar />
            <div className="flex flex-1 flex-col pb-16 md:pb-0">
                <Header />
                <main className="flex-1 p-4 md:p-8 max-w-5xl mx-auto w-full">
                    {children}
                </main>
            </div>
            <BottomNav />
        </div>
    );
}
