import axios from 'axios';

// Strapi API configuration
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

// Create axios instance for Strapi API
export const strapiClient = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Types for Strapi responses
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiItem {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Content Types
export interface BlogPost extends StrapiItem {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage?: {
    url: string;
    alternativeText?: string;
  };
  tags?: string[];
  author: string;
  metaTitle?: string;
  metaDescription?: string;
}

export interface Service extends StrapiItem {
  title: string;
  description: string;
  icon: string;
  features: string[];
  order?: number;
}

export interface Testimonial extends StrapiItem {
  name: string;
  company: string;
  role: string;
  content: string;
  avatar?: {
    url: string;
    alternativeText?: string;
  };
  rating: number;
}

export interface Page extends StrapiItem {
  title: string;
  slug: string;
  content: any; // JSON content blocks
  metaTitle?: string;
  metaDescription?: string;
}

// API functions
export const strapiAPI = {
  // Blog Posts
  async getBlogPosts(): Promise<BlogPost[]> {
    try {
      const response = await strapiClient.get<StrapiResponse<BlogPost[]>>('/blog-posts?populate=*');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }
  },

  async getBlogPost(slug: string): Promise<BlogPost | null> {
    try {
      const response = await strapiClient.get<StrapiResponse<BlogPost[]>>(`/blog-posts?filters[slug][$eq]=${slug}&populate=*`);
      return response.data.data[0] || null;
    } catch (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }
  },

  // Services
  async getServices(): Promise<Service[]> {
    try {
      const response = await strapiClient.get<StrapiResponse<Service[]>>('/services?sort=order:asc');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching services:', error);
      return [];
    }
  },

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    try {
      const response = await strapiClient.get<StrapiResponse<Testimonial[]>>('/testimonials?populate=*');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      return [];
    }
  },

  // Pages
  async getPage(slug: string): Promise<Page | null> {
    try {
      const response = await strapiClient.get<StrapiResponse<Page[]>>(`/pages?filters[slug][$eq]=${slug}`);
      return response.data.data[0] || null;
    } catch (error) {
      console.error('Error fetching page:', error);
      return null;
    }
  },

  async getPages(): Promise<Page[]> {
    try {
      const response = await strapiClient.get<StrapiResponse<Page[]>>('/pages');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching pages:', error);
      return [];
    }
  }
};

export default strapiAPI;