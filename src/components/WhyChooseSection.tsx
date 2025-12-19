import { CheckCircle, Target, Users, Code, Lightbulb, Award } from "lucide-react";
import { motion } from "framer-motion";

const differentials = [
  {
    icon: Target,
    title: "Foco em Resultado",
    description: "Cada elemento é pensado para maximizar conversões e gerar retorno real para seu negócio.",
    stat: "+127%",
    statLabel: "taxa de conversão"
  },
  {
    icon: Award,
    title: "Design Profissional",
    description: "Estética premium que transmite autoridade e diferencia sua marca no mercado.",
    stat: "100%",
    statLabel: "projetos personalizados"
  },
  {
    icon: Users,
    title: "Atendimento Próximo",
    description: "Comunicação direta e transparente em todas as etapas do projeto.",
    stat: "24h",
    statLabel: "tempo de resposta"
  },
  {
    icon: Code,
    title: "Código Limpo e Rápido",
    description: "Sites otimizados que carregam rapidamente e funcionam perfeitamente.",
    stat: "< 2s",
    statLabel: "tempo de carregamento"
  },
  {
    icon: Lightbulb,
    title: "Pensado para Vender",
    description: "Estrutura estratégica baseada em psicologia de conversão e boas práticas de UX.",
    stat: "3x",
    statLabel: "mais leads"
  },
  {
    icon: CheckCircle,
    title: "Suporte Contínuo",
    description: "Acompanhamento pós-entrega para garantir o sucesso do seu projeto.",
    stat: "30 dias",
    statLabel: "de suporte incluso"
  }
];

const WhyChooseSection = () => {
  return (
    <section id="diferenciais" className="py-24 lg:py-32 relative bg-gradient-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(0 0% 50%) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Por que a Lumarc Studio
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Diferenciais que fazem{' '}
            <span className="text-gradient-gold">a diferença</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Não entregamos apenas um site, entregamos uma ferramenta de vendas
            que trabalha 24/7 pelo seu negócio.
          </p>
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover-lift transition-all duration-300"
            >
              {/* Top Row */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{item.stat}</p>
                  <p className="text-xs text-muted-foreground">{item.statLabel}</p>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
