import { useDivisionBySlug } from "@/hooks/use-content";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { useRoute } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";

export default function Division() {
  const [, params] = useRoute("/divisions/:slug");
  const slug = params?.slug || "";
  const { data, isLoading } = useDivisionBySlug(slug);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading division...</div>;
  if (!data) return <div className="min-h-screen flex items-center justify-center">Division not found</div>;

  const { division, services, testimonials, projects, partners } = data;

  // Dynamic Icon Renderer
  const Icon = ({ name, className }: { name: string, className?: string }) => {
    // @ts-ignore
    const LucideIcon = Icons[name] || Icons.HelpCircle;
    return <LucideIcon className={className} />;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-accent">
        {division.heroImageUrl && (
          <div className="absolute inset-0 z-0 opacity-40">
            <img src={division.heroImageUrl} alt={division.name} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/60 to-transparent z-10" />
        
        <div className="container-padding relative z-20 text-center text-white max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur mb-6 text-sm font-bold tracking-wider uppercase">
              Metropolitan Divisions
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">{division.name}</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">{division.description}</p>
            <Button size="lg" className="bg-white text-accent hover:bg-white/90 font-bold" asChild>
              <Link href="#contact">Contact This Division</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container-padding">
          <SectionHeader title="Our Specialized Services" subtitle={`Expert solutions provided by the ${division.name} division.`} />
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary/30 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  <Icon name={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading text-accent">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Portfolio */}
      <section className="py-24 bg-secondary/50">
        <div className="container-padding">
           <SectionHeader title="Featured Projects" subtitle="A showcase of our recent accomplishments and milestones." align="left" />
           
           <div className="grid md:grid-cols-2 gap-10">
             {projects.map((project) => (
               <div key={project.id} className="group relative overflow-hidden rounded-2xl bg-black">
                 <div className="aspect-video opacity-80 group-hover:opacity-60 transition-opacity">
                   {project.imageUrl ? (
                     <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   ) : (
                     <div className="w-full h-full bg-accent" />
                   )}
                 </div>
                 <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                   <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                   <p className="text-white/80 line-clamp-2">{project.description}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
         {/* Decorative background pattern */}
         <div className="absolute inset-0 opacity-10">
           <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
           </svg>
         </div>

         <div className="container-padding relative z-10">
            <SectionHeader title="Client Success Stories" subtitle="What our partners say about working with us." light />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {testimonials.map((t) => (
                <Card key={t.id} className="bg-white/10 border-white/20 text-white p-8 backdrop-blur-sm">
                   <div className="flex gap-1 mb-4 text-yellow-400">
                     {[...Array(t.rating)].map((_, i) => <Icons.Star key={i} className="fill-current h-4 w-4" />)}
                   </div>
                   <p className="italic text-lg mb-6 opacity-90">"{t.content}"</p>
                   <div>
                     <p className="font-bold">{t.clientName}</p>
                     <p className="text-sm opacity-70">{t.company}</p>
                   </div>
                </Card>
              ))}
            </div>
         </div>
      </section>

      {/* Division Partners */}
      <section className="py-16 bg-white">
        <div className="container-padding text-center">
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-10">Strategic Partners</p>
          <div className="flex flex-wrap justify-center gap-16 grayscale opacity-70">
            {partners.map(p => (
              <div key={p.id} className="flex flex-col items-center gap-2">
                 {/* Placeholder for logo */}
                 <div className="h-12 w-12 bg-muted rounded-full flex items-center justify-center font-bold text-xs">{p.name[0]}</div>
                 <span className="font-bold">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specific Contact */}
      <section id="contact" className="py-24 bg-accent text-white text-center">
        <div className="container-padding max-w-2xl">
           <h2 className="text-3xl font-bold font-heading mb-6 text-white">Partner with {division.name}</h2>
           <p className="text-xl text-white/80 mb-8">
             Have a project in mind? Our specialized team is ready to deliver tailored solutions for your needs.
           </p>
           <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 h-auto text-lg font-bold shadow-xl shadow-primary/25" asChild>
             <Link href="/contact">Contact Our Team</Link>
           </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
