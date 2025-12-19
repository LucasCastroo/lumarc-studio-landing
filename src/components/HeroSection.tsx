import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-gold" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Especialistas em conversão</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Transformamos visitantes em{' '}
              <span className="text-gradient-gold">clientes</span>{' '}
              com landing pages de alta conversão
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Design moderno, performance e estratégia para fazer sua empresa vender mais no digital.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="xl" className="group">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Ver como funciona
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-primary">+150</p>
                <p className="text-sm text-muted-foreground">Projetos entregues</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Clientes satisfeitos</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-primary">3x</p>
                <p className="text-sm text-muted-foreground">Mais conversões</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {/* Main Card */}
            <div className="relative bg-card rounded-2xl border border-border p-6 shadow-lg hover-lift">
              <div className="aspect-video bg-secondary rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Preview do seu site</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-secondary rounded-full w-3/4" />
                <div className="h-3 bg-secondary rounded-full w-1/2" />
              </div>
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -top-6 -right-6 bg-card rounded-xl border border-border p-4 shadow-lg animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Conversão</p>
                  <p className="text-lg font-bold text-primary">+127%</p>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -bottom-4 -left-8 bg-card rounded-xl border border-border p-4 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Performance</p>
                  <p className="text-lg font-bold text-primary">100/100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
