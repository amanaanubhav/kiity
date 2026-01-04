"use client";

import React from 'react';
import Link from 'next/link';
import { Briefcase, Search, Bell, MessageSquare, UserCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function ProfessionalLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[#f3f2ef] dark:bg-background">
            {/* LinkedIn-style Header */}
            <header className="sticky top-0 z-50 bg-background border-b px-4 h-14 flex items-center justify-center">
                <div className="w-full max-w-5xl flex items-center gap-4">
                    {/* Logo */}
                    <div className="size-8 bg-blue-600 rounded shrink-0 flex items-center justify-center text-white font-bold">K</div>

                    {/* Search */}
                    <div className="relative hidden md:block w-72">
                        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <Input placeholder="Search research, people, jobs..." className="pl-9 h-9 bg-secondary/50 border-none" />
                    </div>

                    <div className="ml-auto flex items-center gap-6">
                        <NavIcon icon={Briefcase} label="Bridge" active />
                        <NavIcon icon={MessageSquare} label="Messaging" />
                        <NavIcon icon={Bell} label="Notifs" />
                        <div className="flex flex-col items-center cursor-pointer">
                            <UserCircle className="size-6 text-muted-foreground" />
                            <span className="text-[10px] hidden md:block text-muted-foreground">Me</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto py-6 px-0 md:px-4">
                {children}
            </main>
        </div>
    );
}

function NavIcon({ icon: Icon, label, active }: { icon: any, label: string, active?: boolean }) {
    return (
        <div className="flex flex-col items-center cursor-pointer group">
            <Icon className={cn("size-6 group-hover:text-primary transition-colors", active ? "text-primary" : "text-muted-foreground")} />
            <span className={cn("text-[10px] hidden md:block group-hover:text-primary transition-colors", active ? "text-primary" : "text-muted-foreground")}>{label}</span>
        </div>
    );
}

