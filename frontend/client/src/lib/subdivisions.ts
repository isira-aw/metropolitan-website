/**
 * Fixed subdivisions for Metropolitan Engineering
 * These are hardcoded on the frontend and don't require backend fetching
 */

export interface Subdivision {
  id: string;
  name: string;
  slug: string;
  description: string;
  heroImageUrl: string;
}

export const SUBDIVISIONS: Subdivision[] = [
  {
    id: "central-ac",
    name: "Central AC",
    slug: "central-ac",
    description: "Comprehensive central air conditioning solutions for commercial and residential buildings. Our expert team designs, installs, and maintains energy-efficient HVAC systems tailored to your specific needs.",
    heroImageUrl: "https://images.unsplash.com/photo-1631545806609-c2c6c7e6de6f?w=1200&h=600&fit=crop"
  },
  {
    id: "elevators-travelators",
    name: "Elevators and Travelators",
    slug: "elevators-travelators",
    description: "State-of-the-art vertical transportation systems including elevators, escalators, and travelators. We provide installation, modernization, and maintenance services ensuring safety and reliability.",
    heroImageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop"
  },
  {
    id: "fire-detection-protection",
    name: "Fire Detection & Protection",
    slug: "fire-detection-protection",
    description: "Advanced fire detection and protection systems to safeguard lives and property. Our comprehensive solutions include smoke detectors, sprinkler systems, fire alarms, and emergency response systems.",
    heroImageUrl: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&h=600&fit=crop"
  },
  {
    id: "generator",
    name: "Generator",
    slug: "generator",
    description: "Reliable backup power generation solutions for uninterrupted operations. We specialize in diesel and gas generators, automatic transfer switches, and complete power management systems.",
    heroImageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop"
  },
  {
    id: "solar",
    name: "Solar",
    slug: "solar",
    description: "Sustainable solar energy solutions for a greener future. Our team designs and implements photovoltaic systems, solar panels, and energy storage solutions to reduce your carbon footprint and energy costs.",
    heroImageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop"
  },
  {
    id: "elv",
    name: "ELV",
    slug: "elv",
    description: "Extra Low Voltage (ELV) systems including security, CCTV, access control, building automation, and structured cabling. We deliver integrated smart building solutions for modern infrastructure.",
    heroImageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&h=600&fit=crop"
  }
];

/**
 * Get a subdivision by its slug
 */
export function getSubdivisionBySlug(slug: string): Subdivision | undefined {
  return SUBDIVISIONS.find(sub => sub.slug === slug);
}

/**
 * Get all subdivisions
 */
export function getAllSubdivisions(): Subdivision[] {
  return SUBDIVISIONS;
}
