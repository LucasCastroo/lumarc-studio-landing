import { Monitor, Rocket, Target, Zap, Smartphone, Palette } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Landing Pages",
    description: "Páginas focadas em conversão, otimizadas para transformar visitantes em leads qualificados."
  },
  {
    icon: Monitor,
    title: "Sites Institucionais",
    description: "Presença digital profissional que transmite credibilidade e fortalece sua marca."
  },
  {
    icon: Palette,
    title: "Design de Conversão",
    description: "Layouts estratégicos baseados em UX que guiam o usuário até a ação desejada."
  },
  {
    icon: Zap,
    title: "Performance Otimizada",
    description: "Sites rápidos e leves que carregam em segundos e ranqueiam melhor no Google."
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Design adaptável para todos os dispositivos, do desktop ao smartphone."
  },
  {
    icon: Rocket,
    title: "SEO Integrado",
    description: "Estrutura otimizada para mecanismos de busca desde o primeiro dia."
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            O que fazemos
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Soluções digitais que{' '}
            <span className="text-gradient-gold">geram resultados</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Desenvolvemos sites e landing pages com foco total em conversão, 
            unindo design moderno e estratégia de negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover-lift hover-glow transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
