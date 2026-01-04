import React from 'react';
import { MarketplaceLayout } from '@/components/layout/MarketplaceLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MOCK_MARKETPLACE_ITEMS } from '@/lib/mock-data';
import { MapPin, Clock } from 'lucide-react';

export default function ShopPage() {
    return (
        <MarketplaceLayout>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {MOCK_MARKETPLACE_ITEMS.map((item) => (
                    <Card key={item.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow group cursor-pointer bg-card">
                        <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
                            <img
                                src={item.images[0]}
                                alt={item.title}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-2 right-2">
                                <Badge variant="secondary" className="backdrop-blur-md bg-white/70 text-xs font-bold">
                                    ₹{item.price}
                                </Badge>
                            </div>
                            {item.category === 'lost_found' && (
                                <div className="absolute top-2 left-2">
                                    <Badge variant="destructive" className="text-[10px] px-1.5 h-5">LOST</Badge>
                                </div>
                            )}
                        </div>
                        <CardContent className="p-3">
                            <h3 className="font-semibold text-sm truncate">{item.title}</h3>
                            <div className="flex items-center justify-between mt-1 text-muted-foreground">
                                <span className="text-[10px] flex items-center gap-1">
                                    <MapPin className="size-3" />
                                    {item.context === 'hostel' ? 'Hostel KP-5' : 'Campus'}
                                </span>
                                <span className="text-[10px] flex items-center gap-1">
                                    <Clock className="size-3" />
                                    2h ago
                                </span>
                            </div>
                            <Button size="sm" variant="secondary" className="w-full mt-3 h-7 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                                Contact Seller
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </MarketplaceLayout>
    );
}
