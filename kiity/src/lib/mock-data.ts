import { Profile, Post, MarketplaceItem, DatingProfile } from '@/types/schema';

export const MOCK_PROFILES: Profile[] = [
    {
        id: 'u1',
        email: 'alex_1234@kiit.ac.in',
        full_name: 'Alex Chen',
        role: 'student',
        branch: 'CSE',
        year: '3rd',
        hostel_id: 'KP-6',
        privacy_setting: 'public',
        avatar_url: 'https://i.pravatar.cc/150?u=alex',
        skills: ['React', 'Node.js', 'AI/ML'],
    },
    {
        id: 'u2',
        email: 'prof_sharma@kiit.ac.in',
        full_name: 'Dr. Sharma',
        role: 'professor',
        privacy_setting: 'public',
        avatar_url: 'https://i.pravatar.cc/150?u=sharma',
        skills: ['Data Science', 'Research'],
        bio: 'Associate Professor, School of Computer Engineering.',
    },
];

export const MOCK_POSTS: Post[] = [
    {
        id: 'p1',
        author_id: 'u1',
        author: MOCK_PROFILES[0],
        content: 'Just deployed my first AI model! 🚀 #MachineLearning',
        tags: ['MachineLearning', 'Project'],
        context: 'social',
        visibility: 'public',
        is_opportunity: false,
        created_at: '2h ago',
    },
    {
        id: 'p2',
        author_id: 'u2',
        author: MOCK_PROFILES[1],
        content: 'Looking for 2 research interns for a project on LLMs. Requirements: Python, PyTorch.',
        tags: ['Research', 'Internship', 'LLM'],
        context: 'professional',
        visibility: 'public',
        is_opportunity: true,
        created_at: '5h ago',
    },
];


export const MOCK_ITEMS: MarketplaceItem[] = [
    {
        id: 'm1',
        seller_id: 'u1',
        seller: MOCK_PROFILES[0],
        title: 'Operating System Concepts (Galvin)',
        description: 'Standard textbook. Good condition.',
        price: 300,
        category: 'books',
        location_context: 'hostel',
        hostel_id: 'KP-6',
        is_sold: false,
        created_at: '1d ago',
        images: ['https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800'],
    },
    {
        id: 'm2',
        seller_id: 'u1',
        seller: MOCK_PROFILES[0],
        title: 'Scientific Calculator',
        description: 'Casio fx-991ES Plus',
        price: 0,
        category: 'lost_found',
        location_context: 'campus',
        is_sold: false,
        created_at: '2d ago',
        images: ['https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=800'],
    },
];

export const MOCK_DATING_PROFILES: DatingProfile[] = [
    {
        id: 'd1',
        user_id: 'u3',
        user: { ...MOCK_PROFILES[0], full_name: 'Sarah', id: 'u3', avatar_url: 'https://i.pravatar.cc/150?u=sarah' },
        bio: 'Coffee enthusiast and coding wizard. Looking for someone to debug my life.',
        preferences: ['Coffee dates', 'Library study'],
        images: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800'],
        is_active: true,
    },
    {
        id: 'd2',
        user_id: 'u4',
        user: { ...MOCK_PROFILES[0], full_name: 'Mike', id: 'u4', avatar_url: 'https://i.pravatar.cc/150?u=mike' },
        bio: 'Gym rat and foodie. Let\'s grab tacos!',
        preferences: ['Gym', 'Food'],
        images: ['https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800'],
        is_active: true,
    },
];
