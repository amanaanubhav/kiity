export type Role = 'student' | 'professor' | 'staff';
export type PrivacyLevel = 'public' | 'semi_private' | 'private';

export interface Profile {
    id: string;
    email: string;
    full_name: string;
    role: Role;
    branch?: string;
    year?: string;
    hostel_id?: string;
    privacy_setting: PrivacyLevel;
    avatar_url?: string;
    bio?: string;
    skills: string[];
}

export type PostContext = 'social' | 'professional';
export type PostVisibility = 'public' | 'followers' | 'connections';

export interface Post {
    id: string;
    author_id: string;
    author?: Profile; // Hydrated
    content: string;
    images?: string[];
    tags: string[];
    context: PostContext;
    visibility: PostVisibility;
    is_opportunity: boolean;
    mentions?: string[]; // IDs
    created_at: string;
}

export type ItemContext = 'hostel' | 'campus';
export type ItemCategory = 'books' | 'electronics' | 'stationery' | 'others' | 'lost_found';

export interface MarketplaceItem {
    id: string;
    seller_id: string;
    seller?: Profile;
    title: string;
    description: string;
    price: number;
    category: ItemCategory;
    location_context: ItemContext;
    hostel_id?: string;
    is_sold: boolean;
    created_at: string;
    images?: string[];
}

export interface DatingProfile {
    id: string;
    user_id: string;
    user?: Profile;
    display_name?: string;
    age?: number;
    gender?: string;
    bio: string;
    photos?: string[];
    images?: string[]; // Supporting both for compatibility
    is_active: boolean;
    preferences: string[];
}
