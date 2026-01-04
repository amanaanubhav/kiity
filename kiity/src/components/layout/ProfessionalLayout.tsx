"use client";

import React from 'react';
import Link from 'next/link';
import { Briefcase, Search, Bell, MessageSquare, UserCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function ProfessionalLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[#f3f2ef] dark:bg-background w-full">
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

