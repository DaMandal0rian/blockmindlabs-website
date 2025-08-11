import { Link } from "wouter";
import { Github, Linkedin, Twitter } from "lucide-react";
import Logo from "./Logo";

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
];

const footerLinks = [
  {
    title: "Company",
    links: [
      { href: "#about", label: "About Us" },
      { href: "#services", label: "Services" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "#services", label: "RPC Services" },
      { href: "#services", label: "AI Gateway" },
      { href: "#services", label: "GPU Clusters" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "#updates", label: "Research" },
      { href: "#ai-products", label: "Products" },
      { href: "#contact", label: "Support" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/">
              <a className="inline-block">
                <Logo variant="full" size="md" />
              </a>
            </Link>
            <p className="mt-4 text-gray-400">
              Advanced infrastructure for autonomous AI systems, blockchain protocols, and enterprise security.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-200 mb-4 font-nav">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-500 transition-colors font-nav"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Blockmind Labs. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
