import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center font-bold text-primary-foreground text-xl transition-all duration-300 group-hover:glow-gold">
              LM
            </div>
            <span className="text-lg font-bold text-foreground hidden sm:block">
              Lumarc <span className="text-primary">Studio</span>
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
              Serviços
            </a>
            <a href="#diferenciais" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
              Diferenciais
            </a>
            <a href="#processo" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
              Processo
            </a>
            <a href="#depoimentos" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
              Depoimentos
            </a>
          </nav>

          {/* CTA */}
          <Button variant="hero" size="default">
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
