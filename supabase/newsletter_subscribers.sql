create extension if not exists citext;

create table if not exists public.newsletter_subscribers (
    id bigint generated always as identity primary key,
    email citext not null unique,
    consent boolean not null default false,
    wants_trial_updates boolean not null default true,
    source text not null default 'website-newsletter',
    status text not null default 'subscribed' check (status in ('subscribed', 'unsubscribed')),
    created_at timestamptz not null default timezone('utc', now())
);

alter table public.newsletter_subscribers enable row level security;

drop policy if exists "public_can_insert_newsletter_subscribers" on public.newsletter_subscribers;

create policy "public_can_insert_newsletter_subscribers"
on public.newsletter_subscribers
for insert
to anon
with check (
    consent = true
    and status = 'subscribed'
    and source in ('website-newsletter', 'website-pro-page')
);
