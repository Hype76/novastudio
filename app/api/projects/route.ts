import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-browser";

export async function GET() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const supabase = createClient();
  const body = await req.json();

  const { data, error } = await supabase
    .from("projects")
    .insert({
      name: body.name,
      description: body.description ?? "",
      status: "active",
    })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });

  return NextResponse.json(data);
}
