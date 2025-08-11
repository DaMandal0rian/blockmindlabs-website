import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "@/lib/animations";
import { ExternalLink } from "lucide-react";

interface AIUpdate {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  company: "OpenAI" | "Anthropic";
  category: string;
  link?: string;
}

const aiUpdates: AIUpdate[] = [
  {
    id: "1",
    title: "OpenAI Launches GPT-5 with Enhanced Reasoning Capabilities",
    excerpt: "GPT-5 sets new standards with state-of-the-art performance across coding, mathematics, writing, and visual perception. Features improved reasoning, multimodal input capabilities, and cleaner task execution for complex workflows.",
    date: "August 2025",
    company: "OpenAI",
    category: "Model Release",
    link: "https://openai.com/news/"
  },
  {
    id: "2", 
    title: "Anthropic Releases Claude 4 Series: Opus 4.1 and Sonnet 4",
    excerpt: "Claude Opus 4.1 emerges as the world's leading coding model with sustained performance on complex tasks. Claude Sonnet 4 achieves 72.7% on SWE-bench, setting new industry standards for AI development capabilities.",
    date: "August 2025",
    company: "Anthropic",
    category: "Model Release",
    link: "https://www.anthropic.com/news/"
  },
  {
    id: "3",
    title: "OpenAI Introduces First Open-Weight Models Since GPT-2",
    excerpt: "gpt-oss-120b and gpt-oss-20b released under Apache 2.0 license. These models provide accessible, lower-cost options for developers, with gpt-oss-20b optimized to run efficiently on laptops.",
    date: "August 2025", 
    company: "OpenAI",
    category: "Open Source",
    link: "https://openai.com/news/"
  },
  {
    id: "4",
    title: "Anthropic Hits $3B Annualized Revenue with Claude Enterprise Adoption",
    excerpt: "Revenue growth accelerated by $1B in just three months, driven by enterprise adoption from GitLab, Cursor, Intuit, Pfizer, and Salesforce. Claude 4 integration with GitHub Copilot further expands developer reach.",
    date: "July 2025",
    company: "Anthropic", 
    category: "Business Growth",
    link: "https://www.anthropic.com/news/"
  },
  {
    id: "5",
    title: "OpenAI Announces ChatGPT Agent for Autonomous Task Completion",
    excerpt: "New ChatGPT agent can think, act, and use tools to complete complex tasks including research, bookings, and presentation creation. Represents significant progress toward autonomous AI assistance.",
    date: "July 2025",
    company: "OpenAI",
    category: "Product Feature",
    link: "https://openai.com/news/"
  },
  {
    id: "6",
    title: "Anthropic Launches Research Capability with Google Workspace Integration",
    excerpt: "Claude can now search across internal work context and the web to accelerate decision-making. Available in early beta for Max, Team, and Enterprise plans across US, Japan, and Brazil.",
    date: "July 2025",
    company: "Anthropic",
    category: "Enterprise Integration",
    link: "https://www.anthropic.com/news/"
  }
];

export default function LatestUpdates() {

  return (
    <section id="updates" className="py-32 bg-black/95 relative overflow-hidden">
      {/* Subtle tech pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 48%, rgba(59, 130, 246, 0.3) 49%, rgba(59, 130, 246, 0.3) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(16, 185, 129, 0.3) 49%, rgba(16, 185, 129, 0.3) 51%, transparent 52%)
          `,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div variants={fadeIn} className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <motion.p className="text-sm text-blue-400 mb-4 tracking-wide uppercase font-medium">
              Industry Intelligence
            </motion.p>
            <motion.h2 className="text-4xl md:text-5xl font-light mb-6 text-white leading-tight">
              Latest AI developments
            </motion.h2>
            <motion.p className="text-lg text-gray-300 max-w-2xl">
              Stay ahead with real-time insights from leading AI companies. Track breakthrough 
              releases, enterprise adoption, and technological advances shaping the industry.
            </motion.p>
          </div>
          
          <div className="space-y-6">
            {aiUpdates.map((update, index) => (
              <motion.article
                key={update.id}
                variants={fadeIn}
                className="group border border-gray-800/50 rounded-lg bg-gray-900/20 hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${
                            update.company === "OpenAI" ? "bg-green-400" : "bg-purple-400"
                          }`}></div>
                          <span className={`text-sm font-medium ${
                            update.company === "OpenAI" ? "text-green-400" : "text-purple-400"
                          }`}>
                            {update.company}
                          </span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                        <span className="text-sm text-gray-400 font-medium">
                          {update.date}
                        </span>
                        <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                        <span className="text-xs text-gray-500 px-2 py-1 rounded-full bg-gray-800/50">
                          {update.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-medium text-white group-hover:text-blue-300 transition-colors leading-tight">
                        {update.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed">{update.excerpt}</p>
                      
                      {update.link && (
                        <a 
                          href={update.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/btn"
                        >
                          <span className="text-sm font-medium">Learn more</span>
                          <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                      )}
                    </div>
                    
                    {/* Company indicator */}
                    <div className="hidden md:block">
                      <div className={`w-16 h-16 rounded-lg border flex items-center justify-center ${
                        update.company === "OpenAI" 
                          ? "bg-green-500/10 border-green-500/20" 
                          : "bg-purple-500/10 border-purple-500/20"
                      }`}>
                        <span className={`font-mono text-sm font-medium ${
                          update.company === "OpenAI" ? "text-green-400" : "text-purple-400"
                        }`}>
                          {update.company === "OpenAI" ? "OAI" : "ANT"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
