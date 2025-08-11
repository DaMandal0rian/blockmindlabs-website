import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/animations";

const TechVisualization = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <defs>
      <linearGradient id="techGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#10B981" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#EF4444" stopOpacity="0.4" />
      </linearGradient>
      <filter id="blur">
        <feGaussianBlur stdDeviation="1" />
      </filter>
    </defs>
    
    {/* Background grid */}
    <defs>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" strokeWidth="0.5" opacity="0.3"/>
      </pattern>
    </defs>
    <rect width="400" height="400" fill="url(#grid)" />
    
    {/* Central hub */}
    <circle cx="200" cy="200" r="30" fill="none" stroke="#3B82F6" strokeWidth="3" opacity="0.8">
      <animate attributeName="r" values="30;35;30" dur="3s" repeatCount="indefinite" />
    </circle>
    
    {/* Orbiting elements representing different tech areas */}
    {Array.from({ length: 8 }, (_, i) => {
      const angle = (i * 45) * (Math.PI / 180);
      const radius = 120;
      const x = 200 + Math.cos(angle) * radius;
      const y = 200 + Math.sin(angle) * radius;
      
      return (
        <g key={i}>
          <circle 
            cx={x} 
            cy={y} 
            r="8" 
            fill={i < 3 ? "#3B82F6" : i < 6 ? "#10B981" : "#EF4444"} 
            opacity="0.7"
          >
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin={`${i * 0.25}s`} />
          </circle>
          
          {/* Connection lines */}
          <line 
            x1="200" 
            y1="200" 
            x2={x} 
            y2={y} 
            stroke="url(#techGrad)" 
            strokeWidth="1" 
            opacity="0.4"
          >
            <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
          </line>
        </g>
      );
    })}
    
    {/* Data streams */}
    {Array.from({ length: 5 }, (_, i) => (
      <path
        key={i}
        d={`M ${50 + i * 80} 50 Q 200 ${100 + i * 40} ${350 - i * 60} 350`}
        stroke="#3B82F6"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
        strokeDasharray="10,5"
      >
        <animate 
          attributeName="stroke-dashoffset" 
          values="0;-15" 
          dur={`${2 + i * 0.5}s`} 
          repeatCount="indefinite" 
        />
      </path>
    ))}
    
    {/* Technology labels */}
    <text x="120" y="120" fill="#3B82F6" fontSize="10" opacity="0.8">AI</text>
    <text x="280" y="120" fill="#10B981" fontSize="10" opacity="0.8">Blockchain</text>
    <text x="200" y="320" fill="#EF4444" fontSize="10" opacity="0.8">Security</text>
  </svg>
);

export default function About() {
  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={slideIn} className="order-2 lg:order-1">
            <div className="relative">
              {/* Tech visualization container */}
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-gray-800/50">
                <TechVisualization />
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">100+</div>
                  <div className="text-xs text-gray-400">Projects Delivered</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">24/7</div>
                  <div className="text-xs text-gray-400">System Monitoring</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="order-1 lg:order-2 space-y-8">
            <div>
              <motion.p variants={slideIn} className="text-sm text-blue-400 mb-4 tracking-wide uppercase font-medium">
                About Blockmind Labs
              </motion.p>
              <motion.h2 variants={slideIn} className="text-4xl md:text-5xl font-light mb-8 text-white leading-tight">
                Engineering the future of
                <span className="block text-blue-400 font-normal">intelligent systems</span>
              </motion.h2>
            </div>
            
            <motion.div variants={fadeIn} className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                We are a research-driven technology organization specializing in autonomous AI systems, 
                cryptographic protocols, and advanced cybersecurity infrastructure. Our mission centers 
                on building the foundational technologies that will power the next generation of 
                decentralized intelligence.
              </p>
              <p>
                Through rigorous research and practical implementation, we develop solutions that enhance 
                security, reliability, and autonomy in distributed systems. Our work spans from 
                low-level cryptographic primitives to high-level AI orchestration platforms.
              </p>
            </motion.div>
            
            {/* Key differentiators */}
            <motion.div variants={fadeIn} className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <div className="text-sm text-gray-400 font-medium">Research Focus</div>
                <div className="text-white">Autonomous Systems</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-400 font-medium">Core Expertise</div>
                <div className="text-white">Cryptographic Protocols</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-400 font-medium">Deployment</div>
                <div className="text-white">Production Scale</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-400 font-medium">Network</div>
                <div className="text-white">Multi-Chain</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
