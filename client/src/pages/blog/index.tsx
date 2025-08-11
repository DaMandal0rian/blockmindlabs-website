import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { fadeIn, staggerChildren } from "@/lib/animations";
import { type BlogPost } from "@shared/schema";

export default function BlogList() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"]
  });

  return (
    <main className="pt-24 min-h-screen bg-background">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="container mx-auto px-4"
      >
        <motion.div variants={fadeIn} className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Latest Updates</h1>
          
          {isLoading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-48 bg-secondary/20 rounded-lg animate-pulse"
                />
              ))}
            </div>
          ) : posts?.length === 0 ? (
            <p className="text-muted-foreground">No blog posts yet.</p>
          ) : (
            <div className="space-y-8">
              {posts?.map((post) => (
                <motion.article
                  key={post.id}
                  variants={fadeIn}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <a className="block">
                      {post.coverImage && (
                        <div
                          className="aspect-video rounded-lg mb-4 bg-cover bg-center"
                          style={{ backgroundImage: `url(${post.coverImage})` }}
                        />
                      )}
                      <div className="space-y-2">
                        <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                        </p>
                        <p className="text-muted-foreground">{post.excerpt}</p>
                      </div>
                    </a>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </main>
  );
}
