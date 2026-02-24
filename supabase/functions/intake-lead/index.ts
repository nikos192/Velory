import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const DELIVERY_SPEED_OPTIONS = new Set(["standard", "rush"]);
const LAUNCH_WINDOW_OPTIONS = new Set(["asap", "2-4_weeks", "1-2_months", "just_researching"]);

const EXTENDED_LEAD_COLUMNS = [
  "preferred_launch_window",
  "estimate_currency",
  "estimate_base_package",
  "estimate_extra_pages",
  "estimate_extra_pages_cost",
  "estimate_booking_integration",
  "estimate_advanced_contact_forms",
  "estimate_basic_seo_setup",
  "estimate_copywriting_assistance",
  "estimate_cms_blog_capability",
  "estimate_ecommerce_starter",
  "estimate_delivery_speed",
  "estimate_rush_surcharge",
  "estimate_subtotal",
  "estimate_total",
  "estimate_monthly_care_plan_selected",
  "estimate_monthly_care_plan_cost",
  "estimate_selected_option_count",
  "estimate_line_items",
];

const ESTIMATOR_COLUMNS = [
  "estimator_breakdown",
  "estimator_total",
  "selected_addons",
  "monthly_care_plan",
];

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function toTrimmedString(value: unknown, maxLength = 255): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, maxLength);
}

function toNonNegativeInteger(value: unknown): number | null {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return null;
  return Math.max(0, Math.round(numeric));
}

function toBooleanOrNull(value: unknown): boolean | null {
  return typeof value === "boolean" ? value : null;
}

function toDeliverySpeed(value: unknown): string | null {
  const speed = toTrimmedString(value, 20);
  if (!speed || !DELIVERY_SPEED_OPTIONS.has(speed)) return null;
  return speed;
}

function toLaunchWindow(value: unknown): string | null {
  const launchWindow = toTrimmedString(value, 30);
  if (!launchWindow || !LAUNCH_WINDOW_OPTIONS.has(launchWindow)) return null;
  return launchWindow;
}

function normalizeStringArray(value: unknown, maxItems = 30, maxItemLength = 120): string[] | null {
  if (!Array.isArray(value)) return null;

  const normalized = value
    .slice(0, maxItems)
    .map((item) => toTrimmedString(item, maxItemLength))
    .filter((item): item is string => Boolean(item));

  return normalized.length ? normalized : null;
}

function normalizeEstimateLineItems(value: unknown): Array<{ key: string; label: string; amount: number }> | null {
  if (!Array.isArray(value)) return null;

  const normalized = value
    .slice(0, 20)
    .map((item) => {
      if (!isPlainObject(item)) return null;

      const key = toTrimmedString(item.key, 80);
      const label = toTrimmedString(item.label, 160);
      const amount = toNonNegativeInteger(item.amount);
      if (!key || !label || amount === null) return null;
      return { key, label, amount };
    })
    .filter((item): item is { key: string; label: string; amount: number } => Boolean(item));

  return normalized.length ? normalized : null;
}

function normalizeEstimatorSnapshot(value: unknown) {
  if (!isPlainObject(value)) return null;

  const normalized = {
    currency: toTrimmedString(value.currency, 10),
    basePackageCost: toNonNegativeInteger(value.base_package_cost),
    extraPagesCount: toNonNegativeInteger(value.extra_pages_count),
    extraPagesCost: toNonNegativeInteger(value.extra_pages_cost),
    bookingIntegration: toBooleanOrNull(value.booking_integration),
    advancedContactForms: toBooleanOrNull(value.advanced_contact_forms),
    basicSeoSetup: toBooleanOrNull(value.basic_seo_setup),
    copywritingAssistance: toBooleanOrNull(value.copywriting_assistance),
    cmsBlogCapability: toBooleanOrNull(value.cms_blog_capability),
    ecommerceStarter: toBooleanOrNull(value.ecommerce_starter),
    deliverySpeed: toDeliverySpeed(value.delivery_speed),
    rushSurcharge: toNonNegativeInteger(value.rush_surcharge),
    subtotal: toNonNegativeInteger(value.subtotal),
    total: toNonNegativeInteger(value.total),
    monthlyCarePlanSelected: toBooleanOrNull(value.monthly_care_plan_selected),
    monthlyCarePlanCost: toNonNegativeInteger(value.monthly_care_plan_cost),
    selectedOptionCount: toNonNegativeInteger(value.selected_option_count),
    lineItems: normalizeEstimateLineItems(value.line_items),
  };

  const hasAnyValue = Object.values(normalized).some((field) => field !== null);
  return hasAnyValue ? normalized : null;
}

function hasMissingColumns(errorMessage: string, columns: string[]): boolean {
  return columns.some((columnName) => errorMessage.includes(columnName));
}

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ ok: false, error: "Method not allowed" }), { status: 405 });
  }

  try {
    const projectUrl = Deno.env.get("SUPABASE_URL") ?? Deno.env.get("PROJECT_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? Deno.env.get("SERVICE_ROLE_KEY");

    if (!projectUrl || !serviceRoleKey) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing required server env vars" }),
        { status: 500 }
      );
    }

    const body = await req.json();

    if (!body?.name || !body?.businessName || !body?.phone) {
      return new Response(JSON.stringify({ ok: false, error: "Missing required fields" }), { status: 400 });
    }

    const supabase = createClient(
      projectUrl,
      serviceRoleKey
    );

    const baseLead = {
      name: String(body.name).trim(),
      business_name: String(body.businessName).trim(),
      phone: String(body.phone).trim(),
      message: body.message ? String(body.message).trim() : null,
      source_url: body.sourceUrl ? String(body.sourceUrl).trim() : null,
      submitted_at: body.submittedAt ?? new Date().toISOString(),
      user_agent: body.userAgent ?? null,
      referer: body.referer ?? null,
      utm_source: body.utm_source ?? null,
      utm_medium: body.utm_medium ?? null,
      utm_campaign: body.utm_campaign ?? null,
      utm_content: body.utm_content ?? null,
      utm_term: body.utm_term ?? null,
    };

    const estimatorLead = {
      estimator_breakdown: body.estimator_breakdown ?? null,
      estimator_total: toNonNegativeInteger(body.estimator_total),
      selected_addons: normalizeStringArray(body.selected_addons),
      monthly_care_plan: toNonNegativeInteger(body.monthly_care_plan),
    };

    const estimatorSnapshot = normalizeEstimatorSnapshot(body.estimator_snapshot);
    const extendedLead = {
      preferred_launch_window: toLaunchWindow(body.preferred_launch_window),
      estimate_currency: estimatorSnapshot?.currency ?? null,
      estimate_base_package: estimatorSnapshot?.basePackageCost ?? null,
      estimate_extra_pages: estimatorSnapshot?.extraPagesCount ?? null,
      estimate_extra_pages_cost: estimatorSnapshot?.extraPagesCost ?? null,
      estimate_booking_integration: estimatorSnapshot?.bookingIntegration ?? null,
      estimate_advanced_contact_forms: estimatorSnapshot?.advancedContactForms ?? null,
      estimate_basic_seo_setup: estimatorSnapshot?.basicSeoSetup ?? null,
      estimate_copywriting_assistance: estimatorSnapshot?.copywritingAssistance ?? null,
      estimate_cms_blog_capability: estimatorSnapshot?.cmsBlogCapability ?? null,
      estimate_ecommerce_starter: estimatorSnapshot?.ecommerceStarter ?? null,
      estimate_delivery_speed: estimatorSnapshot?.deliverySpeed ?? null,
      estimate_rush_surcharge: estimatorSnapshot?.rushSurcharge ?? null,
      estimate_subtotal: estimatorSnapshot?.subtotal ?? null,
      estimate_total: estimatorSnapshot?.total ?? estimatorLead.estimator_total,
      estimate_monthly_care_plan_selected: estimatorSnapshot?.monthlyCarePlanSelected ?? null,
      estimate_monthly_care_plan_cost:
        estimatorSnapshot?.monthlyCarePlanCost ?? estimatorLead.monthly_care_plan,
      estimate_selected_option_count:
        estimatorSnapshot?.selectedOptionCount ?? estimatorLead.selected_addons?.length ?? null,
      estimate_line_items: estimatorSnapshot?.lineItems ?? null,
    };

    const leadWithEstimator = {
      ...baseLead,
      ...estimatorLead,
    };

    let { error } = await supabase.from("leads").insert({
      ...leadWithEstimator,
      ...extendedLead,
    });

    if (error && typeof error.message === "string") {
      if (hasMissingColumns(error.message, EXTENDED_LEAD_COLUMNS)) {
        const fallbackWithoutExtendedColumns = await supabase.from("leads").insert(leadWithEstimator);
        error = fallbackWithoutExtendedColumns.error;
      }
    }

    if (error && typeof error.message === "string") {
      const missingEstimatorColumns = hasMissingColumns(error.message, ESTIMATOR_COLUMNS);

      if (missingEstimatorColumns) {
        const fallback = await supabase.from("leads").insert(baseLead);
        error = fallback.error;
      }
    }

    if (error) throw error;

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: String(err) }), { status: 500 });
  }
});
