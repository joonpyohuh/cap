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
