"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, User, MessageCircle, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function SocialLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-background flex justify-center w-full">
            <main className="w-full max-w-2xl py-4 px-4 pb-20 md:pb-4">
                {children}
            </main>
        </div>
    );
}
