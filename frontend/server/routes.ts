import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // --- Inquiries ---
  app.post(api.inquiries.submit.path, async (req, res) => {
    try {
      const input = api.inquiries.submit.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: err.errors[0].message });
        return;
      }
      throw err;
    }
  });

  // --- Jobs ---
  app.get(api.jobs.list.path, async (req, res) => {
    const items = await storage.getJobs();
    res.json(items);
  });

  app.get(api.jobs.get.path, async (req, res) => {
    const item = await storage.getJob(Number(req.params.id));
    if (!item) return res.status(404).json({ message: "Job not found" });
    res.json(item);
  });

  app.post(api.jobs.apply.path, async (req, res) => {
    try {
      const input = api.jobs.apply.input.parse(req.body);
      const app = await storage.createJobApplication({ ...input, jobId: Number(req.params.id) });
      res.status(201).json(app);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: err.errors[0].message });
        return;
      }
      throw err;
    }
  });

  // --- News ---
  app.get(api.news.list.path, async (req, res) => {
    const items = await storage.getNews();
    res.json(items);
  });

  app.get(api.news.get.path, async (req, res) => {
    const item = await storage.getNewsItem(Number(req.params.id));
    if (!item) return res.status(404).json({ message: "News item not found" });
    res.json(item);
  });

  // --- Case Studies ---
  app.get(api.caseStudies.list.path, async (req, res) => {
    const items = await storage.getCaseStudies();
    res.json(items);
  });

  app.get(api.caseStudies.get.path, async (req, res) => {
    const item = await storage.getCaseStudy(Number(req.params.id));
    if (!item) return res.status(404).json({ message: "Case study not found" });
    res.json(item);
  });

  // --- Divisions ---
  app.get(api.divisions.list.path, async (req, res) => {
    const items = await storage.getDivisions();
    res.json(items);
  });

  app.get(api.divisions.getBySlug.path, async (req, res) => {
    const division = await storage.getDivisionBySlug(req.params.slug);
    if (!division) return res.status(404).json({ message: "Division not found" });

    const [services, testimonials, projects, partners] = await Promise.all([
      storage.getDivisionServices(division.id),
      storage.getDivisionTestimonials(division.id),
      storage.getDivisionProjects(division.id),
      storage.getDivisionPartners(division.id),
    ]);

    res.json({ division, services, testimonials, projects, partners });
  });

  // --- Global ---
  app.get(api.global.partners.path, async (req, res) => {
    const items = await storage.getAllPartners();
    res.json(items);
  });

  // --- Seeding ---
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  if (await storage.hasDivisions()) return;

  console.log("Seeding database...");

  // Seed Divisions
  const divisionsData = [
    {
      name: "Urban Infrastructure",
      slug: "urban-infrastructure",
      description: "Building the backbone of modern cities with sustainable engineering.",
      heroImageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      services: [
        { title: "Bridge Construction", description: "State-of-the-art bridge engineering.", icon: "Construction" },
        { title: "Road Networks", description: "Efficient highway and urban road planning.", icon: "Map" },
        { title: "Public Spaces", description: "Designing accessible parks and plazas.", icon: "TreeDeciduous" }
      ],
      testimonials: [
        { clientName: "City Council", content: "Transformed our downtown accessibility.", company: "Metro City" }
      ],
      projects: [
        { title: "Skyline Bridge", description: "A 2km suspension bridge connecting the twin cities.", imageUrl: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80" }
      ],
      partners: [{ name: "ConstructCo", logoUrl: "" }]
    },
    {
      name: "Smart City Solutions",
      slug: "smart-city",
      description: "Integrating technology to enhance urban living and efficiency.",
      heroImageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80",
      services: [
        { title: "IoT Sensors", description: "Real-time monitoring of city metrics.", icon: "Wifi" },
        { title: "Data Analytics", description: "Actionable insights for city planners.", icon: "BarChart" }
      ],
      testimonials: [
        { clientName: "Tech Innovators", content: "The data platform revolutionized our traffic management.", company: "Transit Authority" }
      ],
      projects: [
        { title: "Smart Grid Pilot", description: "AI-driven energy distribution for 50k homes.", imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" }
      ]
    },
    {
      name: "Public Transportation",
      slug: "public-transport",
      description: "Efficient, green, and reliable transit systems for everyone.",
      heroImageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80",
      services: [
        { title: "Metro Systems", description: "High-capacity underground rail.", icon: "Train" },
        { title: "Bus Rapid Transit", description: "Dedicated lanes for faster commutes.", icon: "Bus" }
      ],
      testimonials: [],
      projects: []
    },
    {
      name: "Energy & Sustainability",
      slug: "energy-sustainability",
      description: "Powering the future with renewable and resilient energy sources.",
      heroImageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
      services: [
        { title: "Solar Farms", description: "Large-scale photovoltaic installations.", icon: "Sun" }
      ],
      testimonials: [],
      projects: []
    },
    {
      name: "Water Management",
      slug: "water-management",
      description: "Ensuring clean water access and efficient waste treatment.",
      heroImageUrl: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80",
      services: [
        { title: "Purification Plants", description: "Advanced filtration systems.", icon: "Droplets" }
      ],
      testimonials: [],
      projects: []
    },
    {
      name: "Digital Governance",
      slug: "digital-governance",
      description: "Streamlining citizen services through secure digital platforms.",
      heroImageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
      services: [
        { title: "E-Voting", description: "Secure blockchain voting systems.", icon: "Vote" }
      ],
      testimonials: [],
      projects: []
    },
    {
      name: "Community Development",
      slug: "community-development",
      description: "Fostering inclusive growth and social infrastructure.",
      heroImageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      services: [
        { title: "Affordable Housing", description: "Sustainable living complexes.", icon: "Home" }
      ],
      testimonials: [],
      projects: []
    }
  ];

  await storage.seedDivisions(divisionsData);

  // Seed Jobs
  await storage.seedJobs([
    {
      title: "Senior Civil Engineer",
      department: "Urban Infrastructure",
      location: "New York, NY",
      description: "Lead major bridge projects...",
      requirements: "10+ years exp, PE license"
    },
    {
      title: "Data Scientist",
      department: "Smart City Solutions",
      location: "Remote",
      description: "Analyze urban traffic patterns...",
      requirements: "Python, SQL, ML exp"
    },
    {
      title: "Sustainability Consultant",
      department: "Energy",
      location: "Austin, TX",
      description: "Advise on LEED certification...",
      requirements: "LEED AP, 5+ years exp"
    }
  ]);

  // Seed News
  await storage.seedNews([
    {
      title: "Metropolitan Wins Green City Award",
      summary: "Our sustainable initiatives have been recognized globally.",
      content: "Full story about the award...",
      category: "Awards",
      publishedAt: new Date()
    },
    {
      title: "New Metro Line Opens",
      summary: "Connecting the east and west districts.",
      content: "Details about the new line...",
      category: "Infrastructure",
      publishedAt: new Date()
    }
  ]);

  // Seed Case Studies
  await storage.seedCaseStudies([
    {
      title: "Revitalizing the Downtown Harbor",
      clientName: "Port Authority",
      summary: "Turning an industrial zone into a public park.",
      content: "Detailed case study content...",
      projectManagerName: "Jane Doe",
      projectManagerEmail: "jane.doe@metro.com"
    }
  ]);

  console.log("Database seeded successfully.");
}
