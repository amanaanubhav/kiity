"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, MapPin, Search, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export function MarketplaceLayout({ children }: { children: React.ReactNode }) {
    const [context, setContext] = useState<'campus' | 'hostel'>('campus');

    // In a real app, 'hostel' context would fetch the user's specific hostel ID.
    const hostelName = "King's Palace 5"; // Mock data

    return (
        <div className="min-h-screen bg-background pb-20 md:pb-0">
            {/* Marketplace Header */}
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
                <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                    <div className="flex items-center gap-2 font-bold text-xl">
                        <div className="size-8 bg-orange-500 rounded-lg flex items-center justify-center text-white">
                            <ShoppingBag className="size-5" />
                        </div>
                        <span className="hidden md:inline">Kitty Market</span>
                    </div>

                    {/* Context Toggle */}
                    <div className="flex items-center bg-secondary/50 p-1 rounded-lg">
                        <button
                            onClick={() => setContext('campus')}
                            className={cn("px-3 py-1.5 text-xs font-medium rounded-md transition-all", context === 'campus' ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground")}
                        >
                            Campus Wide
                        </button>
                        <button
                            onClick={() => setContext('hostel')}
                            className={cn("px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5", context === 'hostel' ? "bg-background shadow-sm text-orange-600" : "text-muted-foreground hover:text-foreground")}
                        >
                            <MapPin className="size-3" />
                            {hostelName}
                        </button>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button size="sm" className="hidden md:flex bg-orange-600 hover:bg-orange-700">
                            + Sell Item
                        </Button>
                    </div>
                </div>

                {/* Search & Filters Bar */}
                <div className="border-t px-4 py-2 bg-secondary/20 flex gap-2 overflow-x-auto no-scrollbar">
                    <div className="relative w-full max-w-xs shrink-0">
                        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
                        <Input placeholder="Search items..." className="h-8 pl-8 text-xs bg-background" />
                    </div>
                    <Button variant="outline" size="sm" className="h-8 text-xs gap-2 shrink-0">
                        <Filter className="size-3" /> Filters
                    </Button>
                    {['Books', 'Electronics', 'Lost & Found', 'Stationery'].map(cat => (
                        <Badge key={cat} variant="secondary" className="h-8 px-3 cursor-pointer hover:bg-secondary-foreground/10 shrink-0 font-normal">
                            {cat}
                        </Badge>
                    ))}
                </div>
            </header>

            <main className="container px-4 py-6 md:px-6">
                {children}
            </main>
        </div>
    );
}
