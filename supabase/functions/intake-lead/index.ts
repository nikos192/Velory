import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

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

    const { error } = await supabase.from("leads").insert({
      name: String(body.name).trim(),
      business_name: String(body.businessName).trim(),
      phone: String(body.phone).trim(),
      message: body.message ? String(body.message).trim() : null,
      source_url: body.sourceUrl ? String(body.sourceUrl).trim() : null,
      submitted_at: body.submittedAt ?? new Date().toISOString(),
      user_agent: body.userAgent ?? null,
      referer: body.referer ?? null
    });

    if (error) throw error;

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: String(err) }), { status: 500 });
  }
});
