import { useQuery, useMutation } from "@tanstack/react-query";
import { api, buildUrl, type InsertJobApplication } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useJobs() {
  return useQuery({
    queryKey: [api.jobs.list.path],
    queryFn: async () => {
      const res = await fetch(api.jobs.list.path);
      if (!res.ok) throw new Error('Failed to fetch jobs');
      return api.jobs.list.responses[200].parse(await res.json());
    },
  });
}

export function useJob(id: number) {
  return useQuery({
    queryKey: [api.jobs.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.jobs.get.path, { id });
      const res = await fetch(url);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error('Failed to fetch job');
      return api.jobs.get.responses[200].parse(await res.json());
    },
    enabled: !!id,
  });
}

export function useApplyJob() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async ({ jobId, data }: { jobId: number, data: Omit<InsertJobApplication, 'jobId'> }) => {
      const url = buildUrl(api.jobs.apply.path, { id: jobId });
      const validated = api.jobs.apply.input.parse(data);
      
      const res = await fetch(url, {
        method: api.jobs.apply.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
           const error = api.jobs.apply.responses[400].parse(await res.json());
           throw new Error(error.message);
        }
        throw new Error('Failed to submit application');
      }
      return api.jobs.apply.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted",
        description: "Your application has been received successfully.",
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
