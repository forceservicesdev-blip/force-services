import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export interface JobApplicationInsert {
  career_id?: string | null;
  job_title: string;
  full_name: string;
  email: string;
  phone: string;
  current_company?: string | null;
  linkedin_url?: string | null;
  cv_link?: string | null;
  note?: string | null;
}

// Create job application
export const useCreateJobApplication = () => {
  return useMutation({
    mutationFn: async (application: JobApplicationInsert) => {
      // In a pure landing page without database, the form email notification is handled by sendFormEmail
      return { success: true, application };
    },
    onSuccess: () => {
      toast.success("Application submitted successfully! We will review and contact you soon.");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to submit application. Please try again.");
    },
  });
};
