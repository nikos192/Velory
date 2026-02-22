# Admin Workflow: Lead Status Tracking

Add a `status` field to the `leads` table to track lead progress through your sales pipeline.

## Database Migration

Run this SQL in your Supabase SQL editor:

```sql
alter table public.leads
  add column if not exists status text default 'new'
    check (status in ('new', 'contacted', 'won', 'lost'));

create index if not exists idx_leads_status on public.leads(status);
```

## Status Values

- **new** (default): Lead just submitted the contact form
- **contacted**: You've reached out to the lead
- **won**: Lead became a client
- **lost**: Lead did not pursue further

## Managing Leads

You can update lead status directly in the Supabase dashboard:

1. Go to your Supabase project → Database → `leads` table
2. Click any row to view lead details
3. Edit the `status` field to track progress
4. Use filters to view leads by status (e.g., "Show all new leads")

## Future: Custom Admin Dashboard

For greater efficiency, you can build a custom admin dashboard using Supabase Auth + a simple Next.js admin page to batch-update leads and view pipeline metrics.
