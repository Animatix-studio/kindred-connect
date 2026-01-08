import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import animatixLogo from "@/assets/animatix-logo.png";

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
    <footer className="relative border-t border-border/50 bg-card/20">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 py-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-8">
              <img 
                src={animatixLogo} 
                alt="AnimatiX Studio" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground max-w-sm mb-10 leading-relaxed">
              Crafting extraordinary visual experiences that captivate audiences
              and bring imagination to life through the art of animation.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl premium-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column, colIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: colIndex * 0.1 }}
            >
              <h4 className="font-semibold text-foreground mb-8 text-sm tracking-wide uppercase">
                {column.title}
              </h4>
              <ul className="space-y-5">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="group text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2"
                    >
                      {link.name}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-3xl premium-card"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-display font-bold mb-2">
                Stay in the loop
              </h3>
              <p className="text-muted-foreground text-sm">
                Subscribe for exclusive updates, behind-the-scenes content, and
                industry insights.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors w-full md:w-72"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-full whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © 2024 AnimatiX Studio. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a
              href="#"
              className="hover:text-foreground transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-colors duration-300"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
