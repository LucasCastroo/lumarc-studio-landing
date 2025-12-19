import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap, Shield, Globe, Smartphone, Layout, Search, Code } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">

      {/* Fixed Background Glow - "Luz Amarelo Ouro" */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gold/15 opacity-40 rounded-full blur-[150px] -z-10 pointer-events-none mix-blend-screen" />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-20 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(45 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(45 100% 50%) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
      }} />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">

        {/* Badge / Label */}
        <div className="animate-fade-up opacity-0 [animation-delay:200ms] inline-flex items-center gap-3 px-6 py-2 rounded-full bg-secondary/50 border border-white/10 backdrop-blur-sm mb-8 hover:bg-secondary/80 transition-colors cursor-default">
          <span className="flex h-3 w-3 rounded-full bg-gold animate-pulse shadow-[0_0_10px_hsl(45,100%,50%)]"></span>
          <span className="text-sm font-semibold text-gold/90 tracking-wide uppercase">
            Lumarc Studio Premium Services
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="animate-fade-up opacity-0 [animation-delay:400ms] text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-8 max-w-5xl mx-auto">
          Transforme sua <br className="hidden sm:block" />
          <span className="relative inline-block">
            <span className="relative text-gradient-gold drop-shadow-sm">Presença Digital</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up opacity-0 [animation-delay:600ms] text-lg sm:text-xl text-muted-foreground/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Estratégia, design de alta performance e tecnologia que convertem visitantes em clientes fiéis. O padrão ouro em desenvolvimento web.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up opacity-0 [animation-delay:800ms] flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <Button
            size="xl"
            className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-black font-semibold rounded-full px-8 h-14 text-lg shadow-[0_0_20px_hsl(45,100%,50%,0.3)] hover:shadow-[0_0_30px_hsl(45,100%,50%,0.5)] transition-all duration-300"
          >
            Começar Agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="xl"
            className="w-full sm:w-auto text-foreground hover:bg-white/5 rounded-full px-8 h-14 text-lg border border-white/10 hover:border-gold/30 transition-all"
          >
            Ver Portfólio
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="animate-fade-up opacity-0 [animation-delay:1000ms] flex flex-col items-center gap-2 mb-20">
          <div className="flex -space-x-4 mb-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-[10px] text-muted-foreground font-bold">
                U
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-background bg-gold flex items-center justify-center text-xs font-bold text-black">
              +150
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex gap-0.5 text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="font-medium text-foreground">5.0</span>
            <span>de satisfação dos clientes</span>
          </div>
        </div>

        {/* Visual Dashboard Mockup */}
        <div className="animate-fade-up opacity-0 [animation-delay:1200ms] w-full max-w-6xl relative perspective-[2000px]">
          {/* Glow horizon behind dashboard */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-gold/20 blur-[120px] -z-10 rounded-full mix-blend-screen pointer-events-none"></div>

          <div className="relative bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/5 [transform:rotateX(12deg)] hover:[transform:rotateX(0deg)] transition-transform duration-700 ease-out group">
            {/* Header */}
            <div className="h-12 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
              <div className="ml-4 h-6 w-64 bg-white/5 rounded-md flex items-center px-3 text-[10px] text-muted-foreground font-mono">
                lumarcstudio.com/dashboard/analytics
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Panel */}
              <div className="col-span-1 space-y-6">
                <div className="p-5 rounded-lg bg-gradient-to-br from-white/5 to-transparent border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gold/20 rounded-lg text-gold"><Globe className="w-5 h-5" /></div>
                    <span className="text-sm text-muted-foreground">Presença Online</span>
                  </div>
                  <div className="text-3xl font-bold text-foreground">24/7</div>
                  <div className="text-xs text-green-400 mt-1 flex items-center gap-1">
                    <span className="text-muted-foreground">Sua vitrine digital</span>
                  </div>
                </div>

                <div className="p-5 rounded-lg bg-gradient-to-br from-white/5 to-transparent border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gold/20 rounded-lg text-gold"><Zap className="w-5 h-5" /></div>
                    <span className="text-sm text-muted-foreground">Otimização</span>
                  </div>
                  <div className="text-3xl font-bold text-foreground">100%</div>
                  <div className="text-xs text-gold mt-1">
                    Alta Performance
                  </div>
                </div>
              </div>

              {/* Main Chart Area */}
              <div className="col-span-1 md:col-span-2 p-5 rounded-lg bg-white/[0.02] border border-white/5 relative overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-lg">Crescimento da Marca</h3>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-gold/10 text-gold text-xs rounded border border-gold/20">Semanal</span>
                    <span className="px-2 py-1 hover:bg-white/5 text-muted-foreground text-xs rounded transition-colors">Mensal</span>
                  </div>
                </div>

                {/* Fake Chart Lines */}
                <div className="h-40 flex items-end gap-2 px-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 50].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-gold/40 to-gold/5 rounded-t-sm transition-all duration-500 hover:from-gold hover:to-gold/20" style={{ height: `${h}%` }}></div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <Globe className="w-32 h-32 text-gold/30 rotate-12" />
                </div>
              </div>

              {/* Bottom Row */}
              {/* Bottom Row */}
              <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Mobile */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 flex flex-col justify-center hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-2 mb-1 text-muted-foreground text-xs">
                    <Smartphone className="w-4 h-4 text-gold" /> Dispositivos
                  </div>
                  <div className="font-semibold text-foreground text-sm">Mobile First</div>
                </div>
                {/* Design */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 flex flex-col justify-center hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-2 mb-1 text-muted-foreground text-xs">
                    <Layout className="w-4 h-4 text-gold" /> UI/UX
                  </div>
                  <div className="font-semibold text-foreground text-sm">Design Premium</div>
                </div>
                {/* SEO */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 flex flex-col justify-center hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-2 mb-1 text-muted-foreground text-xs">
                    <Search className="w-4 h-4 text-gold" /> SEO Info
                  </div>
                  <div className="font-semibold text-foreground text-sm">Google Friendly</div>
                </div>
                {/* Tech */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 flex flex-col justify-center hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-2 mb-1 text-muted-foreground text-xs">
                    <Code className="w-4 h-4 text-gold" /> Stack
                  </div>
                  <div className="font-semibold text-foreground text-sm">Clean Code</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
