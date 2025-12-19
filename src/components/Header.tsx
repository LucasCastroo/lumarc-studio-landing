import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Sparkles } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Serviços", href: "#servicos" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Quem Somos", href: "#quem-somos" },
    { name: "Processo", href: "#processo" },
    { name: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "h-16 bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/5"
        : "h-20 bg-transparent border-transparent"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group relative z-50">
            <img
              src="/assets/logo-sem-fundo.png"
              alt="Lumarc Studio Logo"
              className="h-12 w-auto object-contain transition-all duration-300 hover:scale-105 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 shadow-[0_0_8px_hsl(45,100%,50%)]" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90 text-black font-semibold rounded-full shadow-[0_0_15px_hsl(45,100%,50%,0.2)] hover:shadow-[0_0_25px_hsl(45,100%,50%,0.4)] transition-all"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-l border-white/10 w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-8 mt-10">
                  <div className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors flex items-center justify-between group"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                        <Sparkles className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                      </a>
                    ))}
                  </div>
                  <div className="h-px bg-white/10 my-2" />
                  <Button className="w-full bg-primary text-black font-semibold hover:bg-primary/90">
                    Solicitar Orçamento
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
