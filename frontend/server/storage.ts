import { db } from "./db";
import { 
  inquiries, jobs, jobApplications, news, caseStudies, divisions, 
  services, testimonials, projects, partners,
  type InsertInquiry, type InsertJobApplication, type Inquiry, type Job, 
  type JobApplication, type NewsItem, type CaseStudy, type Division,
  type Service, type Testimonial, type Project, type Partner
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Inquiries
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;

  // Jobs
  getJobs(): Promise<Job[]>;
  getJob(id: number): Promise<Job | undefined>;
  createJobApplication(app: InsertJobApplication): Promise<JobApplication>;

  // News
  getNews(): Promise<NewsItem[]>;
  getNewsItem(id: number): Promise<NewsItem | undefined>;

  // Case Studies
  getCaseStudies(): Promise<CaseStudy[]>;
  getCaseStudy(id: number): Promise<CaseStudy | undefined>;

  // Divisions
  getDivisions(): Promise<Division[]>;
  getDivisionBySlug(slug: string): Promise<Division | undefined>;
  getDivisionServices(divisionId: number): Promise<Service[]>;
  getDivisionTestimonials(divisionId: number): Promise<Testimonial[]>;
  getDivisionProjects(divisionId: number): Promise<Project[]>;
  getDivisionPartners(divisionId: number): Promise<Partner[]>;
  
  // Global
  getAllPartners(): Promise<Partner[]>;

  // Seeding support
  hasDivisions(): Promise<boolean>;
  seedDivisions(data: any[]): Promise<void>; // Simplified for brevity
  seedJobs(data: any[]): Promise<void>;
  seedNews(data: any[]): Promise<void>;
  seedCaseStudies(data: any[]): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const [newItem] = await db.insert(inquiries).values(inquiry).returning();
    return newItem;
  }

  async getJobs(): Promise<Job[]> {
    return await db.select().from(jobs);
  }

  async getJob(id: number): Promise<Job | undefined> {
    const [item] = await db.select().from(jobs).where(eq(jobs.id, id));
    return item;
  }

  async createJobApplication(app: InsertJobApplication): Promise<JobApplication> {
    const [newItem] = await db.insert(jobApplications).values(app).returning();
    return newItem;
  }

  async getNews(): Promise<NewsItem[]> {
    return await db.select().from(news);
  }

  async getNewsItem(id: number): Promise<NewsItem | undefined> {
    const [item] = await db.select().from(news).where(eq(news.id, id));
    return item;
  }

  async getCaseStudies(): Promise<CaseStudy[]> {
    return await db.select().from(caseStudies);
  }

  async getCaseStudy(id: number): Promise<CaseStudy | undefined> {
    const [item] = await db.select().from(caseStudies).where(eq(caseStudies.id, id));
    return item;
  }

  async getDivisions(): Promise<Division[]> {
    return await db.select().from(divisions);
  }

  async getDivisionBySlug(slug: string): Promise<Division | undefined> {
    const [item] = await db.select().from(divisions).where(eq(divisions.slug, slug));
    return item;
  }

  async getDivisionServices(divisionId: number): Promise<Service[]> {
    return await db.select().from(services).where(eq(services.divisionId, divisionId));
  }

  async getDivisionTestimonials(divisionId: number): Promise<Testimonial[]> {
    return await db.select().from(testimonials).where(eq(testimonials.divisionId, divisionId));
  }

  async getDivisionProjects(divisionId: number): Promise<Project[]> {
    return await db.select().from(projects).where(eq(projects.divisionId, divisionId));
  }

  async getDivisionPartners(divisionId: number): Promise<Partner[]> {
    return await db.select().from(partners).where(eq(partners.divisionId, divisionId));
  }

  async getAllPartners(): Promise<Partner[]> {
    return await db.select().from(partners);
  }

  // Seeding
  async hasDivisions(): Promise<boolean> {
    const [first] = await db.select().from(divisions).limit(1);
    return !!first;
  }

  async seedDivisions(data: any[]): Promise<void> {
    // Expects structured data with nested relations
    for (const divData of data) {
      const { services: srvs, testimonials: tests, projects: projs, partners: parts, ...div } = divData;
      const [newDiv] = await db.insert(divisions).values(div).returning();
      
      if (srvs?.length) await db.insert(services).values(srvs.map((s: any) => ({ ...s, divisionId: newDiv.id })));
      if (tests?.length) await db.insert(testimonials).values(tests.map((t: any) => ({ ...t, divisionId: newDiv.id })));
      if (projs?.length) await db.insert(projects).values(projs.map((p: any) => ({ ...p, divisionId: newDiv.id })));
      if (parts?.length) await db.insert(partners).values(parts.map((p: any) => ({ ...p, divisionId: newDiv.id })));
    }
  }

  async seedJobs(data: any[]): Promise<void> {
    if (data.length) await db.insert(jobs).values(data);
  }

  async seedNews(data: any[]): Promise<void> {
    if (data.length) await db.insert(news).values(data);
  }

  async seedCaseStudies(data: any[]): Promise<void> {
    if (data.length) await db.insert(caseStudies).values(data);
  }
}

export const storage = new DatabaseStorage();
