import { pgTable, text, serial, timestamp, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

// Inquiries from "Submit an Inquiry"
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Job Listings for Career Page
export const jobs = pgTable("jobs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  department: text("department").notNull(),
  location: text("location").notNull(),
  description: text("description").notNull(),
  requirements: text("requirements").notNull(),
  postedAt: timestamp("posted_at").defaultNow(),
});

// Job Applications
export const jobApplications = pgTable("job_applications", {
  id: serial("id").primaryKey(),
  jobId: integer("job_id").references(() => jobs.id),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  resumeLink: text("resume_link"), // simplified for MVP
  coverLetter: text("cover_letter"),
  submittedAt: timestamp("submitted_at").defaultNow(),
});

// News Items
export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(), // e.g., "Corporate", "Division Update"
  publishedAt: timestamp("published_at").defaultNow(),
  imageUrl: text("image_url"),
});

// Case Studies (Blog)
export const caseStudies = pgTable("case_studies", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  clientName: text("client_name").notNull(),
  summary: text("summary").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url"),
  projectManagerName: text("project_manager_name"), // Contact people related to project
  projectManagerEmail: text("project_manager_email"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Divisions
export const divisions = pgTable("divisions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(), // for /divisions/:slug
  description: text("description").notNull(),
  heroImageUrl: text("hero_image_url"),
});

// Division Content - Services
export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  divisionId: integer("division_id").references(() => divisions.id).notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(), // Lucide icon name
});

// Division Content - Testimonials
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  divisionId: integer("division_id").references(() => divisions.id), // Nullable if global
  clientName: text("client_name").notNull(),
  company: text("company"),
  content: text("content").notNull(),
  rating: integer("rating").default(5),
});

// Division Content - Projects/Portfolio
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  divisionId: integer("division_id").references(() => divisions.id).notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url"),
});

// Division Content - Partners
export const partners = pgTable("partners", {
  id: serial("id").primaryKey(),
  divisionId: integer("division_id").references(() => divisions.id), // Nullable if global
  name: text("name").notNull(),
  logoUrl: text("logo_url"),
});

// === SCHEMAS ===

export const insertInquirySchema = createInsertSchema(inquiries).omit({ id: true, createdAt: true });
export const insertJobApplicationSchema = createInsertSchema(jobApplications).omit({ id: true, submittedAt: true });
export const insertDivisionSchema = createInsertSchema(divisions).omit({ id: true });

// === TYPES ===

export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export type Job = typeof jobs.$inferSelect;
export type JobApplication = typeof jobApplications.$inferSelect;
export type InsertJobApplication = z.infer<typeof insertJobApplicationSchema>;

export type NewsItem = typeof news.$inferSelect;
export type CaseStudy = typeof caseStudies.$inferSelect;

export type Division = typeof divisions.$inferSelect;
export type Service = typeof services.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
export type Project = typeof projects.$inferSelect;
export type Partner = typeof partners.$inferSelect;
