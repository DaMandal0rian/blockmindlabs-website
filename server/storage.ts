import { users, type User, type InsertUser } from "@shared/schema";
import { blogPosts, type BlogPost, type InsertBlogPost } from "@shared/schema";
import { contactSubmissions, type ContactSubmission, type InsertContact } from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Contact submissions
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;

  // Blog posts
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  listBlogPosts(limit?: number): Promise<BlogPost[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, ContactSubmission>;
  private posts: Map<number, BlogPost>;
  private currentId: number;
  private currentContactId: number;
  private currentPostId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.posts = new Map();
    this.currentId = 1;
    this.currentContactId = 1;
    this.currentPostId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact submissions
  async createContactSubmission(contact: InsertContact): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const submission: ContactSubmission = { ...contact, id };
    this.contacts.set(id, submission);
    return submission;
  }

  // Blog posts
  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentPostId++;
    const now = new Date();
    const slug = post.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const blogPost: BlogPost = {
      ...post,
      id,
      slug,
      publishedAt: now,
      updatedAt: now,
    };

    this.posts.set(id, blogPost);
    return blogPost;
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.posts.get(id);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.posts.values()).find(
      (post) => post.slug === slug
    );
  }

  async listBlogPosts(limit?: number): Promise<BlogPost[]> {
    const posts = Array.from(this.posts.values())
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

    return limit ? posts.slice(0, limit) : posts;
  }
}

export const storage = new MemStorage();