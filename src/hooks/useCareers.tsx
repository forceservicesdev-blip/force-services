import { useQuery } from "@tanstack/react-query";
import { CAREERS_DATA, type Career } from "@/data/careers";

export type { Career };
export type CareerInsert = Omit<Career, "id" | "created_at" | "updated_at">;
export type CareerUpdate = Partial<CareerInsert>;

// Fetch all active careers (static data / offline-ready)
export const useCareers = () => {
  return useQuery({
    queryKey: ["careers", "active"],
    queryFn: async () => {
      return CAREERS_DATA.filter((c) => c.is_active !== false);
    },
  });
};

// Fetch single career by slug
export const useCareerBySlug = (slug: string | undefined) => {
  return useQuery({
    queryKey: ["careers", "slug", slug],
    queryFn: async () => {
      if (!slug) return null;
      const job = CAREERS_DATA.find((c) => c.slug === slug);
      return job || null;
    },
    enabled: !!slug,
  });
};

// Fetch single career by ID
export const useCareer = (id: string) => {
  return useQuery({
    queryKey: ["careers", id],
    queryFn: async () => {
      const job = CAREERS_DATA.find((c) => c.id === id);
      return job || null;
    },
    enabled: !!id,
  });
};

// Fetch all careers
export const useAllCareers = () => {
  return useQuery({
    queryKey: ["careers", "all"],
    queryFn: async () => {
      return CAREERS_DATA;
    },
  });
};
