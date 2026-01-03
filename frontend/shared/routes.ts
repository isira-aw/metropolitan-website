import { z } from 'zod';
import { 
  insertInquirySchema, 
  insertJobApplicationSchema,
  inquiries,
  jobs,
  jobApplications,
  news,
  caseStudies,
  divisions,
  services,
  testimonials,
  projects,
  partners
} from './schema';

// ============================================
// SHARED ERROR SCHEMAS
// ============================================
export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

// ============================================
// API CONTRACT
// ============================================
export const api = {
  // --- Inquiries ---
  inquiries: {
    submit: {
      method: 'POST' as const,
      path: '/api/inquiries',
      input: insertInquirySchema,
      responses: {
        201: z.custom<typeof inquiries.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },

  // --- Jobs & Applications ---
  jobs: {
    list: {
      method: 'GET' as const,
      path: '/api/jobs',
      responses: {
        200: z.array(z.custom<typeof jobs.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/jobs/:id',
      responses: {
        200: z.custom<typeof jobs.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
    apply: {
      method: 'POST' as const,
      path: '/api/jobs/:id/apply',
      input: insertJobApplicationSchema.omit({ jobId: true }), // jobId from URL
      responses: {
        201: z.custom<typeof jobApplications.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },

  // --- News ---
  news: {
    list: {
      method: 'GET' as const,
      path: '/api/news',
      responses: {
        200: z.array(z.custom<typeof news.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/news/:id',
      responses: {
        200: z.custom<typeof news.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
  },

  // --- Case Studies (Blog) ---
  caseStudies: {
    list: {
      method: 'GET' as const,
      path: '/api/case-studies',
      responses: {
        200: z.array(z.custom<typeof caseStudies.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/case-studies/:id',
      responses: {
        200: z.custom<typeof caseStudies.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
  },

  // --- Divisions ---
  divisions: {
    list: {
      method: 'GET' as const,
      path: '/api/divisions',
      responses: {
        200: z.array(z.custom<typeof divisions.$inferSelect>()),
      },
    },
    getBySlug: {
      method: 'GET' as const,
      path: '/api/divisions/:slug',
      responses: {
        200: z.object({
          division: z.custom<typeof divisions.$inferSelect>(),
          services: z.array(z.custom<typeof services.$inferSelect>()),
          testimonials: z.array(z.custom<typeof testimonials.$inferSelect>()),
          projects: z.array(z.custom<typeof projects.$inferSelect>()),
          partners: z.array(z.custom<typeof partners.$inferSelect>()),
        }),
        404: errorSchemas.notFound,
      },
    },
  },
  
  // --- General Data (Brands, Global Partners, etc.) ---
  global: {
    partners: {
      method: 'GET' as const,
      path: '/api/partners',
      responses: {
        200: z.array(z.custom<typeof partners.$inferSelect>()),
      },
    }
  }
};

// ============================================
// HELPER
// ============================================
export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
