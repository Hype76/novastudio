import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";

export async function GET() {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Mock data - in real app query supabase
  const mockProjects = [
    { id: "1", name: "Project Alpha", status: "active" },
    { id: "2", name: "Project Beta", status: "draft" },
  ];

  return NextResponse.json({ data: mockProjects });
}

export async function POST(request: Request) {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  
  // Logic to insert into DB would go here
  
  return NextResponse.json({ 
    message: "Project created successfully", 
    data: { id: "new-id", ...body } 
  }, { status: 201 });
}