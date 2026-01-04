-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Profiles (Strict Role & Privacy)
create type app_role as enum ('student', 'professor', 'staff');
create type privacy_level as enum ('public', 'semi_private', 'private');

create table public.profiles (
  id uuid references auth.users not null primary key,
  email text not null, -- Enforce @kiit.ac.in in middleware, but store here
  full_name text not null,
  role app_role not null,
  branch text, -- Nullable for staff
  year text, -- Nullable for profs/staff
  hostel_id text, -- Critical for marketplace context
  privacy_setting privacy_level default 'public',
  avatar_url text,
  bio text,
  skills text[],
  
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  constraint kiit_email_check check (email like '%@kiit.ac.in')
);

-- RLS: Public profiles visible to all authenticated.
-- Semi-private: Only name/avatar visible to non-followers (logic handled in app view, row access usually wide for profiles unless strictly hidden)
alter table public.profiles enable row level security;
create policy "Public profiles are viewable by everyone" on profiles for select using (true);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);

-- 2. Posts (Social & Professional)
create type post_context as enum ('social', 'professional');
create type post_visibility as enum ('public', 'followers', 'connections');

create table public.posts (
  id uuid default uuid_generate_v4() primary key,
  author_id uuid references public.profiles(id) not null,
  content text,
  images text[],
  tags text[], -- Important for Professional Discovery
  context post_context not null,
  visibility post_visibility default 'public',
  
  -- Professional Fields
  is_opportunity boolean default false, -- Research/Internship
  mentions uuid[], -- Array of Profile IDs mentioned
  
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.posts enable row level security;
-- Complex RLS for Feed Segregation would go here. 
-- For now, allow read if public.
create policy "Public posts are viewable" on posts for select using (visibility = 'public');
create policy "Authors can insert" on posts for insert with check (auth.uid() = author_id);


-- 3. Marketplace Items
create type item_context as enum ('hostel', 'campus');
create type item_category as enum ('books', 'electronics', 'stationery', 'others', 'lost_found');

create table public.marketplace_items (
  id uuid default uuid_generate_v4() primary key,
  seller_id uuid references public.profiles(id) not null,
  title text not null,
  description text,
  price numeric, -- 0 for Lost & Found
  currency text default 'INR',
  category item_category not null,
  location_context item_context not null, 
  hostel_id text, -- Matches profile.hostel_id if context is hostel
  
  is_sold boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.marketplace_items enable row level security;
create policy "Items viewable by all" on marketplace_items for select using (true);
create policy "Sellers can insert" on marketplace_items for insert with check (auth.uid() = seller_id);


-- 4. Dating Profiles (Opt-In & Segregated)
create table public.dating_profiles (
  user_id uuid references public.profiles(id) not null primary key,
  display_name text, -- Can be different from academic name? usually no for safety, but maybe nickname.
  age int,
  gender text,
  interested_in text[],
  bio text,
  photos text[],
  is_active boolean default false,
  
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.dating_profiles enable row level security;
-- RLS: Only visible if YOU also have a dating profile (reciprocity).
-- This requires a function to check if auth.uid() is in dating_profiles.
-- keeping simple for now:
create policy "Dating profiles visible to activated users" on dating_profiles 
  for select using (
    exists (select 1 from public.dating_profiles where user_id = auth.uid() and is_active = true)
  );
