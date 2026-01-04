import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Pagination } from "@/components/Pagination";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DIVISIONS } from "@/lib/constants";

export default function CaseStudies() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDivision, setSelectedDivision] = useState<number | null>(null);

  // Mock data - replace with actual API call
  const caseStudies = [
    {
      id: 1,
      title: "Smart City Infrastructure - Dubai Metro Expansion",
      summary: "Implemented IoT-enabled metro system serving 2M+ daily commuters with real-time tracking and predictive maintenance.",
      clientName: "Dubai Municipality",
      imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
      divisionId: 1,
      projectManagerName: "Sarah Johnson",
      projectManagerEmail: "sarah.j@metropolitan.com",
      createdAt: "2024-10-15"
    },
    {
      id: 2,
      title: "Sustainable Urban Development - Singapore Green District",
      summary: "Master-planned 50-acre mixed-use development achieving LEED Platinum with solar integration and green roofs.",
      clientName: "Singapore Urban Development",
      imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop",
      divisionId: 2,
      projectManagerName: "Michael Chen",
      projectManagerEmail: "m.chen@metropolitan.com",
      createdAt: "2024-09-20"
    },
    {
      id: 3,
      title: "Renewable Energy Grid - Los Angeles Solar Initiative",
      summary: "Deployed 100MW solar farm with battery storage, powering 25,000 homes with clean energy.",
      clientName: "LA Department of Energy",
      imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
      divisionId: 3,
      projectManagerName: "Emily Rodriguez",
      projectManagerEmail: "e.rodriguez@metropolitan.com",
      createdAt: "2024-08-10"
    },
    {
      id: 4,
      title: "Intelligent Transportation - Tokyo Logistics Hub",
      summary: "AI-powered logistics center reducing delivery times by 40% through route optimization and automation.",
      clientName: "Tokyo Metro Transport",
      imageUrl: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop",
      divisionId: 4,
      projectManagerName: "Hiroshi Tanaka",
      projectManagerEmail: "h.tanaka@metropolitan.com",
      createdAt: "2024-07-25"
    },
    {
      id: 5,
      title: "Public Safety Platform - London Smart Surveillance",
      summary: "Deployed AI-enabled surveillance network reducing crime rates by 30% while ensuring privacy compliance.",
      clientName: "Greater London Authority",
      imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
      divisionId: 5,
      projectManagerName: "James Wilson",
      projectManagerEmail: "j.wilson@metropolitan.com",
      createdAt: "2024-06-12"
    },
    {
      id: 6,
      title: "E-Governance Portal - Mumbai Citizen Services",
      summary: "Digital platform serving 20M+ citizens with 100+ government services accessible via mobile and web.",
      clientName: "Mumbai Municipal Corporation",
      imageUrl: "https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=2070&auto=format&fit=crop",
      divisionId: 6,
      projectManagerName: "Priya Sharma",
      projectManagerEmail: "p.sharma@metropolitan.com",
      createdAt: "2024-05-08"
    },
    {
      id: 7,
      title: "Corporate Campus - Amazon HQ2 Development",
      summary: "500,000 sq ft sustainable office campus with smart building systems and employee wellness features.",
      clientName: "Amazon",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      divisionId: 7,
      projectManagerName: "David Park",
      projectManagerEmail: "d.park@metropolitan.com",
      createdAt: "2024-04-18"
    },
  ];

  const itemsPerPage = 6;

  const filteredCaseStudies = selectedDivision
    ? caseStudies.filter(cs => cs.divisionId === selectedDivision)
    : caseStudies;

  const totalPages = Math.ceil(filteredCaseStudies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCaseStudies = filteredCaseStudies.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDivisionFilter = (divisionId: number | null) => {
    setSelectedDivision(divisionId);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-accent">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Case studies hero"
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
              Case <span className="text-primary">Studies</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
              Explore our portfolio of transformative projects across the globe
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-secondary/30 border-b">
        <div className="container-padding">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={selectedDivision === null ? "default" : "outline"}
              onClick={() => handleDivisionFilter(null)}
              size="sm"
            >
              All Divisions
            </Button>
            {DIVISIONS.map((division) => (
              <Button
                key={division.id}
                variant={selectedDivision === division.id ? "default" : "outline"}
                onClick={() => handleDivisionFilter(division.id)}
                size="sm"
              >
                {division.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-background">
        <div className="container-padding">
          {paginatedCaseStudies.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No case studies found for this division.</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedCaseStudies.map((caseStudy, index) => (
                  <motion.div
                    key={caseStudy.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-background border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={caseStudy.imageUrl}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {DIVISIONS.find(d => d.id === caseStudy.divisionId)?.name}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-accent line-clamp-2 group-hover:text-primary transition-colors">
                        {caseStudy.title}
                      </h3>

                      <p className="text-muted-foreground line-clamp-3">
                        {caseStudy.summary}
                      </p>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(caseStudy.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{caseStudy.projectManagerName}</span>
                      </div>

                      <div className="pt-2">
                        <Button variant="link" className="p-0 h-auto text-primary font-semibold">
                          Read Full Case Study <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
