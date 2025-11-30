"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CreateProjectForm({
  onCreated,
}: {
  onCreated: (id: string) => void;
}) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("active");
  const [loading, setLoading] = useState(false);

  async function create() {
    setLoading(true);

    const res = await fetch("/api/projects/create", {
      method: "POST",
      body: JSON.stringify({ name, status }),
    });

    const data = await res.json();

    setLoading(false);

    if (data.id) onCreated(data.id);
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <label className="text-sm font-medium">Project Name</label>
        <input
          className="w-full px-3 py-2 rounded-md border bg-background"
          placeholder="My AI Platform"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Status</label>
        <select
          className="w-full px-3 py-2 rounded-md border bg-background"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="active">Active</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      <Button onClick={create} disabled={loading || !name} className="w-full">
        {loading ? "Creating..." : "Create Project"}
      </Button>
    </div>
  );
}
