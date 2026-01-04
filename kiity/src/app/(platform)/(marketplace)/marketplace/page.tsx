import React from 'react';
import { MarketplaceLayout } from '@/components/layout/MarketplaceLayout';
import { MOCK_ITEMS } from '@/lib/mock-data';
import { ProductCard } from '@/features/marketplace/components/ProductCard';

export default function ShopPage() {
    return (
        <MarketplaceLayout>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {MOCK_ITEMS.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </MarketplaceLayout>
    );
}
