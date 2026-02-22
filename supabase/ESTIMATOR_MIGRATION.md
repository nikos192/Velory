# Estimator lead fields migration

Run this SQL in your Supabase SQL editor before expecting estimator fields to persist in the `leads` table.

```sql
alter table public.leads
  add column if not exists estimator_breakdown jsonb,
  add column if not exists estimator_total integer,
  add column if not exists selected_addons jsonb,
  add column if not exists monthly_care_plan integer;
```
