import { useSubmitInquiry } from "@/hooks/use-inquiries";
import { usePartners } from "@/hooks/use-content";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type InsertInquiry } from "@shared/routes";
import { 
  Building2, 
  Users, 
  Globe, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Leaf, 
  LineChart 
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { mutate: submitInquiry, isPending } = useSubmitInquiry();
  const { data: partners } = usePartners();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(api.inquiries.submit.input),
  });

  const onSubmit = (data: InsertInquiry) => {
    submitInquiry(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-accent">
        <div className="absolute inset-0 z-0 opacity-40">
           {/* Corporate skyscraper background */}
           <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Corporate skyscraper background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent/60 z-10" />
        
        <div className="container-padding relative z-20 text-center text-white space-y-8 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
              Building the <span className="text-primary">Future</span> of Urban Living
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 font-light max-w-2xl mx-auto">
              We provide integrated solutions for metropolitan development, smart infrastructure, and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 h-auto bg-primary hover:bg-primary/90">
                Explore Solutions
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto border-white text-white hover:bg-white hover:text-accent">
                Our Vision
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 bg-background">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader 
                title="Our Vision" 
                subtitle="To be the global benchmark for integrated urban development solutions, fostering sustainable and thriving communities."
                align="left"
              />
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  At Metropolitan, we see beyond concrete and steel. We see the heartbeat of cities, the flow of commerce, and the lives of people who inhabit these spaces.
                </p>
                <p>
                  Our mission is to bridge the gap between innovation and infrastructure, creating smart ecosystems that empower businesses and enhance quality of life.
                </p>
                <Button variant="link" className="pl-0 text-primary font-bold text-lg">
                  Learn more about us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl -z-10 rotate-3" />
              {/* Modern office meeting */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Team collaborating on vision" 
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary/50">
        <div className="container-padding">
          <SectionHeader 
            title="Why Choose Us" 
            subtitle="We deliver excellence through a combination of expertise, innovation, and dedication."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: ShieldCheck, title: "Reliability", desc: "Proven track record of delivering projects on time and budget." },
              { icon: Leaf, title: "Sustainability", desc: "Eco-friendly solutions integrated into every phase of development." },
              { icon: LineChart, title: "Innovation", desc: "Cutting-edge technology driving smart city infrastructure." },
              { icon: Users, title: "Community", desc: "People-centric approach focused on improving quality of life." }
            ].map((item, i) => (
              <div key={i} className="bg-background p-8 rounded-xl shadow-lg border border-border hover:border-primary transition-all hover:-translate-y-1 group">
                <div className="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-accent">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Carousel */}
      <section className="py-16 border-y bg-background">
        <div className="container-padding">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-10">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Using Lucide icons as placeholder logos for a cleaner look */}
             <div className="flex items-center gap-2 text-2xl font-bold"><Globe className="h-8 w-8" /> GlobalCorp</div>
             <div className="flex items-center gap-2 text-2xl font-bold"><Building2 className="h-8 w-8" /> BuildTech</div>
             <div className="flex items-center gap-2 text-2xl font-bold"><Briefcase className="h-8 w-8" /> FinGroup</div>
             <div className="flex items-center gap-2 text-2xl font-bold"><Leaf className="h-8 w-8" /> EcoSys</div>
             {partners?.map(p => (
               <div key={p.id} className="font-bold text-xl">{p.name}</div>
             ))}
          </div>
        </div>
      </section>

      {/* Solutions / Platforms */}
      <section id="solutions" className="py-24 bg-accent text-white">
        <div className="container-padding">
          <SectionHeader 
            title="Our Platforms & Solutions" 
            subtitle="Comprehensive ecosystems designed for the modern metropolis."
            light
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Smart Infrastructure", desc: "IoT-enabled management for city utilities and services." },
              { title: "Urban Logistics", desc: "Optimized transportation networks for seamless movement." },
              { title: "Green Energy", desc: "Renewable power integration for sustainable city growth." },
              { title: "Digital Governance", desc: "Secure platforms for citizen engagement and services." },
              { title: "Commercial Real Estate", desc: "Premium office spaces designed for productivity." },
              { title: "Public Safety", desc: "Advanced monitoring and response systems." }
            ].map((sol, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 font-heading">{sol.title}</h3>
                <p className="text-white/70">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 bg-background">
        <div className="container-padding max-w-4xl">
          <div className="bg-secondary/30 rounded-3xl p-8 md:p-12 border border-border shadow-xl">
            <SectionHeader 
              title="Start a Conversation" 
              subtitle="Ready to transform your vision into reality? Submit an inquiry and our team will get back to you."
            />
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input {...form.register("name")} placeholder="John Doe" className="bg-white" />
                  {form.formState.errors.name && <p className="text-destructive text-sm">{form.formState.errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input {...form.register("email")} type="email" placeholder="john@company.com" className="bg-white" />
                  {form.formState.errors.email && <p className="text-destructive text-sm">{form.formState.errors.email.message}</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input {...form.register("subject")} placeholder="Project Inquiry: Smart City Initiative" className="bg-white" />
                {form.formState.errors.subject && <p className="text-destructive text-sm">{form.formState.errors.subject.message}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea {...form.register("message")} placeholder="Tell us about your project requirements..." className="min-h-[120px] bg-white" />
                {form.formState.errors.message && <p className="text-destructive text-sm">{form.formState.errors.message.message}</p>}
              </div>

              <Button type="submit" size="lg" className="w-full font-bold text-lg" disabled={isPending}>
                {isPending ? "Sending..." : "Submit Inquiry"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
