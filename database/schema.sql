create table if not exists public.profiles (
  user_id text primary key,
  email text not null unique,
  name text not null,
  phone text,
  birth date,
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  product_number text primary key,
  category text not null,
  brand text,
  model text not null,
  platform text,
  features text,
  description text,
  inventory_quantity integer not null default 1,
  genre text,
  age_limit text,
  players text,
  time_main text,
  time_clear text,
  release_date text,
  metascore text,
  rental_fee_day integer not null default 0,
  image_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.rental_orders (
  rental_id text primary key,
  user_id text not null references public.profiles(user_id) on update cascade,
  payment_id text,
  order_state text not null default '결제완료'
    check (order_state in ('결제완료', '배송중', '대여중', '반납완료', '연체', '파손')),
  start_date date not null,
  return_date date not null,
  created_at timestamptz not null default now()
);

create table if not exists public.rental_details (
  rental_detail_id bigserial primary key,
  rental_id text not null references public.rental_orders(rental_id) on delete cascade,
  product_number text not null,
  product_name text not null,
  damaged_fee integer not null default 0,
  overdue_fee integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.payments (
  payment_id text primary key,
  rental_id text not null references public.rental_orders(rental_id) on delete cascade,
  method_id text,
  method_type text not null,
  amount integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.inquiries (
  inquiry_id text primary key,
  user_id text not null references public.profiles(user_id) on update cascade,
  rental_id text references public.rental_orders(rental_id) on delete set null,
  text text not null,
  answer text,
  status text not null default '답변대기'
    check (status in ('답변대기', '처리중', '답변완료')),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.products enable row level security;
alter table public.rental_orders enable row level security;
alter table public.rental_details enable row level security;
alter table public.payments enable row level security;
alter table public.inquiries enable row level security;

drop policy if exists "public read profiles demo" on public.profiles;
drop policy if exists "public write profiles demo" on public.profiles;
drop policy if exists "public update profiles demo" on public.profiles;
drop policy if exists "public read products demo" on public.products;
drop policy if exists "public write products demo" on public.products;
drop policy if exists "public update products demo" on public.products;
drop policy if exists "public read rental orders demo" on public.rental_orders;
drop policy if exists "public write rental orders demo" on public.rental_orders;
drop policy if exists "public update rental orders demo" on public.rental_orders;
drop policy if exists "public read rental details demo" on public.rental_details;
drop policy if exists "public write rental details demo" on public.rental_details;
drop policy if exists "public update rental details demo" on public.rental_details;
drop policy if exists "public read payments demo" on public.payments;
drop policy if exists "public write payments demo" on public.payments;
drop policy if exists "public update payments demo" on public.payments;
drop policy if exists "public read inquiries demo" on public.inquiries;
drop policy if exists "public write inquiries demo" on public.inquiries;
drop policy if exists "public update inquiries demo" on public.inquiries;

create policy "public read profiles demo" on public.profiles for select using (true);
create policy "public write profiles demo" on public.profiles for insert with check (true);
create policy "public update profiles demo" on public.profiles for update using (true);

create policy "public read products demo" on public.products for select using (true);
create policy "public write products demo" on public.products for insert with check (true);
create policy "public update products demo" on public.products for update using (true);

create policy "public read rental orders demo" on public.rental_orders for select using (true);
create policy "public write rental orders demo" on public.rental_orders for insert with check (true);
create policy "public update rental orders demo" on public.rental_orders for update using (true);

create policy "public read rental details demo" on public.rental_details for select using (true);
create policy "public write rental details demo" on public.rental_details for insert with check (true);
create policy "public update rental details demo" on public.rental_details for update using (true);

create policy "public read payments demo" on public.payments for select using (true);
create policy "public write payments demo" on public.payments for insert with check (true);
create policy "public update payments demo" on public.payments for update using (true);

create policy "public read inquiries demo" on public.inquiries for select using (true);
create policy "public write inquiries demo" on public.inquiries for insert with check (true);
create policy "public update inquiries demo" on public.inquiries for update using (true);

insert into public.profiles (user_id, email, name, phone, birth, is_admin)
values
  ('U-1001', 'minji@playpick.kr', '김민지', '010-3482-1900', '1998-04-12', false),
  ('U-1002', 'doyun@playpick.kr', '박도윤', '010-7744-2201', '2001-09-07', false),
  ('ADMIN-001', 'admin@playpick.kr', '관리자', '010-0000-0000', null, true)
on conflict (user_id) do update set
  email = excluded.email,
  name = excluded.name,
  phone = excluded.phone,
  birth = excluded.birth,
  is_admin = excluded.is_admin;
