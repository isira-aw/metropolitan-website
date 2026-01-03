import { useJobs, useApplyJob } from "@/hooks/use-jobs";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type InsertJobApplication } from "@shared/routes";
import { MapPin, Briefcase, Clock, Building, User } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";

export default function Careers() {
  const { data: jobs, isLoading } = useJobs();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <div className="bg-primary/5 py-20">
        <div className="container-padding">
          <SectionHeader 
            title="Join Our Team" 
            subtitle="Build the future with us. We are always looking for talented individuals to join our mission."
          />
        </div>
      </div>

      <div className="container-padding py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold font-heading mb-6 text-accent">Open Positions</h2>
          {isLoading ? (
            <p className="text-muted-foreground">Loading positions...</p>
          ) : (
            jobs?.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          )}
          {jobs?.length === 0 && (
             <p className="text-muted-foreground italic">No open positions at the moment. Please check back later.</p>
          )}
        </div>

        {/* HR Sidebar */}
        <div className="space-y-8">
           <div className="bg-white p-6 rounded-xl border shadow-sm sticky top-24">
             <h3 className="text-xl font-bold font-heading mb-4 flex items-center gap-2 text-accent">
               <User className="h-5 w-5 text-primary" /> HR Contact
             </h3>
             <p className="text-muted-foreground mb-6 text-sm">
               Questions about our hiring process or culture? Reach out to our HR team directly.
             </p>
             <div className="space-y-4">
               <div>
                 <p className="font-semibold text-sm">Head of Talent</p>
                 <p className="text-primary font-bold">Sarah Jenkins</p>
               </div>
               <div>
                 <p className="font-semibold text-sm">Email</p>
                 <a href="mailto:careers@metropolitan.com" className="text-primary hover:underline">careers@metropolitan.com</a>
               </div>
               <div>
                 <p className="font-semibold text-sm">Phone</p>
                 <p className="text-muted-foreground">+1 (555) 234-5678</p>
               </div>
             </div>
           </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function JobCard({ job }: { job: any }) {
  const [open, setOpen] = useState(false);
  const { mutate: apply, isPending } = useApplyJob();
  
  const form = useForm<Omit<InsertJobApplication, 'jobId'>>({
    resolver: zodResolver(api.jobs.apply.input),
  });

  const onSubmit = (data: any) => {
    apply({ jobId: job.id, data }, {
      onSuccess: () => {
        setOpen(false);
        form.reset();
      }
    });
  };

  return (
    <Card className="p-6 hover:border-primary/50 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-accent">{job.title}</h3>
          <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> {job.department}</span>
            <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> Posted {job.postedAt ? format(new Date(job.postedAt), 'MMM d') : ''}</span>
          </div>
        </div>
        
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
             <Button>Apply Now</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Apply for {job.title}</DialogTitle>
            </DialogHeader>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
               <div className="space-y-2">
                 <label className="text-sm font-medium">Full Name</label>
                 <Input {...form.register("fullName")} />
                 {form.formState.errors.fullName && <p className="text-red-500 text-xs">{form.formState.errors.fullName.message}</p>}
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-medium">Email</label>
                 <Input {...form.register("email")} type="email" />
                 {form.formState.errors.email && <p className="text-red-500 text-xs">{form.formState.errors.email.message}</p>}
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-medium">Phone</label>
                 <Input {...form.register("phone")} />
                 {form.formState.errors.phone && <p className="text-red-500 text-xs">{form.formState.errors.phone.message}</p>}
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-medium">Resume Link (LinkedIn / Portfolio)</label>
                 <Input {...form.register("resumeLink")} placeholder="https://..." />
                 {form.formState.errors.resumeLink && <p className="text-red-500 text-xs">{form.formState.errors.resumeLink.message}</p>}
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-medium">Cover Letter</label>
                 <Textarea {...form.register("coverLetter")} placeholder="Tell us why you're a fit..." />
               </div>
               <Button type="submit" className="w-full" disabled={isPending}>
                 {isPending ? "Submitting..." : "Submit Application"}
               </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mt-4 pt-4 border-t">
        <p className="text-sm text-muted-foreground line-clamp-2">{job.description}</p>
      </div>
    </Card>
  );
}
