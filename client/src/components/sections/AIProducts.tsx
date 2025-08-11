import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerChildren } from "@/lib/animations";
import { ArrowRight, ExternalLink } from "lucide-react";

const aiProducts = [
  {
    title: "AI Ops",
    subtitle: "Autonomous model lifecycle management",
    description: "Self-optimizing deployment pipelines with intelligent resource allocation and predictive scaling for production ML systems.",
    features: [
      "Zero-downtime model deployment",
      "Adaptive resource orchestration", 
      "Anomaly detection & auto-remediation",
      "Cost optimization algorithms"
    ],
    status: "production",
    gradient: "from-blue-500/10 to-cyan-400/10"
  },
  {
    title: "AI Agent Orchestration", 
    subtitle: "Multi-agent coordination platform",
    description: "Distributed intelligence framework enabling autonomous agent collaboration with dynamic task allocation and consensus mechanisms.",
    features: [
      "Decentralized agent networks",
      "Consensus-driven task distribution",
      "Inter-agent communication protocols", 
      "Performance-based resource allocation"
    ],
    status: "beta",
    gradient: "from-purple-500/10 to-blue-400/10"
  },
  {
    title: "AI Metadata",
    subtitle: "Comprehensive model lineage tracking",
    description: "Immutable provenance system for AI assets with cryptographic verification and compliance-ready audit trails.",
    features: [
      "Cryptographic model fingerprinting",
      "Immutable training lineage",
      "Automated compliance reporting",
      "Cross-platform asset tracking"
    ],
    status: "new",
    gradient: "from-emerald-500/10 to-teal-400/10"
  }
];

export default function AIProducts() {
  return (
    <section id="ai-products" className="py-32 bg-black relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="container mx-auto px-4 relative z-10"
      >
        {/* Minimal Section Header */}
        <motion.div variants={fadeIn} className="mb-24">
          <div className="max-w-4xl">
            <motion.p variants={slideIn} className="text-sm text-gray-400 mb-4 tracking-wide uppercase">
              Featured products & services
            </motion.p>
            <motion.h2 variants={slideIn} className="text-5xl md:text-6xl font-light mb-8 text-white leading-tight">
              AI Products & Solutions Portfolio
              <br />
              <span className="text-blue-400 font-normal">Advanced Machine Learning Infrastructure</span>
            </motion.h2>
            <motion.p variants={slideIn} className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Innovative AI infrastructure products featuring autonomous agents, real-time intelligence systems, 
              and enterprise-grade machine learning platforms designed for digital transformation.
            </motion.p>
          </div>
        </motion.div>

        {/* Clean Product List */}
        <div className="space-y-16">
          {aiProducts.map((product, index) => (
            <motion.div
              key={product.title}
              variants={fadeIn}
              custom={index}
              className="group"
            >
              <div className="grid md:grid-cols-[1fr,2fr] gap-12 items-start border-t border-gray-800/50 pt-16 first:border-t-0 first:pt-0">
                {/* Product Info */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-medium text-white" itemProp="name">
                      {product.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      product.status === 'new' ? 'bg-emerald-500/20 text-emerald-400' :
                      product.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-400 font-medium">
                    {product.subtitle}
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    {product.description}
                  </p>

                  <motion.button
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
                  >
                    <span className="text-sm font-medium">More info</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {product.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      className="flex items-center gap-4 p-4 bg-gray-900/30 border border-gray-800/50 rounded-lg hover:border-gray-700/50 transition-colors group/feature"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-400/60" />
                      <span className="text-gray-300 text-sm font-medium group-hover/feature:text-white transition-colors">
                        {feature}
                      </span>
                      <ExternalLink className="h-3 w-3 text-gray-500 ml-auto opacity-0 group-hover/feature:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          variants={fadeIn}
          className="mt-32 text-center"
        >
          <h3 className="text-3xl font-light mb-6 text-white">
            Explore, integrate, build
          </h3>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Try out Blockmind's cutting-edge AI products: autonomous operations, agent orchestration, 
            and metadata tracking. Whether you're scaling a machine learning pipeline or optimizing 
            AI workflows, our technology is built to enhance efficiency, reliability, and autonomy.
          </p>
          <motion.a
            href="#ai-products"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#ai-products');
              if (element) {
                window.scrollTo({
                  top: element.getBoundingClientRect().top + window.scrollY - 96,
                  behavior: "smooth"
                });
              }
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            VIEW ALL PRODUCTS
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}