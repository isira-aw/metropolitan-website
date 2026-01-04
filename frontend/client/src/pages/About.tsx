import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Target, Eye, Award, Users, TrendingUp, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "To transform urban landscapes through innovative, sustainable solutions that enhance quality of life."
    },
    {
      icon: Eye,
      title: "Visionary",
      description: "Setting global standards for integrated urban development and smart city solutions."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Uncompromising commitment to quality, safety, and timely delivery in every project."
    },
    {
      icon: Users,
      title: "People-Centric",
      description: "Designing spaces and systems that prioritize human well-being and community growth."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Cities Worldwide" },
    { number: "10,000+", label: "Team Members" },
    { number: "25", label: "Years of Excellence" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-accent">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Team collaboration"
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
              About <span className="text-primary">Metropolitan</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
              Building sustainable, intelligent urban ecosystems that shape the future of how we live, work, and thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-background">
        <div className="container-padding">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="Our Vision & Mission"
              subtitle="Driving innovation in urban development with a clear purpose and direction"
            />

            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <Eye className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-accent mb-3">Vision</h3>
                    <p className="text-lg text-muted-foreground">
                      To be the global benchmark for integrated urban development solutions, fostering sustainable and thriving communities worldwide. We envision cities where technology, infrastructure, and human experience seamlessly converge.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <Target className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-accent mb-3">Mission</h3>
                    <p className="text-lg text-muted-foreground">
                      To bridge the gap between innovation and infrastructure by delivering smart, sustainable ecosystems that empower businesses and enhance quality of life across metropolitan areas globally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-secondary/50">
        <div className="container-padding">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl shadow-lg border border-border hover:border-primary transition-all hover:-translate-y-1 group"
              >
                <div className="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-accent">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-background">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl -z-10 -rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                alt="Metropolitan cityscape"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-accent font-heading">
                25 Years of <span className="text-primary">Urban Innovation</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Founded in 1999, Metropolitan began with a simple yet ambitious goal: to reimagine how cities function in the modern age. What started as a small urban planning consultancy has evolved into a global leader in integrated metropolitan solutions.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we operate across 50+ cities worldwide, partnering with governments, enterprises, and communities to build smarter, more sustainable urban environments. Our multidisciplinary approach combines cutting-edge technology with human-centered design.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <Globe2 className="h-8 w-8" />
                </div>
                <div>
                  <div className="font-bold text-accent text-lg">Global Presence</div>
                  <div className="text-muted-foreground">Operating on 6 continents</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <div>
                  <div className="font-bold text-accent text-lg">Sustainable Growth</div>
                  <div className="text-muted-foreground">30% YoY expansion in green projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
