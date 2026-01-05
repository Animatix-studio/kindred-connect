import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Youtube, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Portfolio", path: "/portfolio" },
      { name: "Careers", path: "#" },
      { name: "Press", path: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "3D Animation", path: "#" },
      { name: "Motion Graphics", path: "#" },
      { name: "VFX", path: "#" },
      { name: "Character Design", path: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", path: "#" },
      { name: "Case Studies", path: "#" },
      { name: "FAQs", path: "#" },
      { name: "Contact", path: "/contact" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card/30">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-display font-bold text-gradient">
                LUMINA
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              Crafting extraordinary visual experiences that captivate audiences
              and bring imagination to life through the art of animation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-foreground mb-6">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm group flex items-center gap-1"
                    >
                      {link.name}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Lumina Studios. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
