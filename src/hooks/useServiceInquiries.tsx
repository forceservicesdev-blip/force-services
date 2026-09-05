import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export interface ServiceInquiryInsert {
  service_name: string;
  full_name: string;
  phone: string;
  note?: string | null;
  user_id?: string | null;
}

// Create service inquiry
export const useCreateServiceInquiry = () => {
  return useMutation({
    mutationFn: async (inquiry: ServiceInquiryInsert) => {
      // In a pure landing page without database, email notification is sent via sendFormEmail
      return { success: true, inquiry };
    },
    onSuccess: () => {
      toast.success("Inquiry submitted successfully! We'll contact you soon.");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to submit inquiry. Please try again.");
    },
  });
};
