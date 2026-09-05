import { useQuery } from "@tanstack/react-query";
import { BLOGS_DATA, type Blog } from "@/data/blogs";

export type { Blog };
export type BlogInsert = Omit<Blog, "id" | "created_at" | "updated_at">;
export type BlogUpdate = Partial<BlogInsert>;

// Fetch all published blogs (static data / offline-ready)
export const usePublishedBlogs = () => {
  return useQuery({
    queryKey: ["blogs", "published"],
    queryFn: async () => {
      return BLOGS_DATA.filter((b) => b.published !== false);
    },
  });
};

// Fetch single blog by slug
export const useBlog = (slug: string) => {
  return useQuery({
    queryKey: ["blogs", slug],
    queryFn: async () => {
      const post = BLOGS_DATA.find((b) => b.slug === slug);
      return post || null;
    },
    enabled: !!slug,
  });
};

// Fetch all blogs
export const useAllBlogs = () => {
  return useQuery({
    queryKey: ["blogs", "all"],
    queryFn: async () => {
      return BLOGS_DATA;
    },
  });
};
