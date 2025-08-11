import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { fadeIn } from "@/lib/animations";
import { type BlogPost } from "@shared/schema";
import NotFound from "../not-found";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const { data: post, isLoading } = useQuery<BlogPost>({
    queryKey: [`/api/blog/${slug}`],
    enabled: !!slug
  });

  if (isLoading) {
    return (
      <main className="pt-24 min-h-screen bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="h-8 w-2/3 bg-secondary/20 rounded animate-pulse" />
            <div className="h-4 w-1/3 bg-secondary/20 rounded animate-pulse" />
            <div className="h-[200px] w-full bg-secondary/20 rounded animate-pulse" />
          </div>
        </div>
      </main>
    );
  }

  if (!post) {
    return <NotFound />;
  }

  return (
    <main className="pt-24 min-h-screen bg-background">
      <motion.article
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-sm text-muted-foreground">
              {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
            </p>
          </header>

          {post.coverImage && (
            <div
              className="aspect-video rounded-lg mb-8 bg-cover bg-center"
              style={{ backgroundImage: `url(${post.coverImage})` }}
            />
          )}

          <div className="prose prose-invert max-w-none">
            {post.content}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.article>
    </main>
  );
}
