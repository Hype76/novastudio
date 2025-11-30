import { supabase } from "@/lib/supabase-browser";

export async function getProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .neq("status", "archived")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}

export async function createProject(name: string, description?: string) {
  const { data, error } = await supabase
    .from("projects")
    .insert([{ name, description, status: "active" }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateProject(id: string, updates: any) {
  const { data, error } = await supabase
    .from("projects")
    .update({ ...updates, updated_at: new Date() })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function archiveProject(id: string) {
  const { data, error } = await supabase
    .from("projects")
    .update({ status: "archived", updated_at: new Date() })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}
