export interface Project {
  id: string;
  name: string;
  description?: string;
  status: "active" | "archived" | "draft";
  created_at: string;
}

export interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
}

export type ApiResponse<T> = {
  data?: T;
  error?: string;
  status: number;
};