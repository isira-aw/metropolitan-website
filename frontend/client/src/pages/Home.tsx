import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES, ICON_MAP, DIVISIONS } from "@/lib/constants";
import { useSubmitInquiry } from "@/hooks/use-inquiries";
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
  LineChart,
  Star,
  Calendar,
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Home() {
  const { mutate: submitInquiry, isPending } = useSubmitInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(api.inquiries.submit.input),
  });

  const onSubmit = (data: InsertInquiry) => {
    submitInquiry(data, {
      onSuccess: () => form.reset(),
    });
  };

  // Mock case studies for preview (in production, fetch latest 3-4 from API)
  const latestCaseStudies = [
    {
      id: 1,
      title: "Smart City Infrastructure - Dubai Metro Expansion",
      summary: "Implemented IoT-enabled metro system serving 2M+ daily commuters.",
      imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
      division: "Smart Infrastructure",
      createdAt: "2024-10-15"
    },
    {
      id: 2,
      title: "Sustainable Urban Development - Singapore Green District",
      summary: "50-acre mixed-use development achieving LEED Platinum certification.",
      imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop",
      division: "Urban Development",
      createdAt: "2024-09-20"
    },
    {
      id: 3,
      title: "Renewable Energy Grid - Los Angeles Solar Initiative",
      summary: "100MW solar farm with battery storage powering 25,000 homes.",
      imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
      division: "Green Energy",
      createdAt: "2024-08-10"
    },
  ];

  const testimonials = [
    {
      quote: "Metropolitan transformed our city's infrastructure with cutting-edge smart solutions. Outstanding results!",
      author: "Sarah Johnson",
      position: "City Planning Director, Dubai",
      rating: 5
    },
    {
      quote: "Their commitment to sustainability and innovation makes them the ideal partner for green development.",
      author: "Michael Chen",
      position: "CEO, Singapore Urban Development",
      rating: 5
    },
    {
      quote: "Professional, reliable, and results-driven. Metropolitan exceeded all our expectations.",
      author: "Emily Rodriguez",
      position: "Commissioner, LA Department of Energy",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-accent">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Corporate skyscraper background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent/60 z-10" />

        <div className="container-padding relative z-20 text-center text-white space-y-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg md:text-xl text-white/80 mb-4 uppercase tracking-wider font-semibold">
              Welcome to Metropolitan
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
              Building the <span className="text-primary">Future</span> of Urban Living
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 font-light max-w-3xl mx-auto">
              We provide integrated solutions for metropolitan development, smart infrastructure, and sustainable growth across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 h-auto bg-primary hover:bg-primary/90" asChild>
                <Link href="/about">Explore Solutions</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 h-auto border-white text-white hover:bg-white hover:text-accent"
                asChild
              >
                <Link href="/about">Our Vision</Link>
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
                <Button variant="link" className="pl-0 text-primary font-bold text-lg" asChild>
                  <Link href="/about">
                    Learn more about us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl -z-10 rotate-3" />
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
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl shadow-lg border border-border hover:border-primary transition-all hover:-translate-y-1 group"
              >
                <div className="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-accent">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands & Customers */}
      <section className="py-16 border-y bg-background">
        <div className="container-padding">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-10">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Globe className="h-8 w-8" /> GlobalCorp
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Building2 className="h-8 w-8" /> BuildTech
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Briefcase className="h-8 w-8" /> FinGroup
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Leaf className="h-8 w-8" /> EcoSys
            </div>
          </div>
        </div>
      </section>

      {/* Our Platforms & Services */}
      <section id="solutions" className="py-24 bg-accent text-white">
        <div className="container-padding">
          <SectionHeader
            title="Our Platforms & Solutions"
            subtitle="Comprehensive ecosystems designed for the modern metropolis."
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {SERVICES.map((service) => {
              const IconComponent = ICON_MAP[service.icon];
              return (
                <div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                >
                  <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mb-4 text-white">
                    {IconComponent && <IconComponent className="h-6 w-6" />}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading">{service.title}</h3>
                  <p className="text-white/70">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24 bg-secondary/30">
        <div className="container-padding">
          <SectionHeader
            title="Featured Case Studies"
            subtitle="Explore our latest projects transforming cities worldwide"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {latestCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-xl overflow-hidden border border-border hover:border-primary transition-all hover:shadow-xl group"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={caseStudy.imageUrl}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {caseStudy.division}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-accent mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{caseStudy.summary}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(caseStudy.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/case-studies">
                View All Case Studies <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials / Recommendations */}
      <section className="py-24 bg-primary text-white">
        <div className="container-padding">
          <SectionHeader
            title="Client Recommendations"
            subtitle="Hear what our partners say about working with us"
            light
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl"
              >
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-white/90 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.author}</div>
                  <div className="text-sm text-white/70">{testimonial.position}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit an Inquiry Form */}
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
                  {form.formState.errors.name && (
                    <p className="text-destructive text-sm">{form.formState.errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input {...form.register("email")} type="email" placeholder="john@company.com" className="bg-white" />
                  {form.formState.errors.email && (
                    <p className="text-destructive text-sm">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input
                  {...form.register("subject")}
                  placeholder="Project Inquiry: Smart City Initiative"
                  className="bg-white"
                />
                {form.formState.errors.subject && (
                  <p className="text-destructive text-sm">{form.formState.errors.subject.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  {...form.register("message")}
                  placeholder="Tell us about your project requirements..."
                  className="min-h-[120px] bg-white"
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-sm">{form.formState.errors.message.message}</p>
                )}
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
