import { useCaseStudies } from "@/hooks/use-content";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, UserCircle2 } from "lucide-react";

export default function Blog() {
  const { data: studies, isLoading } = useCaseStudies();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gradient-to-br from-accent to-primary/80 text-white py-24">
        <div className="container-padding">
           <SectionHeader 
             title="Case Studies" 
             subtitle="Real-world examples of how we've helped cities and corporations transform."
             light
           />
        </div>
      </div>

      <div className="container-padding py-20">
         {isLoading ? (
           <p>Loading...</p>
         ) : (
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {studies?.map(study => (
               <Card key={study.id} className="group overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow border-border">
                 <div className="h-48 overflow-hidden bg-muted relative">
                   {study.imageUrl ? (
                     <img 
                       src={study.imageUrl} 
                       alt={study.title} 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                     />
                   ) : (
                     <div className="w-full h-full bg-secondary flex items-center justify-center text-muted-foreground font-bold">
                       CASE STUDY
                     </div>
                   )}
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider text-primary">
                     {study.clientName}
                   </div>
                 </div>
                 <div className="p-6 flex flex-col flex-grow">
                   <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
                     {study.title}
                   </h3>
                   <p className="text-muted-foreground text-sm mb-6 flex-grow">{study.summary}</p>
                   
                   <div className="pt-6 border-t mt-auto">
                     <div className="flex items-center gap-3 mb-4">
                       <UserCircle2 className="h-8 w-8 text-muted-foreground" />
                       <div className="text-xs">
                         <p className="font-bold text-foreground">Project Lead</p>
                         <p className="text-muted-foreground">{study.projectManagerName || 'Metropolitan Team'}</p>
                       </div>
                     </div>
                     <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                       View Case Study
                     </Button>
                   </div>
                 </div>
               </Card>
             ))}
           </div>
         )}
      </div>

      <div className="bg-secondary/30 py-20 text-center">
        <div className="container-padding">
          <h2 className="text-2xl font-bold font-heading mb-6">Explore More</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our portfolio extends across seven major divisions and three continents. Discover how our diverse expertise comes together.
          </p>
          <Button size="lg" className="font-semibold" asChild>
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
