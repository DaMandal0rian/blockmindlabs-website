import { useQuery } from '@tanstack/react-query';
import strapiAPI, { BlogPost, Service, Testimonial, Page } from '@/lib/strapi';

// Blog Posts hooks
export const useBlogPosts = () => {
  return useQuery({
    queryKey: ['blog-posts'],
    queryFn: strapiAPI.getBlogPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: () => strapiAPI.getBlogPost(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
};

// Services hooks
export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: strapiAPI.getServices,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

// Testimonials hooks
export const useTestimonials = () => {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: strapiAPI.getTestimonials,
    staleTime: 10 * 60 * 1000,
  });
};

// Pages hooks
export const usePage = (slug: string) => {
  return useQuery({
    queryKey: ['page', slug],
    queryFn: () => strapiAPI.getPage(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
};

export const usePages = () => {
  return useQuery({
    queryKey: ['pages'],
    queryFn: strapiAPI.getPages,
    staleTime: 10 * 60 * 1000,
  });
};