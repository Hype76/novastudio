// app/api/projects/route.ts
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase-browser";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .neq("status", "archived")
      .order("created_at", { ascending: false });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, description } = body;

    const { data, error } = await supabase
      .from("projects")
      .insert([
        { name, description, status: "active" }
      ])
      .select()
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
