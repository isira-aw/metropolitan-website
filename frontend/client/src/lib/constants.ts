import {
  Building2,
  Zap,
  Leaf,
  Shield,
  Network,
  Users,
  Briefcase,
  Globe2,
  Truck,
  Home,
  Factory,
  Wifi,
  Power,
} from "lucide-react";

export const DIVISIONS = [
  {
    id: 1,
    name: "Smart Infrastructure",
    slug: "smart-infrastructure",
    description: "IoT-enabled infrastructure management for modern cities, including smart grids, intelligent transportation systems, and automated utility management.",
    heroImageUrl: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Urban Development",
    slug: "urban-development",
    description: "Comprehensive urban planning and development solutions for sustainable, livable cities with integrated commercial and residential spaces.",
    heroImageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Green Energy",
    slug: "green-energy",
    description: "Renewable energy solutions including solar, wind, and hybrid power systems for sustainable metropolitan areas.",
    heroImageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Transportation & Logistics",
    slug: "transportation-logistics",
    description: "Advanced transportation networks and logistics solutions for efficient urban mobility and freight management.",
    heroImageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Public Safety",
    slug: "public-safety",
    description: "Integrated security and emergency response systems leveraging AI and IoT for safer communities.",
    heroImageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Digital Governance",
    slug: "digital-governance",
    description: "E-governance platforms and digital citizen services for transparent, efficient public administration.",
    heroImageUrl: "https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Commercial Real Estate",
    slug: "commercial-real-estate",
    description: "Premium office spaces and commercial properties designed for modern businesses and productivity.",
    heroImageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  },
];

// Fixed services - same across all divisions
export const SERVICES = [
  {
    id: 1,
    title: "Consulting & Strategy",
    description: "Expert consultation on urban development strategies, feasibility studies, and long-term planning for sustainable growth.",
    icon: "Briefcase",
  },
  {
    id: 2,
    title: "Design & Engineering",
    description: "Comprehensive architectural and engineering design services for infrastructure, buildings, and smart city systems.",
    icon: "Building2",
  },
  {
    id: 3,
    title: "Project Management",
    description: "End-to-end project management from planning to execution, ensuring timely delivery and quality standards.",
    icon: "Users",
  },
  {
    id: 4,
    title: "Technology Integration",
    description: "IoT, AI, and smart technology integration for intelligent infrastructure and automated city management.",
    icon: "Wifi",
  },
  {
    id: 5,
    title: "Sustainability Solutions",
    description: "Green building practices, renewable energy integration, and eco-friendly urban development solutions.",
    icon: "Leaf",
  },
  {
    id: 6,
    title: "Operations & Maintenance",
    description: "24/7 facility management, preventive maintenance, and operational support for infrastructure assets.",
    icon: "Shield",
  },
];

// Map icon names to actual icon components
export const ICON_MAP: Record<string, any> = {
  Building2,
  Zap,
  Leaf,
  Shield,
  Network,
  Users,
  Briefcase,
  Globe2,
  Truck,
  Home,
  Factory,
  Wifi,
  Power,
};
