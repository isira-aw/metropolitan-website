import { useRoute } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { DIVISIONS, SERVICES, ICON_MAP } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Users as UsersIcon, CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Division() {
  const [, params] = useRoute("/divisions/:slug");
  const slug = params?.slug;

  const division = DIVISIONS.find((d) => d.slug === slug);

  if (!division) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-accent mb-4">Division Not Found</h1>
            <p className="text-muted-foreground mb-6">The division you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Mock case studies/projects for this division (in production, fetch from API)
  const divisionProjects = [
    {
      id: 1,
      title: "Smart Metro Expansion - Phase 2",
      description: "Implementing AI-powered metro system with real-time analytics and predictive maintenance capabilities.",
      imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Green District Development",
      description: "50-acre sustainable mixed-use development with LEED Platinum certification and renewable energy integration.",
      imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "IoT Infrastructure Platform",
      description: "City-wide IoT network enabling smart utilities, traffic management, and environmental monitoring.",
      imageUrl: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop",
    },
  ];

  const testimonials = [
    {
      quote: "Metropolitan delivered exceptional results, transforming our vision into a state-of-the-art urban solution.",
      author: "Jane Smith",
      position: "City Planning Director"
    },
    {
      quote: "Their innovative approach and commitment to sustainability set them apart in the industry.",
      author: "Robert Chen",
      position: "Infrastructure Commissioner"
    }
  ];

  const otherDivisions = DIVISIONS.filter((d) => d.id !== division.id);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={division.heroImageUrl}
            alt={division.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 to-accent/70 z-10" />

        <div className="container-padding relative z-20 text-white space-y-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
              {division.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 font-light max-w-3xl">
              {division.description}
            </p>
            <Button size="lg" className="text-lg px-8 py-6 h-auto bg-primary hover:bg-primary/90">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Services Section (Hard-coded, same for all divisions) */}
      <section className="py-24 bg-background">
        <div className="container-padding">
          <SectionHeader
            title="Our Services"
            subtitle="Comprehensive solutions tailored to your needs"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {SERVICES.map((service) => {
              const IconComponent = ICON_MAP[service.icon];
              return (
                <div
                  key={service.id}
                  className="bg-secondary/30 p-8 rounded-xl border border-border hover:border-primary transition-all hover:-translate-y-1 group"
                >
                  <div className="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {IconComponent && <IconComponent className="h-7 w-7" />}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-accent">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-accent text-white">
        <div className="container-padding">
          <SectionHeader
            title="Client Testimonials"
            subtitle="Hear from the partners we've worked with"
            light
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl"
              >
                <p className="text-lg text-white/90 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center">
                    <UsersIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-sm text-white/70">{testimonial.position}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Divisions Navigation */}
      <section className="py-24 bg-secondary/50">
        <div className="container-padding">
          <SectionHeader
            title="Explore Our Divisions"
            subtitle="Discover the full range of our expertise"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {otherDivisions.slice(0, 6).map((div) => (
              <Link key={div.id} href={`/divisions/${div.slug}`}>
                <div className="group cursor-pointer bg-background rounded-xl overflow-hidden border border-border hover:border-primary transition-all hover:shadow-xl">
                  <div className="h-40 overflow-hidden">
                    <img
                      src={div.heroImageUrl}
                      alt={div.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-accent group-hover:text-primary transition-colors mb-2">
                      {div.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{div.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container-padding">
          <SectionHeader
            title="Why Choose Us"
            subtitle="Excellence in execution, innovation in approach"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              "Proven Track Record",
              "Expert Team",
              "Cutting-edge Technology",
              "24/7 Support"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-accent">{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-16 border-y bg-background">
        <div className="container-padding">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-10">
            Trusted Partners in {division.name}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60">
            <div className="font-bold text-xl">Partner A</div>
            <div className="font-bold text-xl">Partner B</div>
            <div className="font-bold text-xl">Partner C</div>
            <div className="font-bold text-xl">Partner D</div>
          </div>
        </div>
      </section>

      {/* Project Portfolio (Case Studies filtered by division) */}
      <section className="py-24 bg-secondary/30">
        <div className="container-padding">
          <SectionHeader
            title="Project Portfolio"
            subtitle={`Recent projects in ${division.name}`}
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {divisionProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-xl overflow-hidden border border-border hover:border-primary transition-all hover:shadow-xl group"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-accent mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <Button variant="link" className="p-0 h-auto text-primary font-semibold">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Us (Division-specific) */}
      <section className="py-24 bg-primary text-white">
        <div className="container-padding max-w-4xl text-center">
          <h2 className="text-4xl font-bold font-heading mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Contact our {division.name} team to discuss your project requirements
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Division Office</h3>
              <p className="text-white/80 text-sm">123 Metropolitan Ave, Suite 100</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-white/80 text-sm">+1 (555) 123-4567</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-white/80 text-sm">{division.slug}@metropolitan.com</p>
            </div>
          </div>

          <div className="mt-10">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
