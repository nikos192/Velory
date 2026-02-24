# Estimator lead fields migration

Run this SQL in your Supabase SQL editor so each lead row clearly shows selected website options and pricing in dedicated columns.

```sql
alter table public.leads
  add column if not exists estimator_breakdown jsonb,
  add column if not exists estimator_total integer,
  add column if not exists selected_addons jsonb,
  add column if not exists monthly_care_plan integer,
  add column if not exists preferred_launch_window text,
  add column if not exists estimate_currency text default 'AUD',
  add column if not exists estimate_base_package integer,
  add column if not exists estimate_extra_pages integer,
  add column if not exists estimate_extra_pages_cost integer,
  add column if not exists estimate_booking_integration boolean,
  add column if not exists estimate_advanced_contact_forms boolean,
  add column if not exists estimate_basic_seo_setup boolean,
  add column if not exists estimate_copywriting_assistance boolean,
  add column if not exists estimate_cms_blog_capability boolean,
  add column if not exists estimate_ecommerce_starter boolean,
  add column if not exists estimate_delivery_speed text,
  add column if not exists estimate_rush_surcharge integer,
  add column if not exists estimate_subtotal integer,
  add column if not exists estimate_total integer,
  add column if not exists estimate_monthly_care_plan_selected boolean,
  add column if not exists estimate_monthly_care_plan_cost integer,
  add column if not exists estimate_selected_option_count integer,
  add column if not exists estimate_line_items jsonb;

create index if not exists idx_leads_estimate_total on public.leads(estimate_total);
create index if not exists idx_leads_estimate_delivery_speed on public.leads(estimate_delivery_speed);

update public.leads
set
  estimate_total = coalesce(estimate_total, estimator_total),
  estimate_monthly_care_plan_cost = coalesce(estimate_monthly_care_plan_cost, monthly_care_plan),
  estimate_selected_option_count = coalesce(
    estimate_selected_option_count,
    case
      when jsonb_typeof(selected_addons) = 'array' then jsonb_array_length(selected_addons)
      else null
    end
  )
where estimate_total is null
   or estimate_monthly_care_plan_cost is null
   or estimate_selected_option_count is null;

create or replace view public.leads_quote_overview as
select
  id,
  submitted_at,
  name,
  business_name,
  phone,
  preferred_launch_window,
  coalesce(estimate_currency, 'AUD') as estimate_currency,
  estimate_subtotal,
  estimate_rush_surcharge,
  estimate_total as one_time_total,
  estimate_monthly_care_plan_cost as monthly_care_plan_cost,
  estimate_delivery_speed,
  estimate_extra_pages,
  estimate_booking_integration,
  estimate_advanced_contact_forms,
  estimate_basic_seo_setup,
  estimate_copywriting_assistance,
  estimate_cms_blog_capability,
  estimate_ecommerce_starter,
  estimate_selected_option_count,
  selected_addons
from public.leads;
```
