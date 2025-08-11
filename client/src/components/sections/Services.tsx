import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, slideIn, staggerChildren } from "@/lib/animations";
import { Brain, Shield, Database, Zap, Network, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Professional SVG visuals for each service
const ServiceVisual = ({ type }: { type: string }) => {
  if (type === "rpc") {
    return (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <linearGradient id="rpcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="#000" />
        
        {/* Server nodes */}
        {Array.from({ length: 6 }, (_, i) => (
          <g key={i}>
            <rect
              x={50 + i * 60}
              y={120}
              width="40"
              height="60"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              opacity="0.8"
              rx="4"
            >
              <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
            </rect>
            {/* Server status lights */}
            <circle cx={70 + i * 60} cy={140} r="2" fill="#10B981">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
            </circle>
            <circle cx={70 + i * 60} cy={150} r="2" fill="#3B82F6">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
            </circle>
          </g>
        ))}
        
        {/* Data transmission lines */}
        {Array.from({ length: 8 }, (_, i) => (
          <path
            key={i}
            d={`M ${70 + (i % 3) * 60} 80 Q 200 ${50 + i * 5} ${330 - (i % 3) * 60} 80`}
            stroke="#3B82F6"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
            strokeDasharray="4,4"
          >
            <animate attributeName="stroke-dashoffset" values="0;-8" dur={`${1 + i * 0.2}s`} repeatCount="indefinite" />
          </path>
        ))}
        
        {/* Latency indicator */}
        <text x="200" y="250" fill="#10B981" fontSize="12" textAnchor="middle" opacity="0.8">
          &lt; 1ms latency
        </text>
      </svg>
    );
  }
  
  if (type === "gateway") {
    return (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <linearGradient id="gatewayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#065F46" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="#000" />
        
        {/* Central gateway */}
        <circle cx="200" cy="150" r="40" fill="none" stroke="#10B981" strokeWidth="3" opacity="0.8">
          <animate attributeName="r" values="40;45;40" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x="200" y="155" fill="#10B981" fontSize="10" textAnchor="middle">Gateway</text>
        
        {/* Incoming requests */}
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i * 45) * (Math.PI / 180);
          const x = 200 + Math.cos(angle) * 120;
          const y = 150 + Math.sin(angle) * 80;
          
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="6" fill="#3B82F6" opacity="0.6">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin={`${i * 0.25}s`} />
              </circle>
              {/* Request flow lines */}
              <line x1={x} y1={y} x2="200" y2="150" stroke="#10B981" strokeWidth="1" opacity="0.3">
                <animate attributeName="stroke-opacity" values="0.1;0.6;0.1" dur="2s" repeatCount="indefinite" begin={`${i * 0.25}s`} />
              </line>
            </g>
          );
        })}
        
        {/* Load balancing visualization */}
        <path
          d="M 100 250 Q 200 200 300 250"
          stroke="#10B981"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8,4"
        >
          <animate attributeName="stroke-dashoffset" values="0;-12" dur="2s" repeatCount="indefinite" />
        </path>
      </svg>
    );
  }
  
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="gpuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#991B1B" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#000" />
      
      {/* GPU cluster visualization */}
      {Array.from({ length: 12 }, (_, i) => {
        const row = Math.floor(i / 4);
        const col = i % 4;
        const x = 80 + col * 60;
        const y = 80 + row * 50;
        
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width="50"
              height="30"
              fill="none"
              stroke="#EF4444"
              strokeWidth="2"
              opacity="0.8"
              rx="4"
            >
              <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
            </rect>
            {/* GPU cores */}
            {Array.from({ length: 6 }, (_, j) => (
              <rect
                key={j}
                x={x + 5 + (j % 3) * 13}
                y={y + 5 + Math.floor(j / 3) * 10}
                width="8"
                height="6"
                fill="#EF4444"
                opacity="0.6"
              >
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1s" repeatCount="indefinite" begin={`${(i * 0.1 + j * 0.05)}s`} />
              </rect>
            ))}
          </g>
        );
      })}
      
      {/* Performance indicator */}
      <text x="200" y="250" fill="#EF4444" fontSize="12" textAnchor="middle" opacity="0.8">
        High-Performance Computing
      </text>
      
      {/* Connection lines between GPUs */}
      <path
        d="M 80 150 L 320 150"
        stroke="#EF4444"
        strokeWidth="1"
        opacity="0.4"
        strokeDasharray="4,4"
      >
        <animate attributeName="stroke-dashoffset" values="0;-8" dur="2s" repeatCount="indefinite" />
      </path>
    </svg>
  );
};

// Main service cards data
const mainServices = [
  {
    title: "Low Latency RPC Services",
    description: "High-performance remote procedure call infrastructure optimized for minimal latency and maximum throughput",
    icon: Zap,
    visual: "rpc"
  },
  {
    title: "AI Gateway & Routing", 
    description: "Intelligent request routing and load balancing for AI model endpoints with failover and optimization",
    icon: Shield,
    visual: "gateway"
  },
  {
    title: "GPU Cluster Rentals",
    description: "Scalable GPU infrastructure for training and deploying large language models with enterprise-grade reliability",
    icon: Server,
    visual: "gpu"
  }
];

// Detailed service information
const detailedServices = [
  {
    id: "rpc",
    title: "Low Latency RPC Services",
    icon: Zap,
    description: "Enterprise-grade remote procedure call infrastructure designed for microsecond-level latency. Our optimized protocol implementations and global edge deployments ensure maximum throughput and minimal response times for mission-critical applications.",
    action: "View performance metrics"
  },
  {
    id: "aiops",
    title: "AIOPS Observability & DevOps",
    icon: Brain,
    description: "Comprehensive monitoring and observability platform for AI/ML systems. Real-time performance tracking, automated anomaly detection, and intelligent alerting for production AI workloads with full DevOps integration and deployment pipelines.",
    action: "Start monitoring"
  },
  {
    id: "agents",
    title: "AI Agents & MCP Orchestration",
    icon: Network,
    description: "Advanced autonomous agent frameworks with Model Context Protocol (MCP) integration. Scalable orchestration platform for deploying, managing, and coordinating intelligent agents across distributed systems with real-time communication protocols.",
    action: "Deploy agents"
  },
  {
    id: "gateway",
    title: "AI Gateway & Routing",
    icon: Shield,
    description: "Intelligent request routing and load balancing for AI model endpoints. Advanced failover mechanisms, cost optimization, and performance monitoring across multiple AI providers with unified API access and analytics.",
    action: "Configure routing"
  },
  {
    id: "metadata",
    title: "AI Metadata & Storage",
    icon: Database,
    description: "Comprehensive metadata management system for AI assets. Version control, lineage tracking, and provenance management for models, datasets, and experiments with enterprise-grade security and compliance features.",
    action: "Manage assets"
  },
  {
    id: "gpu",
    title: "GPU Cluster Rentals for LLMs",
    icon: Server,
    description: "High-performance GPU infrastructure optimized for large language model training and inference. On-demand access to enterprise-grade clusters with auto-scaling, cost optimization, and specialized frameworks for LLM workloads.",
    action: "Launch cluster"
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(detailedServices[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleServiceChange = (service: typeof detailedServices[0]) => {
    if (service.id === selectedService.id || isAnimating) return;
    setIsAnimating(true);
    setSelectedService(service);
  };

  return (
    <section id="services" className="py-24 bg-black">
      {/* Service Cards Overview */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="container mx-auto px-4 mb-24"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <motion.p className="text-sm text-blue-400 mb-4 tracking-wide uppercase font-medium">
            Product offerings
          </motion.p>
          <motion.h2 className="text-4xl md:text-5xl font-light mb-6 text-white leading-tight">
            AI Infrastructure Solutions & Services
            <span className="block text-blue-400 font-normal">Enterprise-Grade AI Platform Management</span>
          </motion.h2>
          <motion.p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI infrastructure solutions including intelligent management systems, real-time data aggregation, 
            multi-provider AI routing, and autonomous agent orchestration designed for enterprise scalability and reliability.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="overflow-hidden bg-black/50 border-gray-800 hover:border-blue-500/40 transition-all duration-500 group">
                <div className="h-48 w-full bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
                  <ServiceVisual type={service.visual} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                      <service.icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors" itemProp="name">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Detailed Service Information */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container mx-auto px-4"
      >
        <div className="grid md:grid-cols-[300px,1fr] gap-8">
          {/* Service Navigation */}
          <div className="border-l border-blue-500/20">
            {detailedServices.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => handleServiceChange(service)}
                className={`block w-full text-left px-6 py-4 relative ${
                  selectedService.id === service.id
                    ? "text-blue-500"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {selectedService.id === service.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 w-px h-full bg-blue-500"
                    style={{ top: 0 }}
                  />
                )}
                <div className="flex items-center gap-3">
                  <service.icon className="h-5 w-5" />
                  <span>{service.title}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Content Panel */}
          <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <selectedService.icon className="h-8 w-8 text-blue-500" />
                  <h3 className="text-2xl font-semibold">{selectedService.title}</h3>
                </div>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  {selectedService.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition-colors"
                >
                  {selectedService.action}
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}