import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useSubmitInquiry } from "@/hooks/use-inquiries";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type InsertInquiry } from "@shared/routes";

export default function Contact() {
  const { mutate, isPending } = useSubmitInquiry();
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(api.inquiries.submit.input),
  });

  const onSubmit = (data: InsertInquiry) => {
    mutate(data, { onSuccess: () => form.reset() });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-accent text-white py-20">
        <div className="container-padding">
           <SectionHeader title="Contact Us" subtitle="Get in touch with our global headquarters." light />
        </div>
      </div>

      <div className="container-padding py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="space-y-8">
            <Card className="p-6 space-y-4 border-l-4 border-l-primary">
              <h3 className="font-heading font-bold text-lg">Headquarters</h3>
              <div className="flex gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <p>123 Corporate Blvd, Suite 500<br />Metropolis City, MC 10001</p>
              </div>
            </Card>

            <Card className="p-6 space-y-4 border-l-4 border-l-primary">
              <h3 className="font-heading font-bold text-lg">Contact Info</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex gap-3">
                   <Phone className="h-5 w-5 text-primary shrink-0" />
                   <p>+1 (555) 123-4567</p>
                </div>
                <div className="flex gap-3">
                   <Mail className="h-5 w-5 text-primary shrink-0" />
                   <p>info@metropolitan.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4 border-l-4 border-l-primary">
              <h3 className="font-heading font-bold text-lg">Business Hours</h3>
              <div className="flex gap-3 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat - Sun: Closed</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-border">
            <h3 className="text-2xl font-bold font-heading mb-6">Send us a Message</h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input {...form.register("name")} placeholder="Your Name" />
                  {form.formState.errors.name && <p className="text-red-500 text-xs">{form.formState.errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input {...form.register("email")} type="email" placeholder="email@company.com" />
                  {form.formState.errors.email && <p className="text-red-500 text-xs">{form.formState.errors.email.message}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input {...form.register("subject")} placeholder="Reason for inquiry" />
                {form.formState.errors.subject && <p className="text-red-500 text-xs">{form.formState.errors.subject.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea {...form.register("message")} className="min-h-[150px]" placeholder="How can we help you?" />
                {form.formState.errors.message && <p className="text-red-500 text-xs">{form.formState.errors.message.message}</p>}
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isPending}>
                {isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}
