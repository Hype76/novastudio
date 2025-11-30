import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-browser";

export async function PATCH(req: Request, { params }: any) {
  const supabase = createClient();
  const body = await req.json();

  const { data, error } = await supabase
    .from("projects")
    .update(body)
    .eq("id", params.id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });

  return NextResponse.json(data);
}

export async function DELETE(req: Request, { params }: any) {
  const supabase = createClient();

  const { error } = await supabase
    .from("projects")
    .delete()
    .eq("id", params.id);

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });

  return NextResponse.json({ success: true });
}
