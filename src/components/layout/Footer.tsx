import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/logo.jpg";

interface QuickLink {
  name: string;
  path: string;
  external?: boolean;
}

const quickLinks: QuickLink[] = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Sitemap", path: "/sitemap" },
];

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
];

export const Footer = () => {
  return (
    <footer className="relative text-primary-foreground">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=800&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-primary/95" />
      </div>

      <div className="container-custom py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Sardar Cafe" className="h-16 w-auto" />
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              Crafting the perfect cup with passion. Where every sip tells a story of quality, tradition, and community.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  {link.external ? (
                    <a
                      href={link.path}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Plot number 8-415/73, Miyapur,<br />
                  Manjeera Pipeline Rd, Sapthagiri Colony,<br />
                  Alwin, Hafeezpet, Hyderabad,<br />
                  Telangana 500049, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+918333833659" className="text-primary-foreground/80 hover:text-primary-foreground">
                  +91 83338 33659
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@sardarcafe.com" className="text-primary-foreground/80 hover:text-primary-foreground">
                  info@sardarcafe.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-semibold">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>Mon - Fri: 7:00 AM - 10:00 PM</p>
                  <p>Sat - Sun: 8:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Sardar Cafe. All rights reserved.{" "}
            <span className="text-primary-foreground/60">
              Developed by{" "}
              <a
                href="https://octaleads.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground underline transition-colors"
              >
                Octaleads Private Limited
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
