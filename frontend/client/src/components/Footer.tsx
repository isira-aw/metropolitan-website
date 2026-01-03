import { Link } from "wouter";
import { Building2, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground pt-16 pb-8">
      <div className="container-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="font-heading tracking-tight">METRO<span className="text-primary">POLITAN</span></span>
          </Link>
          <p className="text-accent-foreground/80 text-sm leading-relaxed">
            Leading the way in urban infrastructure, corporate solutions, and sustainable development. Building a better future for our cities.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors"><Linkedin className="h-4 w-4" /></a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading font-semibold text-lg mb-6 text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm text-accent-foreground/80">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
            <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors">Case Studies</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading font-semibold text-lg mb-6 text-white">Our Solutions</h3>
          <ul className="space-y-3 text-sm text-accent-foreground/80">
            <li><a href="#" className="hover:text-primary transition-colors">Urban Infrastructure</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Smart City Planning</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Corporate Consulting</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Sustainable Energy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Logistics & Transport</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading font-semibold text-lg mb-6 text-white">Contact Us</h3>
          <ul className="space-y-4 text-sm text-accent-foreground/80">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>123 Corporate Blvd, Suite 500<br />Metropolis City, MC 10001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span>info@metropolitan.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-padding pt-8 border-t border-white/10 text-center text-sm text-accent-foreground/60">
        <p>&copy; {new Date().getFullYear()} Metropolitan Group. All rights reserved.</p>
      </div>
    </footer>
  );
}
