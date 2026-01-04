import { useState } from "react";
import { useNews } from "@/hooks/use-content";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Pagination } from "@/components/Pagination";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Phone, Mail } from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";

export default function News() {
  const { data: newsItems, isLoading } = useNews();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;
  const totalPages = newsItems ? Math.ceil(newsItems.length / itemsPerPage) : 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNews = newsItems?.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-accent">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
            alt="News hero"
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
              News & <span className="text-primary">Updates</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
              The latest announcements, press releases, and insights from Metropolitan
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-padding py-16 grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {isLoading ? (
            <div className="text-center py-20 text-muted-foreground">Loading news...</div>
          ) : (
            <>
              <div className="space-y-8">
                {paginatedNews?.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-border">
                      <div className="md:flex">
                        <div className="md:w-1/3 h-48 md:h-auto bg-muted">
                          {item.imageUrl ? (
                            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center text-primary/40 font-bold text-xl">
                              NEWS
                            </div>
                          )}
                        </div>
                        <div className="md:w-2/3 p-6 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <Badge variant="secondary" className="text-primary font-semibold">{item.category}</Badge>
                              <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {item.publishedAt ? format(new Date(item.publishedAt), 'MMM d, yyyy') : 'Recent'}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-2 text-accent">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground">{item.summary}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
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

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-secondary/50 p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold font-heading mb-4 text-accent">Media Contacts</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full text-primary"><Phone className="h-4 w-4" /></div>
                <div>
                  <p className="font-semibold">Press Office</p>
                  <p className="text-muted-foreground">+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full text-primary"><Mail className="h-4 w-4" /></div>
                <div>
                  <p className="font-semibold">General Inquiries</p>
                  <p className="text-muted-foreground">press@metropolitan.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accent text-white p-6 rounded-xl">
             <h3 className="text-xl font-bold font-heading mb-4 text-white">Division Contacts</h3>
             <ul className="space-y-3 text-sm text-white/80">
               <li className="border-b border-white/10 pb-2">
                 <strong className="block text-white">Infrastructure</strong>
                 infra@metropolitan.com
               </li>
               <li className="border-b border-white/10 pb-2">
                 <strong className="block text-white">Smart Cities</strong>
                 smart@metropolitan.com
               </li>
               <li className="border-b border-white/10 pb-2">
                 <strong className="block text-white">Sustainability</strong>
                 green@metropolitan.com
               </li>
               <li>
                 <strong className="block text-white">Logistics</strong>
                 logistics@metropolitan.com
               </li>
             </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
