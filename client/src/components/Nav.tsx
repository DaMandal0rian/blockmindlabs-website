import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Logo from "./Logo";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#ai-products", label: "AI Products" },
  { href: "#updates", label: "Updates" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find active section
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string, event?: React.MouseEvent) => {
    event?.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsOpen(false); // Close mobile menu if open
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 96,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo variant="full" size="lg" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(item.href, e)}
              className={`text-base font-medium tracking-wide transition-colors relative font-nav ${
                activeSection === item.href.slice(1)
                  ? "text-blue-500"
                  : "text-gray-300 hover:text-blue-500"
              }`}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="text-gray-300 hover:text-blue-500">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent className="bg-black/95">
            <div className="flex flex-col gap-6 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(item.href, e)}
                  className={`text-xl tracking-tight transition-colors font-nav ${
                    activeSection === item.href.slice(1)
                      ? "text-blue-500"
                      : "text-gray-300 hover:text-blue-500"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
}