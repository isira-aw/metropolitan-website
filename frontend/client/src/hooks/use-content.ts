import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

// NEWS
export function useNews() {
  return useQuery({
    queryKey: [api.news.list.path],
    queryFn: async () => {
      const res = await fetch(api.news.list.path);
      if (!res.ok) throw new Error('Failed to fetch news');
      return api.news.list.responses[200].parse(await res.json());
    },
  });
}

export function useNewsItem(id: number) {
  return useQuery({
    queryKey: [api.news.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.news.get.path, { id });
      const res = await fetch(url);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error('Failed to fetch news item');
      return api.news.get.responses[200].parse(await res.json());
    },
    enabled: !!id,
  });
}

// CASE STUDIES
export function useCaseStudies() {
  return useQuery({
    queryKey: [api.caseStudies.list.path],
    queryFn: async () => {
      const res = await fetch(api.caseStudies.list.path);
      if (!res.ok) throw new Error('Failed to fetch case studies');
      return api.caseStudies.list.responses[200].parse(await res.json());
    },
  });
}

export function useCaseStudy(id: number) {
  return useQuery({
    queryKey: [api.caseStudies.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.caseStudies.get.path, { id });
      const res = await fetch(url);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error('Failed to fetch case study');
      return api.caseStudies.get.responses[200].parse(await res.json());
    },
    enabled: !!id,
  });
}

// DIVISIONS
export function useDivisions() {
  return useQuery({
    queryKey: [api.divisions.list.path],
    queryFn: async () => {
      const res = await fetch(api.divisions.list.path);
      if (!res.ok) throw new Error('Failed to fetch divisions');
      return api.divisions.list.responses[200].parse(await res.json());
    },
  });
}

export function useDivisionBySlug(slug: string) {
  return useQuery({
    queryKey: [api.divisions.getBySlug.path, slug],
    queryFn: async () => {
      const url = buildUrl(api.divisions.getBySlug.path, { slug });
      const res = await fetch(url);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error('Failed to fetch division');
      return api.divisions.getBySlug.responses[200].parse(await res.json());
    },
    enabled: !!slug,
  });
}

// PARTNERS (Global)
export function usePartners() {
  return useQuery({
    queryKey: [api.global.partners.path],
    queryFn: async () => {
      const res = await fetch(api.global.partners.path);
      if (!res.ok) throw new Error('Failed to fetch partners');
      return api.global.partners.responses[200].parse(await res.json());
    },
  });
}
