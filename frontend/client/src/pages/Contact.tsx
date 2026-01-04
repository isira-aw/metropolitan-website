import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useSubmitInquiry } from "@/hooks/use-inquiries";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type InsertInquiry } from "@shared/routes";
import { DIVISIONS } from "@/lib/constants";
import { motion } from "framer-motion";

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

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-accent">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Contact hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-accent/80 to-accent/90 z-10" />

        <div className="container-padding relative z-20 text-center text-white space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-4">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
              Get in touch with our global headquarters or division-specific teams
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-padding py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="space-y-8">
            <Card className="p-6 space-y-4 border-l-4 border-l-primary">
              <h3 className="font-heading font-bold text-lg text-accent">Headquarters</h3>
              <div className="flex gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <p>123 Corporate Blvd, Suite 500<br />Metropolis City, MC 10001</p>
              </div>
            </Card>

            <Card className="p-6 space-y-4 border-l-4 border-l-primary">
              <h3 className="font-heading font-bold text-lg text-accent">Contact Info</h3>
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
              <h3 className="font-heading font-bold text-lg text-accent">Business Hours</h3>
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
            <h3 className="text-2xl font-bold font-heading mb-6 text-accent">Send us a Message</h3>
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

        {/* Division-wise Contact Details */}
        <div className="mt-16">
          <SectionHeader
            title="Division Contacts"
            subtitle="Reach out to our specialized teams directly"
          />

          <Accordion type="single" collapsible className="mt-8 space-y-4">
            {DIVISIONS.map((division, index) => (
              <AccordionItem
                key={division.id}
                value={`division-${division.id}`}
                className="bg-secondary/30 border border-border rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-secondary/50 transition-colors">
                  <span className="text-lg font-bold text-accent">{division.name}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-background">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex gap-3">
                      <Mail className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-sm text-muted-foreground mb-1">Email</p>
                        <p className="text-accent">{division.slug}@metropolitan.com</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Phone className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-sm text-muted-foreground mb-1">Phone</p>
                        <p className="text-accent">+1 (555) {100 + index}0-{1000 + division.id * 111}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-sm text-muted-foreground mb-1">Office</p>
                        <p className="text-accent">Floor {division.id + 2}, Metropolitan Tower</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <Footer />
    </div>
  );
}
