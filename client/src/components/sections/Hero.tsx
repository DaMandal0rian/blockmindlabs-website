import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { useEffect, useRef } from "react";
import Logo from "@/components/Logo";

function TechAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Node class for blockchain visualization
    class Node {
      x: number;
      y: number;
      connections: Node[];
      pulseRadius: number;
      maxRadius: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.connections = [];
        this.pulseRadius = 0;
        this.maxRadius = 50;
      }

      pulse(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.pulseRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 102, 255, ${1 - this.pulseRadius / this.maxRadius})`;
        ctx.stroke();
        this.pulseRadius = (this.pulseRadius + 0.5) % this.maxRadius;
      }

      connect(ctx: CanvasRenderingContext2D) {
        this.connections.forEach(node => {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(node.x, node.y);
          ctx.strokeStyle = 'rgba(0, 102, 255, 0.2)';
          ctx.stroke();
        });
      }
    }

    // Create nodes
    const nodes: Node[] = [];
    const nodeCount = 15;

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      nodes.push(new Node(x, y));
    }

    // Connect nodes
    nodes.forEach(node => {
      const closest = nodes
        .filter(n => n !== node)
        .sort((a, b) => {
          const distA = Math.hypot(a.x - node.x, a.y - node.y);
          const distB = Math.hypot(b.x - node.x, b.y - node.y);
          return distA - distB;
        })
        .slice(0, 3);

      node.connections = closest;
    });

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections and pulses
      nodes.forEach(node => {
        node.connect(ctx);
        node.pulse(ctx);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <TechAnimation />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Logo symbol as hero centerpiece */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <Logo variant="symbol" className="h-24 md:h-32 lg:h-40" />
              {/* Subtle pulse effect */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-white leading-tight"
          >
            Advanced AI Infrastructure & Real-Time Intelligence Platform
            <span className="block text-blue-400 font-normal">for Enterprise Digital Transformation</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Cutting-edge AI infrastructure solutions with intelligent management, real-time news aggregation, 
            multi-provider routing, and autonomous agent orchestration. Transform your business with enterprise-level AI technology.
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all duration-300 font-nav"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Start Building
            </motion.a>
            <motion.a
              href="#services"
              className="inline-block border border-gray-600 text-gray-300 px-8 py-4 rounded-lg text-lg font-medium hover:border-blue-500 hover:text-blue-400 transition-all duration-300 font-nav"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
            </motion.a>
          </motion.div>

          {/* Technical stats */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-light text-blue-400 mb-2">&lt;100ms</div>
              <div className="text-sm text-gray-400">RPC Latency</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-light text-emerald-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-400">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-light text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-gray-400">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-light text-yellow-400 mb-2">Auto</div>
              <div className="text-sm text-gray-400">Scaling</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}