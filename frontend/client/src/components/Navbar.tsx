import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Building2, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { getAllSubdivisions } from "@/lib/subdivisions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const subdivisions = getAllSubdivisions();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#vision" },
    { label: "Solutions", href: "/#solutions" },
    { label: "News", href: "/news" },
    { label: "Careers", href: "/careers" },
    { label: "Case Studies", href: "/blog" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    if (href.startsWith("/#")) return false; // Anchor links handled separately
    return location.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md shadow-sm">
      <div className="container-padding flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <Building2 className="h-8 w-8" />
          <span className="font-heading tracking-tight text-accent text-2xl">METRO<span className="text-primary">POLITAN</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.href) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary outline-none">
              Services <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {subdivisions.map((subdivision) => (
                <DropdownMenuItem key={subdivision.id} asChild>
                  <Link href={`/divisions/${subdivision.slug}`} className="w-full cursor-pointer">
                    {subdivision.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild className="ml-4 font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden border-t bg-background p-4 absolute w-full shadow-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="text-base font-medium p-2 hover:bg-secondary rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t pt-4">
              <p className="text-sm font-semibold text-muted-foreground mb-2 px-2">Services</p>
              {subdivisions.map((subdivision) => (
                <Link
                  key={subdivision.id}
                  href={`/divisions/${subdivision.slug}`}
                  className="block text-sm p-2 hover:bg-secondary rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {subdivision.name}
                </Link>
              ))}
            </div>
            <Button asChild className="w-full mt-2">
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
