import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-secondary/30 p-4">
            <Card className="w-full max-w-md border-none shadow-xl">
                <CardHeader className="text-center space-y-2">
                    <div className="mx-auto size-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl mb-2">K</div>
                    <CardTitle className="text-2xl">Welcome to Kiity</CardTitle>
                    <CardDescription>Exclusive to students and faculty of KIIT University.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">University Email</label>
                        <Input placeholder="example@kiit.ac.in" />
                        <p className="text-xs text-muted-foreground">Must end with @kiit.ac.in</p>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Password</label>
                        <Input type="password" placeholder="••••••••" />
                    </div>

                    <Button className="w-full text-md font-semibold" size="lg">I have an ID Card</Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
                        <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground">Verification Required</span></div>
                    </div>

                    <p className="text-xs text-center text-muted-foreground">By entering, you agree to the Academic Integrity Code.</p>
                </CardContent>
            </Card>
        </div>
    );
}
