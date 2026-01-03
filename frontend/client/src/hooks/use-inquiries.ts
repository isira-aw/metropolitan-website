import { useMutation } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubmitInquiry() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const validated = api.inquiries.submit.input.parse(data);
      const res = await fetch(api.inquiries.submit.path, {
        method: api.inquiries.submit.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
           const error = api.inquiries.submit.responses[400].parse(await res.json());
           throw new Error(error.message);
        }
        throw new Error('Failed to submit inquiry');
      }
      return api.inquiries.submit.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent",
        description: "We have received your message and will contact you shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  });
}
